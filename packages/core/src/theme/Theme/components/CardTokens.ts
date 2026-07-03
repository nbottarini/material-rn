import { CompTokenValue } from '../CompTokens'

export interface CardTokens {
    containerOutlineColor: CompTokenValue<string>
    containerOutlineWidth: CompTokenValue<number>
    containerColor: CompTokenValue<string>
    containerElevation: CompTokenValue<number>
    containerShape: CompTokenValue<number>
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    disabledContainerElevation: CompTokenValue<number>
    disabledContainerColor: CompTokenValue<string>
    disabledContainerOpacity: CompTokenValue<number>
    disabledContainerOutlineColor: CompTokenValue<string>
    disabledContainerOutlineOpacity: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
