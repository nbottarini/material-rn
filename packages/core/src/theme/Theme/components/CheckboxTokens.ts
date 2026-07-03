import { CompTokenValue } from '../CompTokens'

export interface CheckboxTokens {
    color: CompTokenValue<string>
    size: CompTokenValue<number>
    stateLayerShape: CompTokenValue<number>
    stateLayerSize: CompTokenValue<number>
    disabledColor: CompTokenValue<string>
    disabledOpacity: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
