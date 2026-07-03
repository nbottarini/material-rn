import { TopAppBarTokens } from '../../Theme/components/TopAppBarTokens'
import { rv } from '../../../rv'

export const topAppBar: TopAppBarTokens = {
    containerColor: (ds) => ds.sys.color.screenBackground,
    containerElevation: 0,
    containerGap: rv(24),
    containerHeight: rv(64),
    containerPaddingHorizontal: rv(16),
    headlineColor: (ds) => ds.sys.color.onSurface,
    headlineTypeScale: (ds) => ds.sys.typeScale.headlineSmall,
    leadingIconButtonColor: (ds) => ds.sys.color.primary,
}
