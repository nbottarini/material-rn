import { BottomSheetTokens } from '../../Theme/components/BottomSheetTokens'
import { rv } from '../../../rv'

export const bottomSheet: BottomSheetTokens = {
    containerColor: (ds) => ds.sys.color.surfaceContainer,
    containerShape: (ds) => ds.sys.shape.large,
    contentContainerPaddingTop: rv(4),
    contentContainerPaddingBottom: rv(10),
    contentContainerPaddingHorizontal: rv(16),
    scrimColor: (ds) => ds.sys.color.scrim,
    scrimOpacity: 0.4,
}
