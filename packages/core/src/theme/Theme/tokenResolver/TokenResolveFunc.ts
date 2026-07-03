import { LiteralValue } from '../LiteralValue'
import { SysTokenValue } from '../SysTokens'
import { CompTokenValue } from '../CompTokens'

export type TokenResolveFunc = {
    <T extends LiteralValue>(token: undefined): undefined
    <T extends LiteralValue>(token: TokenValue<T>): T
    <T extends LiteralValue>(token: TokenValue<T> | undefined): T | undefined
}

export type TokenValue<T extends LiteralValue> = T | SysTokenValue<T> | CompTokenValue<T>
