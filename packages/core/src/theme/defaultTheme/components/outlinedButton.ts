import { rv } from '../../../rv'
import { OutlinedButtonTokens } from '../../Theme/components/OutlinedButtonTokens'

export const outlinedButton: OutlinedButtonTokens = {
    containerShape: (ds) => ds.sys.shape.full,
    containerPaddingVertical: rv(8),
    containerPaddingHorizontal: rv(16),
    containerGap: rv(8),
    outlineColor: (ds) => ds.sys.color.outline,
    outlineWidth: 1,
    labelTypeScale: (ds) => ds.sys.typeScale.labelMedium,
    labelColor: (ds) => ds.sys.color.primary,
    iconSize: rv(18),
    iconColor: (ds) => ds.sys.color.primary,
    disabledOutlineColor: (ds) => ds.sys.color.onSurface,
    disabledOutlineOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
    disabledLabelColor: (ds) => ds.sys.color.onSurface,
    disabledLabelOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    disabledIconColor: (ds) => ds.sys.color.onSurface,
    disabledIconOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedOutlineColor: (ds) => ds.sys.color.outline,
    pressedLabelColor: (ds) => ds.sys.color.primary,
    pressedIconColor: (ds) => ds.sys.color.primary,
    pressedStateLayerColor: (ds) => ds.sys.color.primary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
}
