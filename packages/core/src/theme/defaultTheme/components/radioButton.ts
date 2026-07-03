import { RadioButtonTokens } from '../../Theme/components/RadioButtonTokens'
import { rv } from '../../../rv'

export const radioButton: RadioButtonTokens = {
    selectedColor: (ds) => ds.sys.color.primary,
    unselectedColor: (ds) => ds.sys.color.onSurfaceVariant,
    size: rv(20),
    stateLayerSize: rv(40),
    disabledColor: (ds) => ds.sys.color.onSurface,
    disabledOpacity: (ds) => ds.sys.state.disabledOnContainerOpacity,
    pressedStateLayerColor: (ds) => ds.sys.color.primary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
}
