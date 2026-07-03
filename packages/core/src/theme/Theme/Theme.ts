import { RefTokens } from './RefTokens'
import { SysTokens } from './SysTokens'
import { CompTokens } from './CompTokens'

export interface Theme {
    ref: RefTokens
    sys: SysTokens
    comp: CompTokens
}
