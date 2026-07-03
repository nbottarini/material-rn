import { Instant, ZonedDateTime } from './Dates'
import { Clock } from './Clock'

export function localDateTimeFromTimestamp(timestamp: number) {
    const instant = Instant.ofEpochMilli(timestamp * 1000)
    return ZonedDateTime.ofInstant(instant, Clock.timeZone).toLocalDateTime()
}
