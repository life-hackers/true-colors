import Vue from 'vue'
import Target from '@/components/rgb-view'

describe(Target.__file, () => {
  let vm, el

  beforeEach(() => {
    const Constructor = Vue.extend(Target)
    vm = new Constructor().$mount()
    el = vm.$el
  })
  it('should have host class', () => {
    expect(el.querySelector('.rgb').nodeType).to.equal(1)
  })
  xdescribe('#value', () => {
    it('should run the name', () => {
      vm.$set(vm, 'value', 'red')
      vm.$forceUpdate()
      expect(el.querySelector('.rgb').innerText).to.equal(1)
    })
  })
})
