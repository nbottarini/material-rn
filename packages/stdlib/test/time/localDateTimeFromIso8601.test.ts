import { Clock } from '../../src/time/Clock'
import { LocalDateTime, ZoneId } from '@js-joda/core'
import { localDateTimeFromIso8601 } from '../../src/time/localDateTimeFromIso8601'

test('returns local date time in local timezone from iso8601 string', () => {
    Clock.changeTimeZone(ZoneId.of('UTC-03:00'))
    Clock.stoppedAtDateTime(someDateTime)

    expect(localDateTimeFromIso8601('2022-12-10T20:30:10Z')).toEqual(LocalDateTime.of(2022, 12, 10, 17, 30, 10))
    expect(localDateTimeFromIso8601('2022-12-10T20:30:10-07:00')).toEqual(LocalDateTime.of(2022, 12, 11, 0, 30, 10))
})

const someDateTime = LocalDateTime.of(2022, 10, 9, 22, 14, 55)
