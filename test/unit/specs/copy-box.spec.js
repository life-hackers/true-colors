import { shallow } from 'vue-test-utils'
import Target from '@/components/copy-box'

describe(Target.__file, () => {
  let wrap, vm

  beforeEach(() => {
    wrap = shallow(Target)
    vm = wrap.vm
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
  xdescribe('#copy', () => {
    it('should be tested')
  })
})
