import { CompTokenValue } from '../CompTokens'

export interface BottomSheetTokens {
    containerColor: CompTokenValue<string>,
    containerShape: CompTokenValue<number>,
    contentContainerPaddingTop: CompTokenValue<number>,
    contentContainerPaddingBottom: CompTokenValue<number>,
    contentContainerPaddingHorizontal: CompTokenValue<number>,
    scrimColor: CompTokenValue<string>,
    scrimOpacity: CompTokenValue<number>,
}
