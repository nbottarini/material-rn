import { Timer } from './Timer'

export class NativeTimer implements Timer {
    delayedCallTimeoutIds: number[] = []
    repeatedCallTimeoutIds: number[] = []

    delayedCall(callback: (args: void) => void, delayedInMs: number): number {
        const timeoutId: any = setTimeout(callback, delayedInMs)
        this.delayedCallTimeoutIds.push(timeoutId)
        return timeoutId
    }

    clearDelayedCall(id: number): void {
        clearTimeout(id)
        this.delayedCallTimeoutIds = this.delayedCallTimeoutIds.filter(timeoutId => timeoutId !== id)
    }

    repeatedCall(callback: (args: void) => void, intervalInMs: number): number {
        const timeoutId: any = setInterval(callback, intervalInMs)
        this.repeatedCallTimeoutIds.push(timeoutId)
        return timeoutId
    }

    clearRepeatedCall(id: number): void {
        clearInterval(id)
        this.repeatedCallTimeoutIds = this.repeatedCallTimeoutIds.filter(timeoutId => timeoutId !== id)
    }
}
