import React, { ComponentType } from 'react'
import { Theme } from './Theme/Theme'
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { styled, styledPressable } from '@nbottarini/react-native-styled'
import { useTheme } from './context/ThemeContext'
import { TokenResolveFunc } from './Theme/tokenResolver/TokenResolveFunc'

type Styles = StyleProp<ViewStyle | TextStyle | ImageStyle>
type StylesFunc<P> = (props: P & { [x:string]: any }) => Styles

export function themed<E, P>(
    Component: ComponentType<P>,
    styles: Styles|StylesFunc<E & P & { ds: Theme, resolve: TokenResolveFunc }>,
): ComponentType<E & P & { [x:string]: any }> {
    const StyledComponent = styled(Component as ComponentType<any>, styles as any) as ComponentType<any>
    return (props: E & P & { [x:string]: any }) => {
        const { ds, resolve } = useTheme()
        return <StyledComponent {...props} ds={ds} resolve={resolve} />
    }
}

export function themedPressable<E, P>(
    Component: ComponentType<P>,
    styles: Styles|StylesFunc<E & P & { ds: Theme, resolve: TokenResolveFunc }>,
    pressedStyles: Styles|StylesFunc<E & P & { ds: Theme, resolve: TokenResolveFunc }>,
): ComponentType<E & P & { pressed?: boolean, [x:string]: any }> {
    const StyledComponent = styledPressable(Component as ComponentType<any>, styles as any, pressedStyles as any) as ComponentType<any>
    return (props: E & P & { pressed?: boolean, [x:string]: any }) => {
        const { ds, resolve } = useTheme()
        return <StyledComponent {...props} ds={ds} resolve={resolve} />
    }
}
