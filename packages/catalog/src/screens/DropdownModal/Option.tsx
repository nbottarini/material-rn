import React, { FC } from 'react'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { themed, themedPressable } from '@material-rn/core/src/theme/themed'
import { rv } from '@material-rn/core/src/rv'
import { BodyMedium } from '@material-rn/core/src/text/Typography'

export const Option: FC<Props> = (props) => (
    <Pressable onPress={props.onPress} style={props.style}>
        {({ pressed }) => (
            <Container>
                <StateLayer selected={props.selected} pressed={pressed}>
                    <Content selected={props.selected} pressed={pressed}>{props.title}</Content>
                </StateLayer>
            </Container>
        )}
    </Pressable>
)

const Container = themed(View, ({ resolve, ds }) => ({
    borderBottomWidth: 1,
    borderBottomColor: resolve(ds.sys.color.outlineVariant),
    paddingVertical: rv(2),
}))

const StateLayer = themedPressable(View, ({ resolve, ds, selected }) => ({
    paddingHorizontal: rv(4),
    paddingVertical: rv(12),
    borderRadius: rv(2),
    backgroundColor: selected ? resolve(ds.ref.palette.secondary._90) : 'transparent',
}), ({ ds, resolve }) => ({
    backgroundColor: resolve(ds.ref.palette.secondary._90),
}))

const Content = themedPressable(BodyMedium, ({ resolve, ds, selected }) => ({
    color: selected ? resolve(ds.sys.color.onSecondaryContainer) : resolve(ds.sys.color.onSurface),
}), ({ ds, resolve }) => ({
    color: resolve(ds.sys.color.onSecondaryContainer),
}))

interface Props {
    title: string
    selected?: boolean
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
}

