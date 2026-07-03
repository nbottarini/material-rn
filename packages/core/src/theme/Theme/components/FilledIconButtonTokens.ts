import { CompTokenValue } from '../CompTokens'

export interface FilledIconButtonTokens {
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    containerColor: CompTokenValue<string>
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
