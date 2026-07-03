import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface ListItemTokens {
    containerColor: CompTokenValue<string>
    containerGap: CompTokenValue<number>
    containerHeight: CompTokenValue<number>
    containerOutlineColor: CompTokenValue<string>
    containerOutlineWidth: CompTokenValue<number>
    containerPaddingHorizontal: CompTokenValue<number>
    containerShape: CompTokenValue<number>
    headlineColor: CompTokenValue<string>
    headlineTypeScale: CompTokenValue<TypeScale>
    iconColor: CompTokenValue<string>
    iconSize: CompTokenValue<number>
    supportingTextColor: CompTokenValue<string>
    supportingTextTypeScale: CompTokenValue<TypeScale>
    trailingSupportingTextColor: CompTokenValue<string>
    trailingSupportingTextTypeScale: CompTokenValue<TypeScale>
    disabledContainerColor: CompTokenValue<string>
    disabledContainerOpacity: CompTokenValue<number>
    disabledContainerOutlineColor: CompTokenValue<string>
    disabledContainerOutlineOpacity: CompTokenValue<number>
    disabledHeadlineColor: CompTokenValue<string>
    disabledHeadlineOpacity: CompTokenValue<number>
    disabledIconColor: CompTokenValue<string>
    disabledIconOpacity: CompTokenValue<number>
    disabledSupportingTextColor: CompTokenValue<string>
    disabledSupportingTextOpacity: CompTokenValue<number>
    disabledTrailingSupportingTextColor: CompTokenValue<string>
    disabledTrailingSupportingTextOpacity: CompTokenValue<number>
    pressedHeadlineColor: CompTokenValue<string>
    pressedIconColor: CompTokenValue<string>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
    pressedSupportingTextColor: CompTokenValue<string>
    pressedTrailingSupportingTextColor: CompTokenValue<string>
    selectedStateLayerColor: CompTokenValue<string>
    selectedStateLayerOpacity: CompTokenValue<number>
}
