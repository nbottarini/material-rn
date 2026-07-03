import { CompTokenValue } from '../CompTokens'

export interface BadgeTokens {
    smallSize: CompTokenValue<number>
    largeSize: CompTokenValue<number>
    color: CompTokenValue<string>
    shape: CompTokenValue<number>
    labelTextColor: CompTokenValue<string>
    labelTextLineHeight: CompTokenValue<number>
    labelTextSize: CompTokenValue<number>
}
