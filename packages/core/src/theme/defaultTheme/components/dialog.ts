import { DialogTokens } from '../../Theme/components/DialogTokens'
import { rv } from '../../../rv'

export const dialog: DialogTokens = {
    containerColor: (ds) => ds.sys.color.surfaceContainer,
    containerShape: (ds) => ds.sys.shape.large,
    contentContainerPaddingHorizontal: rv(24),
    contentContainerPaddingTop: rv(24),
    contentContainerPaddingBottom: rv(0),
    buttonsContainerPaddingHorizontal: rv(24),
    buttonsContainerPaddingVertical: rv(16),
    buttonsContainerGap: rv(8),
    scrimColor: (ds) => ds.sys.color.scrim,
    scrimOpacity: 0.4,
}
