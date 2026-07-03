import React, { FC, PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { GestureResponderEvent, Pressable, StyleProp, View } from 'react-native'
import { themed, themedPressable } from '../theme/themed'
import { rgba } from '../color'

export const Card: FC<CardProps> = (props) => {
    return (
        <Container
            onPress={props.onPress}
            disabled={props.disabled || !props.onPress}
            disabledState={props.disabled}
            style={props.style}
        >
            {({ pressed }) => (
                <StateLayer pressed={pressed} style={props.contentStyle}>
                    {props.children}
                </StateLayer>
            )}
        </Container>
    )
}

const Container = themed(Pressable, ({ resolve, ds, disabledState }) => ({
    flexGrow: 1,
    flexShrink: 1,
    borderColor: resolve(ds.comp.card.containerOutlineColor),
    borderWidth: resolve(ds.comp.card.containerOutlineWidth),
    borderRadius: resolve(ds.comp.card.containerShape),
    elevation: resolve(ds.comp.card.containerElevation),
    backgroundColor: resolve(ds.comp.card.containerColor),
    ...(disabledState ? {
        elevation: resolve(ds.comp.card.disabledContainerElevation),
        backgroundColor: rgba(resolve(ds.comp.card.disabledContainerColor), resolve(ds.comp.card.disabledContainerOpacity)),
        borderColor: rgba(resolve(ds.comp.card.disabledContainerOutlineColor), resolve(ds.comp.card.disabledContainerOutlineOpacity)),
    } : {}),
}))

const StateLayer = themedPressable(View, ({ resolve, ds }) => ({
    flexGrow: 1,
    flexShrink: 1,
    paddingVertical: resolve(ds.comp.card.containerPaddingVertical),
    paddingHorizontal: resolve(ds.comp.card.containerPaddingVertical),
}), ({ resolve, ds }) => ({
    backgroundColor: rgba(
        resolve(ds.comp.card.pressedStateLayerColor),
        resolve(ds.comp.card.pressedStateLayerOpacity)
    ),
}))

export interface CardProps extends PropsWithChildren {
    onPress?: (event: GestureResponderEvent) => void
    style?: StyleProp<ViewStyle>
    contentStyle?: StyleProp<ViewStyle>
    disabled?: boolean
}
