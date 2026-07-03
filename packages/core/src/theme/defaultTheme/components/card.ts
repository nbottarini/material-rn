import { CardTokens } from '../../Theme/components/CardTokens'
import { rv } from '../../../rv'

export const card: CardTokens = {
    containerOutlineColor: (ds) => ds.sys.color.outlineVariant,
    containerOutlineWidth: 0,
    containerColor: (ds) => ds.sys.color.surfaceContainer,
    containerElevation: (ds) => ds.sys.elevation.level2,
    containerShape: (ds) => ds.sys.shape.extraSmall,
    containerPaddingVertical: rv(16),
    containerPaddingHorizontal: rv(16),
    disabledContainerElevation: (ds) => ds.sys.elevation.level0,
    disabledContainerColor: (ds) => ds.sys.color.surfaceContainer,
    disabledContainerOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
    disabledContainerOutlineColor: (ds) => ds.sys.color.onSurface,
    disabledContainerOutlineOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
    pressedStateLayerColor: (ds) => ds.sys.color.onSurface,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
}
