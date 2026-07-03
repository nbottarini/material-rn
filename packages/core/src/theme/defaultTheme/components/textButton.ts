import { TextButtonTokens } from '../../Theme/components/TextButtonTokens'
import { rv } from '../../../rv'

export const textButton: TextButtonTokens = {
    containerShape: (ds) => ds.sys.shape.full,
    containerPaddingVertical: rv(8),
    containerPaddingHorizontal: rv(16),
    containerGap: rv(8),
    labelTypeScale: (ds) => ds.sys.typeScale.labelMedium,
    labelColor: (ds) => ds.sys.color.primary,
    iconSize: rv(18),
    iconColor: (ds) => ds.sys.color.primary,
    disabledLabelColor: (ds) => ds.sys.color.onSurface,
    disabledLabelOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    disabledIconColor: (ds) => ds.sys.color.onSurface,
    disabledIconOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedLabelColor: (ds) => ds.sys.color.primary,
    pressedIconColor: (ds) => ds.sys.color.primary,
    pressedStateLayerColor: (ds) => ds.sys.color.primary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
}
