import { rv } from '../../../rv'
import { FilledIconButtonTokens } from '../../Theme/components/FilledIconButtonTokens'

export const tonalIconButton: FilledIconButtonTokens = {
    containerColor: (ds) => ds.sys.color.primaryContainer,
    iconColor: (ds) => ds.sys.color.primary,
    iconSize: rv(24),
    disabledIconColor: (ds) => ds.sys.color.onSurface,
    disabledIconOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedIconColor: (ds) => ds.sys.color.onSurface,
    pressedStateLayerColor: (ds) => ds.sys.color.onSurface,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
    disabledStateLayerColor: (ds) => ds.sys.color.onSurface,
    disabledStateLayerOpacity: (ds) => ds.sys.state.disabledContainerOpacity,
    stateLayerShape: (ds) => ds.sys.shape.extraLarge,
    stateLayerHeight: rv(40),
    stateLayerWidth: rv(40),
}
