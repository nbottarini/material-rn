import { CompTokenValue } from '../CompTokens'

export interface DialogTokens {
    containerShape: CompTokenValue<number>
    containerColor: CompTokenValue<string>
    contentContainerPaddingHorizontal: CompTokenValue<number>
    contentContainerPaddingTop: CompTokenValue<number>
    contentContainerPaddingBottom: CompTokenValue<number>
    buttonsContainerPaddingHorizontal: CompTokenValue<number>
    buttonsContainerPaddingVertical: CompTokenValue<number>
    buttonsContainerGap: CompTokenValue<number>
    scrimColor: CompTokenValue<string>
    scrimOpacity: CompTokenValue<number>
}
