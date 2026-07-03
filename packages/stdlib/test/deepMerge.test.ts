import { deepMerge } from '../src/deepMerge'

it('merge with empty object does nothing', () => {
    const someObj = { a: 1, b: 2 }

    const result = deepMerge(someObj, {})

    expect(result).toEqual(someObj)
})

it('merges simple objects', () => {
    const someObj = { a: 1, b: 2 }
    const anotherObj = { c: 3 }

    const result = deepMerge(someObj, anotherObj)

    expect(result).toEqual({ a: 1, b: 2, c: 3 })
})

it('overrides property if exists', () => {
    const someObj = { a: 1, b: 2 }
    const anotherObj = { b: 4, c: 3 }

    const result = deepMerge(someObj, anotherObj)

    expect(result).toEqual({ a: 1, b: 4, c: 3 })
})

it('overrides property with different type if exists', () => {
    const someObj = { a: 1, b: 2 }
    const anotherObj = { b: 'hello', c: 3 }

    const result = deepMerge(someObj, anotherObj)

    expect(result).toEqual({ a: 1, b: 'hello', c: 3 })
})

it('does not mutate merged objects', () => {
    const someObj = { a: 1, b: 2 }
    const anotherObj = { b: 4, c: 3 }

    deepMerge(someObj, anotherObj)

    expect(someObj).toEqual({ a: 1, b: 2 })
    expect(anotherObj).toEqual({ b: 4, c: 3 })
})

it('merge nested objects', () => {
    const someObj = { a: 1, b: { c: 3, e: 2 } }
    const anotherObj = { b: { c: 4, d: 5 } }

    const result = deepMerge(someObj, anotherObj)

    expect(result).toEqual({ a: 1, b: { c: 4, d: 5, e: 2 } })
})

it('merge deeply nested objects', () => {
    const someObj = {
        a: 1,
        b: {
            c: {
                f: 'f',
                g: 'g',
            },
            e: 2,
        },
    }
    const anotherObj = {
        a: { hello: 'world' },
        b: {
            c: {
                f: 'g',
                i: 42,
            },
            d: 5,
            h: {
                bye: 'world',
            },
        },
    }

    const result = deepMerge(someObj, anotherObj)

    expect(result).toEqual({
        a: { hello: 'world' },
        b: {
            c: {
                f: 'g',
                g: 'g',
                i: 42,
            },
            d: 5,
            e: 2,
            h: {
                bye: 'world',
            },
        },
    })
})

it('arrays are replaced', () => {
    const someObj = { a: [1, 2] }
    const anotherObj = { a: [3, 4] }

    const result = deepMerge(someObj, anotherObj)

    expect(result).toEqual({ a: [3, 4] })
})

it('does not merge with undefined', () => {
    const someObj = { a: 1, b: 2 }

    const result = deepMerge(someObj, undefined)

    expect(result).toEqual(someObj)
})

it('does not merge with null', () => {
    const someObj = { a: 1, b: 2 }

    const result = deepMerge(someObj, null)

    expect(result).toEqual(someObj)
})
