import { shallow } from 'vue-test-utils'
import Target from '@/components/rgb-view'

describe(Target.__file, () => {
  let vm

  beforeEach(() => {
    vm = shallow(Target)
  })
  it('should be instanciate', () => {
    expect(vm.isVueInstance()).to.equal(true)
  })
  describe('#value', () => {
    beforeEach(() => {
      vm.setProps({ value: 'rgb(123,123,123)' })
    })
    it('should change .rgb text', () => {
      expect(vm.find('.rgb').text()).to.contains('123,123,123')
    })
    it('should change .hex text', () => {
      expect(vm.find('.hex').text()).to.contains('7b7b7b')
    })
  })
})
