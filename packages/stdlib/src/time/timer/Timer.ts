export interface Timer {
    delayedCall(callback: (args: void) => void, delayedInMs: number): number
    clearDelayedCall(id: number): void
    repeatedCall(callback: (args: void) => void, intervalInMs: number): number
    clearRepeatedCall(id: number): void
}
