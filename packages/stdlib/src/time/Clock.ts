import { LocalDate, LocalDateTime, ZoneId } from '@js-joda/core'

export class Clock {
    private static stoppedAt?: LocalDateTime
    private static zoneId = ZoneId.SYSTEM

    static get timeZone(): ZoneId {
        return this.zoneId
    }

    static changeTimeZone(zoneId: ZoneId) {
        if (this.stoppedAt) {
            const zoned = this.stoppedAt.atZone(this.zoneId)
            this.stoppedAt = zoned.withZoneSameInstant(zoneId).toLocalDateTime()
        }
        this.zoneId = zoneId
    }

    static today(): LocalDate {
        return this.stoppedAt?.toLocalDate() ?? LocalDate.now(this.timeZone)
    }

    static now(): LocalDateTime {
        return this.stoppedAt ?? LocalDateTime.now(this.timeZone)
    }

    static stoppedAtDate(date: LocalDate) {
        this.stoppedAt = date.atTime(0, 0, 0, 0)
    }

    static stoppedAtDateTime(date: LocalDateTime) {
        this.stoppedAt = date
    }

    static live() {
        this.stoppedAt = undefined
    }
}
