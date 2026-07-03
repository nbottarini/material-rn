import { BadgeTokens } from '../../Theme/components/BadgeTokens'
import { rv } from '../../../rv'

export const badge: BadgeTokens = {
    smallSize: rv(18),
    largeSize: rv(32),
    color: (ds) => ds.sys.color.error,
    shape: (ds) => ds.sys.shape.full,
    labelTextColor: (ds) => ds.sys.color.onError,
    labelTextLineHeight: (ds) => ds.sys.typeScale.labelSmall.lineHeight,
    labelTextSize: (ds) => ds.sys.typeScale.labelSmall.fontSize,
}
