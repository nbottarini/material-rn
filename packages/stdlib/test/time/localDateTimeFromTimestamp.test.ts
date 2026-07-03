import { Clock } from '../../src/time/Clock'
import { LocalDateTime, ZoneId } from '@js-joda/core'
import { localDateTimeFromTimestamp } from '../../src'

test('returns local date time in local timezone from timestamp', () => {
    Clock.changeTimeZone(ZoneId.of('UTC-05:00'))

    expect(localDateTimeFromTimestamp(someTimestamp)).toEqual(LocalDateTime.of(2023, 5, 22, 9, 9, 11))
})

const someTimestamp = 1684764551 // 2023/5/22 11:09:11 in UTC-3
