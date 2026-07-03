import { CompTokenValue } from '../CompTokens'
import { TypeScale } from '../SysTokens'

export interface TabsTokens {
    containerColor: CompTokenValue<string>
    containerElevation: CompTokenValue<number>
    containerShape: CompTokenValue<number>
    iconSize: CompTokenValue<number>
    labelTypeScale: CompTokenValue<TypeScale>
    labelInactiveColor: CompTokenValue<string>
    labelActiveColor: CompTokenValue<string>
    dividerThickness: CompTokenValue<number>
    dividerColor: CompTokenValue<string>
    activeIndicatorColor: CompTokenValue<string>
    activeIndicatorHeight: CompTokenValue<number>
    activeIndicatorWidth: CompTokenValue<number>
    pressedStateLayerColor: CompTokenValue<string>
    pressedStateLayerOpacity: CompTokenValue<number>
}
