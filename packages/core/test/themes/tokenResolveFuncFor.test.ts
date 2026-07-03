import { tokenResolveFuncFor } from '../../src/theme/Theme/tokenResolver/tokenResolveFuncFor'
import { deepMerge, DeepPartial } from '@material-rn/stdlib'
import { Theme } from '../../src/theme/Theme/Theme'

it('resolves literal string', () => {
    const ds = themeWith({ ref: { palette: { primary: { _40: 'red' } } } })

    const resolve = tokenResolveFuncFor(ds)

    expect(resolve(ds.ref.palette.primary._40)).toEqual('red')
})

it('resolves literal number', () => {
    const ds = themeWith({ sys: { shape: { small: 5 } } })

    const resolve = tokenResolveFuncFor(ds)

    expect(resolve(ds.sys.shape.small)).toEqual(5)
})

it('resolves function', () => {
    const theme = themeWith({
        ref: { palette: { primary: { _40: 'red' } } },
        sys: { color: { primary: (ds) => ds.ref.palette.primary._40 } },
    })

    const resolve = tokenResolveFuncFor(theme)

    expect(resolve(theme.sys.color.primary)).toEqual('red')
})

it('resolves nested functions', () => {
    const ds = themeWith({
        ref: { palette: { primary: { _40: 'red' } } },
        sys: { color: { primary: (ds) => ds.ref.palette.primary._40 } },
        comp: { filledButton: { containerColor: (ds) => ds.sys.color.primary } },
    })

    const resolve = tokenResolveFuncFor(ds)

    expect(resolve(ds.comp.filledButton.containerColor)).toEqual('red')
})

function themeWith(partial: DeepPartial<Theme>): Theme {
    return deepMerge({}, partial) as Theme
}
