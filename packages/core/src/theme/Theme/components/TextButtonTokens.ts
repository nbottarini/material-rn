import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface TextButtonTokens {
    containerShape: CompTokenValue<number>
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerGap: CompTokenValue<number>
    labelTypeScale: CompTokenValue<TypeScale>
    labelColor: CompTokenValue<string>
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    disabledLabelColor: CompTokenValue<string>
    disabledLabelOpacity: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    pressedLabelColor: CompTokenValue<string>
    pressedIconColor: CompTokenValue<string>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
