import { rv } from '../../../rv'
import { OutlinedIconButtonTokens } from '../../Theme/components/OutlinedIconButtonTokens'

export const outlinedIconButton: OutlinedIconButtonTokens = {
    containerColor: '#FFFFFFF',
    iconColor: (ds) => ds.sys.color.primary,
    iconSize: rv(24),
    outlineColor: (ds) => ds.sys.color.outlineVariant,
    outlineWidth: 1,
    disabledIconColor: (ds) => ds.sys.color.onSurface,
    disabledIconOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedIconColor: (ds) => ds.sys.color.onSurface,
    pressedStateLayerColor: (ds) => ds.sys.color.onPrimary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
    disabledStateLayerColor: (ds) => ds.sys.color.onSurface,
    disabledStateLayerOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
    stateLayerShape: (ds) => ds.sys.shape.small,
    stateLayerHeight: rv(40),
    stateLayerWidth: rv(40),
}
