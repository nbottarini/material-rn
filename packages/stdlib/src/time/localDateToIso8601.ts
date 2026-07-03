import { LocalDate, ZoneId } from '@js-joda/core'
import { Clock } from './Clock'

export function localDateToIso8601(date: LocalDate): string {
    return date.atStartOfDay().atZone(Clock.timeZone).withZoneSameInstant(ZoneId.UTC).toString()
}
