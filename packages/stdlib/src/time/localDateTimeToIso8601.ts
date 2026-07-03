import { LocalDateTime, ZoneId } from '@js-joda/core'
import { Clock } from './Clock'

export function localDateTimeToIso8601(date: LocalDateTime): string {
    return date.atZone(Clock.timeZone).withZoneSameInstant(ZoneId.UTC).toString()
}
