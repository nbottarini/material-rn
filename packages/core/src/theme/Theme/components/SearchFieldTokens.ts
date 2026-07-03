import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface SearchFieldTokens {
    containerShape: CompTokenValue<number>
    containerHeight: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerGap: CompTokenValue<number>
    containerColor: CompTokenValue<string>
    outlineWidth: CompTokenValue<number>
    outlineColor: CompTokenValue<string>
    searchIconSize: CompTokenValue<number>
    searchIconColor: CompTokenValue<string>,
    placeholderColor: CompTokenValue<string>
    caretColor: CompTokenValue<string>
    inputTextTypeScale: CompTokenValue<TypeScale>
    inputTextColor: CompTokenValue<string>
    clearIconSize: CompTokenValue<number>
    clearIconColor: CompTokenValue<string>
}
