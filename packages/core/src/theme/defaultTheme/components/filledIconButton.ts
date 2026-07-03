import { rv } from '../../../rv'
import { FilledIconButtonTokens } from '../../Theme/components/FilledIconButtonTokens'

export const filledIconButton: FilledIconButtonTokens = {
    containerColor: (ds) => ds.sys.color.primary,
    iconColor: (ds) => ds.sys.color.onPrimary,
    iconSize: rv(24),
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
