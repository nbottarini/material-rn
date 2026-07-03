import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface OutlinedButtonTokens {
    containerShape: CompTokenValue<number>
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerGap: CompTokenValue<number>
    outlineColor: CompTokenValue<string>
    outlineWidth: CompTokenValue<number>
    labelTypeScale: CompTokenValue<TypeScale>
    labelColor: CompTokenValue<string>
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    disabledOutlineColor: CompTokenValue<string>
    disabledOutlineOpacity: CompTokenValue<number>
    disabledLabelColor: CompTokenValue<string>
    disabledLabelOpacity: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    pressedOutlineColor: CompTokenValue<string>
    pressedLabelColor: CompTokenValue<string>
    pressedIconColor: CompTokenValue<string>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
