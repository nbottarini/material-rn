import { FullScreenDialogTokens } from '../../Theme/components/FullScreenDialogTokens'
import { rv } from '../../../rv'

export const fullScreenDialog: FullScreenDialogTokens = {
    containerColor: (ds) => ds.sys.color.surfaceContainer,
    contentContainerPaddingHorizontal: rv(16),
    contentContainerPaddingTop: rv(24),
    contentContainerPaddingBottom: rv(24),
    buttonsContainerPaddingHorizontal: rv(16),
    buttonsContainerPaddingTop: rv(16),
    buttonsContainerPaddingBottom: rv(48),
    buttonsContainerGap: rv(8),
}
