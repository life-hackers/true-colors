import { mount } from 'vue-test-utils'
import Target from '@/components/rgb-view'

describe(Target.__file, () => {
  let wrap, vm

  beforeEach(() => {
    wrap = mount(Target)
    vm = wrap.vm
  })
  it('should be instanciate', () => {
    expect(wrap.isVueInstance()).to.equal(true)
  })
  describe('#value', () => {
    const testValue = 'rgb(123,123,123)'
    beforeEach(() => {
      wrap.setProps({ value: testValue })
    })
    it('to has computed .rgb', () => {
      expect(vm.rgb).to.equal(testValue)
    })
    it('to has computed .hex', () => {
      expect(vm.hex).to.equal('#7b7b7b')
    })
    describe('dom', () => {
      beforeEach(() => {
        wrap.setProps({ value: testValue })
      })
      it('to has 2 .copy-box', () => {
        expect(wrap.findAll('.copy-box').length).to.equal(2)
      })
    })
  })
})
