import { CheckboxTokens } from '../../Theme/components/CheckboxTokens'
import { rv } from '../../../rv'

export const checkbox: CheckboxTokens = {
    color: (ds) => ds.sys.color.primary,
    size: rv(18),
    disabledColor: (ds) => ds.sys.color.onSurface,
    disabledOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedStateLayerColor: (ds) => ds.sys.color.primary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
    stateLayerShape: (ds) => ds.sys.shape.full,
    stateLayerSize: rv(40),
}
