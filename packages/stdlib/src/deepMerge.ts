function isObject(obj: unknown): obj is Record<string, any> {
    return !!obj && typeof obj === 'object' && !Array.isArray(obj)
}

export function deepMerge(...objects: Array<Record<string, any> | null | undefined>): Record<string, any> {
    return objects.reduce<Record<string, any>>((prev, obj) => {
        if (!obj) return prev
        for (const key of Object.keys(obj)) {
            const previousValue = prev[key]
            const currentValue = obj[key]
            if (isObject(previousValue) && isObject(currentValue)) {
                prev[key] = deepMerge(previousValue, currentValue)
                continue
            }
            prev[key] = currentValue
        }

        return prev
    }, {})
}
