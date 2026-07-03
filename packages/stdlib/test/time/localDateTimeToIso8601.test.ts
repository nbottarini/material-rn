import { Clock } from '../../src/time/Clock'
import { LocalDateTime, ZoneId } from '@js-joda/core'
import { localDateTimeToIso8601 } from '../../src/time/localDateTimeToIso8601'
import each from 'jest-each'

describe('localDateTimeToIso8601', () => {
    each([
        ['UTC-03:00', '2022-12-10T13:30:10Z'],
        ['UTC-05:00', '2022-12-10T15:30:10Z'],
        ['UTC', '2022-12-10T10:30:10Z'],
    ]).test('returns utc iso8601 string from local date time in local timezone', (timeZone, expected) => {
        Clock.changeTimeZone(ZoneId.of(timeZone))

        expect(localDateTimeToIso8601(LocalDateTime.of(2022, 12, 10, 10, 30, 10))).toEqual(expected)
    })
})
