import React from 'react'
import { Pressable, View } from 'react-native'
import { rgba } from '../color'
import { Icon } from '../Icon/Icon'
import { useTheme } from '../theme/context/ThemeContext'
import { themed, themedPressable } from '../theme/themed'
import { Typography } from '../text/Typography'
import { ChipProps } from './Chip'

export const FilterChip: React.FC<ChipProps> = (props) => {
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
                                size={resolve(ds.comp.filterChip.iconSize)}
                                selected={props.selected}
                            />
                        )}
                        <Label
                            typeScale={resolve(ds.comp.filterChip.labelTypeScale)}
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
                                size={resolve(ds.comp.filterChip.iconSize)}
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
    backgroundColor: resolve(ds.comp.filterChip.containerColor),
    elevation: resolve(ds.comp.filterChip.containerElevation),
    borderColor: resolve(ds.comp.filterChip.containerOutlineColor),
    borderWidth: resolve(ds.comp.filterChip.containerOutlineWidth),
    borderRadius: resolve(ds.comp.filterChip.containerShape),
    ...(selected ? {
        backgroundColor: resolve(ds.comp.filterChip.selectedContainerColor),
        borderColor: resolve(ds.comp.filterChip.selectedContainerOutlineColor),
        borderWidth: resolve(ds.comp.filterChip.selectedContainerOutlineWidth),
    } : {}),
    ...(disabled ? {
        backgroundColor: rgba(resolve(ds.comp.filterChip.disabledContainerColor), resolve(ds.comp.filterChip.disabledContainerOpacity)),
        borderColor: rgba(resolve(ds.comp.filterChip.disabledContainerOutlineColor), resolve(ds.comp.filterChip.disabledContainerOutlineOpacity)),
    } : {}),
}))

const StateLayer = themedPressable(View, ({ resolve, ds }) => ({
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: resolve(ds.comp.filterChip.containerGap),
    paddingHorizontal: resolve(ds.comp.filterChip.containerPaddingHorizontal),
    paddingVertical: resolve(ds.comp.filterChip.containerPaddingVertical),
}), ({ resolve, ds, selected }) => ({
    borderRadius: resolve(ds.comp.filterChip.containerShape),
    backgroundColor: rgba(resolve(ds.comp.filterChip.pressedStateLayerColor), resolve(ds.comp.filterChip.pressedStateLayerOpacity)),
    ...(selected ? {
        backgroundColor: rgba(resolve(ds.comp.filterChip.pressedSelectedStateLayerColor), resolve(ds.comp.filterChip.pressedSelectedStateLayerOpacity)),
    } : {}),
}))

const Label = themedPressable(Typography, ({ resolve, ds, disabled, selected }) => ({
    flexShrink: 1,
    flexGrow: 1,
    color: resolve(ds.comp.filterChip.labelColor),
    ...(selected ? {
        color: resolve(ds.comp.filterChip.selectedLabelColor),
    } : {}),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.filterChip.disabledLabelColor), resolve(ds.comp.filterChip.disabledLabelOpacity)),
    } : {}),
}), ({ resolve, ds, selected }) => ({
    color: resolve(ds.comp.filterChip.pressedLabelColor),
    ...(selected ? {
        color: resolve(ds.comp.filterChip.pressedSelectedLabelColor),
    } : {}),
}))

const _Icon = themedPressable(Icon, ({ resolve, ds, disabled, selected }) => ({
    flexShrink: 0,
    flexGrow: 0,
    color: resolve(ds.comp.filterChip.iconColor),
    ...(selected ? {
        color: resolve(ds.comp.filterChip.selectedIconColor),
    } : {}),
    ...(disabled ? {
        color: rgba(resolve(ds.comp.filterChip.disabledIconColor), resolve(ds.comp.filterChip.disabledIconOpacity)),
    } : {}),
}), ({ resolve, ds, selected }) => ({
    color: resolve(ds.comp.filterChip.pressedIconColor),
    ...(selected ? {
        color: resolve(ds.comp.filterChip.pressedSelectedIconColor),
    } : {}),
}))

