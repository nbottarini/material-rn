import React from 'react'
import { GestureResponderEvent, Pressable, TextStyle, View } from 'react-native'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'
import { Typography } from '../text/Typography'

export const Chip: React.FC<ChipProps> = (props) => {
    const { ds, resolve } = useTheme()
    return (
        <Pressable onPress={props.onPress} disabled={props.disabled} style={props.style}>
            {({ pressed }) => (
                <Container pressed={pressed} disabled={props.disabled} selected={props.selected}>
                    <StateLayer pressed={pressed} selected={props.selected}>
                        {props.leadingIcon && (
                            <_Icon
                                disabled={props.disabled}
                                name={props.leadingIcon}
                                pressed={pressed}
                                size={resolve(ds.comp.chip.iconSize)}
                                selected={props.selected}
                            />
                        )}
                        <Label
                            typeScale={resolve(ds.comp.chip.labelTypeScale)}
                            pressed={pressed}
                            selected={props.selected}
                            disabled={props.disabled}
                            numberOfLines={1}
                            allowFontScaling={false}
                            ellipsizeMode="tail"
                            style={props.labelStyle}
                        >
                            {props.title}
                        </Label>
                        {props.trailingIcon && (
                            <_Icon
                                disabled={props.disabled}
                                name={props.trailingIcon}
                                pressed={pressed}
                                size={resolve(ds.comp.chip.iconSize)}
                                selected={props.selected}
                            />
                        )}
                    </StateLayer>
                </Container>
            )}
        </Pressable>
    )
}

const Container = themed(View, ({ resolve, ds, disabled, selected }) => ({
    backgroundColor: resolve(ds.comp.chip.containerColor),
    elevation: resolve(ds.comp.chip.containerElevation),
    borderColor: resolve(ds.comp.chip.containerOutlineColor),
    borderWidth: resolve(ds.comp.chip.containerOutlineWidth),
    borderRadius: resolve(ds.comp.chip.containerShape),
    ...(selected ? {
        backgroundColor: resolve(ds.comp.chip.selectedContainerColor),
        borderColor: resolve(ds.comp.chip.selectedContainerOutlineColor),
        borderWidth: resolve(ds.comp.chip.selectedContainerOutlineWidth),
    } : {}),
    ...(disabled ? {
        backgroundColor: rgba(resolve(ds.comp.chip.disabledContainerColor), resolve(ds.comp.chip.disabledContainerOpacity)),
        borderColor: rgba(resolve(ds.comp.chip.disabledContainerOutlineColor), resolve(ds.comp.chip.disabledContainerOutlineOpacity)),
    } : {}),
}))

const StateLayer = themedPressable(View, ({ resolve, ds }) => ({
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: resolve(ds.comp.chip.containerGap),
    paddingHorizontal: resolve(ds.comp.chip.containerPaddingHorizontal),
    paddingVertical: resolve(ds.comp.chip.containerPaddingVertical),
}), ({ resolve, ds, selected }) => ({
    borderRadius: resolve(ds.comp.chip.containerShape),
    backgroundColor: rgba(resolve(ds.comp.chip.pressedStateLayerColor), resolve(ds.comp.chip.pressedStateLayerOpacity)),
    ...(selected ? {
        backgroundColor: rgba(resolve(ds.comp.chip.pressedSelectedStateLayerColor), resolve(ds.comp.chip.pressedSelectedStateLayerOpacity)),
    } : {}),
}))

const Label = themedPressable(Typography, ({ resolve, ds, disabled, selected }) => ({
    flexShrink: 1,
    flexGrow: 1,
    color: resolve(ds.comp.chip.labelColor),
    ...(selected ? {
        color: resolve(ds.comp.chip.selectedLabelColor),
    } : {}),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.chip.disabledLabelColor), resolve(ds.comp.chip.disabledLabelOpacity)),
    } : {}),
}), ({ resolve, ds, selected }) => ({
    color: resolve(ds.comp.chip.pressedLabelColor),
    ...(selected ? {
        color: resolve(ds.comp.chip.pressedSelectedLabelColor),
    } : {}),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled, selected }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: resolve(ds.comp.chip.iconColor),
    ...(selected ? {
        color: resolve(ds.comp.chip.selectedIconColor),
    } : {}),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.chip.disabledIconColor), resolve(ds.comp.chip.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds, selected }) => ({
    color: resolve(ds.comp.chip.pressedIconColor),
    ...(selected ? {
        color: resolve(ds.comp.chip.pressedSelectedIconColor),
    } : {}),
}))

export interface ChipProps {
    title: string
    leadingIcon?: IconNames
    trailingIcon?: IconNames
    onPress?: (event: GestureResponderEvent) => void
    style?: ViewStyle
    labelStyle?: TextStyle
    disabled?: boolean
    selected?: boolean
}
