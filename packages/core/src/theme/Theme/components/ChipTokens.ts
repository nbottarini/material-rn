import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface ChipTokens {
    containerColor: CompTokenValue<string>
    containerElevation: CompTokenValue<number>
    containerOutlineColor: CompTokenValue<string>
    containerOutlineWidth: CompTokenValue<number>
    containerShape: CompTokenValue<number>
    containerPaddingVertical: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerGap: CompTokenValue<number>
    labelTypeScale: CompTokenValue<TypeScale>
    labelColor: CompTokenValue<string>
    iconSize: CompTokenValue<number>
    iconColor: CompTokenValue<string>
    selectedContainerColor: CompTokenValue<string>
    selectedContainerOutlineColor: CompTokenValue<string>
    selectedContainerOutlineWidth: CompTokenValue<number>
    selectedLabelColor: CompTokenValue<string>
    selectedIconColor: CompTokenValue<string>
    disabledContainerColor: CompTokenValue<string>
    disabledContainerOpacity: CompTokenValue<number>
    disabledContainerOutlineColor: CompTokenValue<string>
    disabledContainerOutlineOpacity: CompTokenValue<number>
    disabledLabelColor: CompTokenValue<string>
    disabledLabelOpacity: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
    pressedLabelColor: CompTokenValue<string>
    pressedIconColor: CompTokenValue<string>
    pressedSelectedStateLayerColor: CompTokenValue<string>
    pressedSelectedStateLayerOpacity: CompTokenValue<number>
    pressedSelectedLabelColor: CompTokenValue<string>
    pressedSelectedIconColor: CompTokenValue<string>
}
