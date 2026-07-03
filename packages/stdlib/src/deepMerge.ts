function isObject(obj: any) {
    return obj && typeof obj === 'object' && !Array.isArray(obj)
}

export function deepMerge(...objects: object[]) {
    return objects.reduce((prev, obj) => {
        if (!obj) return prev
        for (const key of Object.keys(obj)) {
            const previousValue = prev[key]
            let currentValue = obj[key]
            if (isObject(previousValue) && isObject(currentValue)) {
                prev[key] = deepMerge(previousValue, currentValue)
                continue
            }
            prev[key] = currentValue
        }

        return prev
    }, {})
}
