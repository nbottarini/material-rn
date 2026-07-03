import { CompTokenValue } from '../CompTokens'

export interface SwitchTokens {
    checkedThumbColor: CompTokenValue<string>
    uncheckedThumbColor: CompTokenValue<string>
    checkedTrackColor: CompTokenValue<string>
    uncheckedTrackColor: CompTokenValue<string>
    disabledCheckedThumbColor: CompTokenValue<string>
    disabledUncheckedThumbColor: CompTokenValue<string>
    disabledCheckedTrackColor: CompTokenValue<string>
    disabledUncheckedTrackColor: CompTokenValue<string>
    disabledTrackOpacity: CompTokenValue<number>
}
