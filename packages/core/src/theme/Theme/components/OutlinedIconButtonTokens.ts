import { CompTokenValue } from '../CompTokens'

export interface OutlinedIconButtonTokens {
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    containerColor: CompTokenValue<string>
    outlineColor: CompTokenValue<string>
    outlineWidth: CompTokenValue<number>
    stateLayerShape: CompTokenValue<number>
    stateLayerWidth: CompTokenValue<number>
    stateLayerHeight: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    disabledStateLayerColor: CompTokenValue<string>
    disabledStateLayerOpacity: CompTokenValue<number>
    pressedStateLayerOpacity: CompTokenValue<number>
    pressedIconColor: CompTokenValue<string>
}
