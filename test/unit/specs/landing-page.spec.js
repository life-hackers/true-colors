import { shallow } from 'vue-test-utils'
import Target from '@/components/landing-page'

describe(Target.__file, () => {
  let wrap, vm, clock

  beforeEach(() => {
    clock = sinon.useFakeTimers()
    wrap = shallow(Target)
    vm = wrap.vm
  })
  afterEach(() => {
    clock.restore()
  })
  it('should be instanciate', () => {
    expect(wrap.isVueInstance()).to.equal(true)
  })
  describe('#style.background', () => {
    beforeEach(() => {
      const style = { backgroud: 'pink' }
      wrap.setData({ style })
      clock.tick(500)
    })
    it('should update .raw', () => {
      expect(vm.raw).to.equal('')
    })
  })
  describe('#updateRaw', () => {
    let spiSet, spiForce
    beforeEach(() => {
      spiSet = sinon.spy(wrap.vm, '$set')
      spiForce = sinon.spy(wrap.vm, '$forceUpdate')
      wrap.vm.updateRaw()
      clock.tick(500)
    })
    it('should call $set', () => {
      expect(spiSet.calledOnce).to.equal(true)
    })
    it('should call $forceUpdate', () => {
      expect(spiForce.calledOnce).to.equal(true)
    })
  })
})
