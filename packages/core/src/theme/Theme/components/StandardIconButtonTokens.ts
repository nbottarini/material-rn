import { CompTokenValue } from '../CompTokens'

export interface StandardIconButtonTokens {
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    stateLayerShape: CompTokenValue<number>
    stateLayerWidth: CompTokenValue<number>
    stateLayerHeight: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
    pressedIconColor: CompTokenValue<string>
}
