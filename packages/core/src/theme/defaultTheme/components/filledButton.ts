import { FilledButtonTokens } from '../../Theme/components/FilledButtonTokens'
import { rv } from '../../../rv'

export const filledButton: FilledButtonTokens = {
    containerShape: (ds) => ds.sys.shape.full,
    containerColor: (ds) => ds.sys.color.primary,
    containerPaddingVertical: rv(8),
    containerPaddingHorizontal: rv(16),
    containerGap: rv(8),
    labelTypeScale: (ds) => ds.sys.typeScale.labelMedium,
    labelColor: (ds) => ds.sys.color.onPrimary,
    iconSize: rv(18),
    iconColor: (ds) => ds.sys.color.onPrimary,
    disabledContainerColor: (ds) => ds.sys.color.onSurface,
    disabledContainerOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
    disabledLabelColor: (ds) => ds.sys.color.onSurface,
    disabledLabelOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    disabledIconColor: (ds) => ds.sys.color.onSurface,
    disabledIconOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedLabelColor: (ds) => ds.sys.color.onPrimary,
    pressedIconColor: (ds) => ds.sys.color.onPrimary,
    pressedStateLayerColor: (ds) => ds.sys.color.onPrimary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
}
