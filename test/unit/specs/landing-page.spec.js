import Vue from 'vue'
import Target from '@/components/landing-page'

describe(Target.__file, () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Target)
    const vm = new Constructor().$mount()
    const el = vm.$el.querySelector('.hasha')
    expect(el.nodeType).to.equal(1)
  })
})
