import { TabsTokens } from '../../Theme/components/TabsTokens'
import { rv } from '../../../rv'

export const tabs: TabsTokens = {
    activeIndicatorColor: (ds) => ds.sys.color.primary,
    activeIndicatorHeight: rv(3),
    activeIndicatorWidth: rv(104),
    containerColor: (ds) => ds.sys.color.surface,
    containerElevation: (ds) => ds.sys.elevation.level0,
    containerShape: (ds) => ds.sys.shape.none,
    dividerColor: (ds) => ds.sys.color.outlineVariant,
    dividerThickness: rv(1),
    iconSize: rv(24),
    labelActiveColor: (ds) => ds.sys.color.primary,
    labelInactiveColor: (ds) => ds.sys.color.onSurfaceVariant,
    labelTypeScale: (ds) => ds.sys.typeScale.bodySmall,
    pressedStateLayerColor: (ds) => ds.sys.color.primary,
    pressedStateLayerOpacity: (ds) => ds.sys.state.pressedStateLayerOpacity,
}
