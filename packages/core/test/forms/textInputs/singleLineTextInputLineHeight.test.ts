import { singleLineTextInputLineHeight } from '../../../src/forms/textInputs/singleLineTextInputLineHeight'

it('lets iOS use the native line height for single-line text inputs', () => {
    expect(singleLineTextInputLineHeight(28, 'ios')).toBeUndefined()
})

it('preserves the design-system line height on Android', () => {
    expect(singleLineTextInputLineHeight(28, 'android')).toEqual(28)
})
