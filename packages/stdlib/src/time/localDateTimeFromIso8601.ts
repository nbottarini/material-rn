import { LocalDateTime, ZonedDateTime } from '@js-joda/core'
import { Clock } from './Clock'

export function localDateTimeFromIso8601(iso8601Date: string): LocalDateTime {
    return ZonedDateTime.parse(iso8601Date).withZoneSameInstant(Clock.timeZone).toLocalDateTime()
}
