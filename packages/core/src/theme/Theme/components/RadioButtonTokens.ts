import { CompTokenValue } from '../CompTokens'

export interface RadioButtonTokens {
    selectedColor: CompTokenValue<string>
    unselectedColor: CompTokenValue<string>
    size: CompTokenValue<number>
    stateLayerSize: CompTokenValue<number>
    disabledColor: CompTokenValue<string>
    disabledOpacity: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
