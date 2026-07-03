import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface TopAppBarTokens {
    containerColor: CompTokenValue<string>
    containerElevation: CompTokenValue<number>
    containerHeight: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerGap: CompTokenValue<number>
    headlineTypeScale: CompTokenValue<TypeScale>
    headlineColor: CompTokenValue<string>
    leadingIconButtonColor: CompTokenValue<string>
}
