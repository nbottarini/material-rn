import InternalColor, {
  type ColorConstructor as InternalColorConstructor,
  type ColorInstance as InternalColorInstance,
  type ColorLike as InternalColorParam,
} from 'color'

export type ColorParam = InternalColorParam
export type Color<T extends ColorParam = ColorParam> = InternalColorInstance
export type ColorConstructor = InternalColorConstructor

export function rgba(color: string, alpha: number) {
    return InternalColor(color).alpha(alpha).rgb().string()
}

export const color = InternalColor as ColorConstructor
