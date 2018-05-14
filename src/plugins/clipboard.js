import Clipboard from 'clipboard'

export const VueClipboard = {
  install: (Vue, { alias = 'clipboard' }) => {
    Vue.prototype['$' + alias] = (target) => {
      // https://github.com/zenorocha/clipboard.js/issues/389
      const v = new Clipboard('.null', {
        text: () => target.innerHTML.trim()
      })
      v.onClick({ currentTarget: target })
      v.destroy()
    }
  }
}
