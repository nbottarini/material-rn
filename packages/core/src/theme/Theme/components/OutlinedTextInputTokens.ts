import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface OutlinedTextInputTokens {
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerColor: CompTokenValue<string>
    containerGap: CompTokenValue<number>
    containerShape: CompTokenValue<number>
    outlineWidth: CompTokenValue<number>
    outlineColor: CompTokenValue<string>
    leadingIconSize: CompTokenValue<number>
    leadingIconColor: CompTokenValue<string>
    trailingIconSize: CompTokenValue<number>
    trailingIconColor: CompTokenValue<string>
    caretColor: CompTokenValue<string>
    inputTextTypeScale: CompTokenValue<TypeScale>
    inputTextColor: CompTokenValue<string>
    placeholderTextColor: CompTokenValue<string>
    placeholderOpacity: CompTokenValue<number>
    supportingTextTypeScale: CompTokenValue<TypeScale>
    supportingTextColor: CompTokenValue<string>
    focusedOutlineColor: CompTokenValue<string>
    focusedOutlineWidth: CompTokenValue<number>
    focusedContainerPaddingVertical: CompTokenValue<number>
    focusedContainerPaddingHorizontal: CompTokenValue<number>
    disabledContainerColor: CompTokenValue<string>
    disabledContainerOpacity: CompTokenValue<number>
    disabledLeadingIconColor: CompTokenValue<string>
    disabledLeadingIconOpacity: CompTokenValue<number>
    disabledTrailingIconColor: CompTokenValue<string>
    disabledTrailingIconOpacity: CompTokenValue<number>
    disabledOutlineColor: CompTokenValue<string>
    disabledOutlineOpacity: CompTokenValue<number>
    disabledInputTextColor: CompTokenValue<string>
    disabledInputTextOpacity: CompTokenValue<number>
    disabledSupportingTextColor: CompTokenValue<string>
    disabledSupportingTextOpacity: CompTokenValue<number>
    errorTrailingIconColor: CompTokenValue<string>
    errorOutlineColor: CompTokenValue<string>
    errorSupportingTextColor: CompTokenValue<string>
}
