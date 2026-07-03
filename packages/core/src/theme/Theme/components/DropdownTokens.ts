import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface DropdownTokens {
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerColor: CompTokenValue<string>
    containerGap: CompTokenValue<number>
    containerShape: CompTokenValue<number>
    outlineWidth: CompTokenValue<number>
    outlineColor: CompTokenValue<string>
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    inputTextTypeScale: CompTokenValue<TypeScale>
    inputTextColor: CompTokenValue<string>
    placeholderTextColor: CompTokenValue<string>
    placeholderOpacity: CompTokenValue<number>
    supportingTextTypeScale: CompTokenValue<TypeScale>
    supportingTextColor: CompTokenValue<string>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
    disabledContainerColor: CompTokenValue<string>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    disabledOutlineColor: CompTokenValue<string>
    disabledOutlineOpacity: CompTokenValue<number>
    disabledInputTextColor: CompTokenValue<string>
    disabledInputTextOpacity: CompTokenValue<number>
    disabledSupportingTextColor: CompTokenValue<string>
    disabledSupportingTextOpacity: CompTokenValue<number>
    errorIconColor: CompTokenValue<string>
    errorOutlineColor: CompTokenValue<string>
    errorSupportingTextColor: CompTokenValue<string>
}
