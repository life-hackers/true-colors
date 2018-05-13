function loadScript (url) {
  return new Promise((resolve, reject) => {
    var head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.async = true
    script.src = url
    script.charset = 'utf8'

    head.appendChild(script)

    script.onload = resolve
    script.onerror = reject
  })
}

let gtag = function () {
  window.dataLayer.push(arguments)
}

function setup (trackId) {
  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', trackId)
}

export const Gtag = {
  install: (Vue, { trackId, disabled, log }) => {
    if (!disabled) {
      loadScript('https://www.googletagmanager.com/gtag/js?id=' + trackId)
    }
    setup(trackId)
    if (log) {
      const og = gtag
      gtag = function () {
        console.log(arguments)
        og(arguments)
      }
    }
    Vue.prototype.$ga = gtag
    Vue.prototype.$gaEvent = (e, { category, label, value }) => {
      gtag('event', e, {
        event_category: category,
        event_label: label,
        value
      })
    }
  }
}
