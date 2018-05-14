import { shallow } from 'vue-test-utils'
import Target from '@/components/copy-box'

describe(Target.__file, () => {
  let wrap, vm
  let clip, gaEvent

  beforeEach(() => {
    wrap = shallow(Target)
    vm = wrap.vm
    vm.$clip = () => {}
    vm.$gaEvent = () => {}
    clip = sinon.spy(vm, '$clip')
    gaEvent = sinon.spy(vm, '$gaEvent')
  })
  it('should be instanciate', () => {
    expect(wrap.isVueInstance()).to.equal(true)
  })
  describe('#label', () => {
    beforeEach(() => {
      wrap.setProps({ label: 'RGB' })
    })
    describe('dom', () => {
      it('has .label text "RGB"', () => {
        expect(wrap.find('.label').text()).to.contains('RGB')
      })
    })
  })
  describe('#copy', () => {
    beforeEach(() => {
      vm.copy({ target: {} })
    })
    it('should call this.$clip', () => {
      expect(clip.calledOnce).to.equal(true)
    })
    it('should call this.$gaEvent', () => {
      expect(gaEvent.calledOnce).to.equal(true)
    })
  })
})
