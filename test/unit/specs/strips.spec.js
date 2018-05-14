import { mount } from 'vue-test-utils'
import Target from '@/components/strips'

describe(Target.__file, () => {
  let wrap

  beforeEach(() => {
    wrap = mount(Target)
  })
  it('should be instanciate', () => {
    expect(wrap.isVueInstance()).to.equal(true)
  })
  describe('dom', () => {
    beforeEach(() => {
    })
    it('should has 4 .strip', () => {
      expect(wrap.findAll('.strip').length).to.equal(4)
    })
  })
})
