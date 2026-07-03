import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface FilledButtonTokens {
    containerShape: CompTokenValue<number>
    containerColor: CompTokenValue<string>
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerGap: CompTokenValue<number>
    labelTypeScale: CompTokenValue<TypeScale>
    labelColor: CompTokenValue<string>
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    disabledContainerColor: CompTokenValue<string>
    disabledContainerOpacity: CompTokenValue<number>
    disabledLabelColor: CompTokenValue<string>
    disabledLabelOpacity: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    pressedLabelColor: CompTokenValue<string>
    pressedIconColor: CompTokenValue<string>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
