import Vue from 'vue'
import Target from '@/components/landing-page'

describe(Target.name, () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Target)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.info').textContent)
      .to.contains('Show time!')
  })
})
