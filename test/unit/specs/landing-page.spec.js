import { shallow } from 'vue-test-utils'
import Target from '@/components/landing-page'

describe(Target.__file, () => {
  let vm

  beforeEach(() => {
    vm = shallow(Target)
  })
  it('should be instanciate', () => {
    expect(vm.isVueInstance()).to.equal(true)
  })
})
