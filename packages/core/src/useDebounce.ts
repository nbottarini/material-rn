import { useEffect, useMemo, useRef } from 'react'
import debounce from 'debounce'

export const useDebounce = (callback: () => void, wait: number = 400) => {
    const ref = useRef(callback)

    useEffect(() => {
        ref.current = callback
    }, [callback])

    return useMemo(() => {
        const func = () => {
            // @ts-ignore
            ref.current?.()
        }

        return debounce(func, wait)
    }, [wait])
}
