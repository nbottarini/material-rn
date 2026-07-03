import { LiteralValue } from '../LiteralValue'
import { SysTokenValue } from '../SysTokens'
import { CompTokenValue } from '../CompTokens'

export type TokenResolveFunc = <T extends LiteralValue>(token: TokenValue<T>) => T

export type TokenValue<T extends LiteralValue> = T | SysTokenValue<T> | CompTokenValue<T>
