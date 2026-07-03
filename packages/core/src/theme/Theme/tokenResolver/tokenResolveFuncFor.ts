import { Theme } from '../Theme'
import { TokenResolveFunc } from './TokenResolveFunc'

export function tokenResolveFuncFor(theme: Theme): TokenResolveFunc {
    return (token) => {
        let result = token
        while (typeof result === 'function') {
            result = result(theme)
        }
        return result
    }
}
