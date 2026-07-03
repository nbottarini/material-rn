import { StandardIconButtonTokens } from '../../Theme/components/StandardIconButtonTokens'
import { rv } from '../../../rv'

export const standardIconButton: StandardIconButtonTokens = {
    iconColor: (ds) => ds.sys.color.onSurface,
    iconSize: rv(24),
    disabledIconColor: (ds) => ds.sys.color.onSurface,
    disabledIconOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedIconColor: (ds) => ds.sys.color.onSurface,
    pressedStateLayerColor: (ds) => ds.sys.color.onSurface,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
    stateLayerShape: (ds) => ds.sys.shape.full,
    stateLayerHeight: rv(40),
    stateLayerWidth: rv(40),
}
