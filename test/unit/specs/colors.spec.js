import { mount } from 'vue-test-utils'
import Target from '@/components/colors'

describe(Target.__file, () => {
  let wrap

  beforeEach(() => {
    const value = '#ffffff'
    wrap = mount(Target, { propsData: { value } })
  })
  it('should be instanciate', () => {
    expect(wrap.isVueInstance()).to.equal(true)
  })
  describe('#value', () => {
    const testValue = 'rgb(123,123,123)'
    beforeEach(() => {
      wrap.setProps({ value: testValue })
    })
    describe('dom', () => {
      beforeEach(() => {
        wrap.setProps({ value: testValue })
      })
      it('to has 3 .copy-box', () => {
        expect(wrap.findAll('.copy-box').length).to.equal(3)
      })
    })
  })
})
