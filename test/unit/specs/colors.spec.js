import { mount, createLocalVue } from 'vue-test-utils'
import { VueColor } from '@/plugins/color'
import Target from '@/components/colors'

describe(Target.__file, () => {
  let wrap, localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(VueColor)
    const value = '#ffffff'
    wrap = mount(Target, { localVue, propsData: { value } })
  })
  it('should be instanciate', () => {
    expect(wrap.isVueInstance()).to.equal(true)
  })
  it('has $color function', () => {
    expect(typeof wrap.vm.$color).to.equal('function')
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
