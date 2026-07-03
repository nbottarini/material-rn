import { LocalDate, LocalDateTime, ZoneId } from '@js-joda/core'
import { Clock } from '../../src/time/Clock'

test('stoppedAt stops Clock at given date time', () => {
    Clock.stoppedAtDateTime(LocalDateTime.of(2023, 10, 5, 14, 15, 13))

    expect(Clock.now()).toEqual(LocalDateTime.of(2023, 10, 5, 14, 15, 13))
    expect(Clock.today()).toEqual(LocalDate.of(2023, 10, 5))
})

test('timeZone initially returns system timeZone', () => {
    expect(Clock.timeZone).toEqual(ZoneId.SYSTEM)
})

test('changeTimeZone changes timeZone', () => {
    Clock.changeTimeZone(ZoneId.of('UTC-05:00'))

    expect(Clock.timeZone).toEqual(ZoneId.of('UTC-05:00'))
})

test('changeTimeZone changes stopped time', () => {
    Clock.changeTimeZone(ZoneId.of('UTC-03:00'))
    Clock.stoppedAtDateTime(LocalDateTime.of(2023, 10, 5, 1, 15, 13))

    Clock.changeTimeZone(ZoneId.of('UTC-05:00'))

    expect(Clock.now()).toEqual(LocalDateTime.of(2023, 10, 4, 23, 15, 13))
    expect(Clock.today()).toEqual(LocalDate.of(2023, 10, 4))
})

afterEach(() => {
    Clock.changeTimeZone(ZoneId.SYSTEM)
    Clock.live()
})

