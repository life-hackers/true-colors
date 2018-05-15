import * as Color from 'color'

const color = Color.default || Color

export const VueColor = {
  install: (Vue, opts) => {
    Vue.prototype.$color = color
  }
}
