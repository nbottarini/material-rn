import { SearchFieldTokens } from '../../Theme/components/SearchFieldTokens'
import { rv } from '../../../rv'

export const searchField: SearchFieldTokens = {
    containerShape: (ds) => ds.sys.shape.full,
    containerHeight: rv(42),
    containerPaddingHorizontal: rv(12),
    containerGap:rv(4),
    containerColor: (ds) => ds.sys.color.surfaceContainer,
    outlineWidth: 1,
    outlineColor: (ds) => ds.sys.color.outlineVariant,
    searchIconSize: rv(24),
    searchIconColor: (ds) => ds.sys.color.onSurfaceVariant,
    placeholderColor: (ds) => ds.sys.color.outlineVariant,
    caretColor: (ds) => ds.sys.color.primary,
    inputTextTypeScale: (ds) => ds.sys.typeScale.bodyMedium,
    inputTextColor: (ds) => ds.sys.color.onSurface,
    clearIconSize: rv(24),
    clearIconColor: (ds) => ds.sys.color.onSurface,
}
