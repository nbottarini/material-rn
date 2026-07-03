import { LocalDate } from '@js-joda/core'
import { localDateTimeFromIso8601 } from './localDateTimeFromIso8601'

export function localDateFromIso8601(iso8601Date: string): LocalDate {
    return localDateTimeFromIso8601(iso8601Date).toLocalDate()
}
