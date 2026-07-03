import React, { FC } from 'react'
import { View } from 'react-native'
import { styled } from '@nbottarini/react-native-styled'
import { Icon } from '../../Icon/Icon'
import { IconNames } from '../../Icon/IconNames'
import { useTheme } from '../../theme/context/ThemeContext'
import { Typography } from '../../text/Typography'

export const Label: FC<TabLabelProps> = (props) => {
    const { ds, resolve } = useTheme()

    return <Container>
        {props.icon && <Icon name={props.icon} color={props.color} size={resolve(ds.comp.tabs.iconSize)}/>}
        {props.title && (
            <Typography
                typeScale={resolve(ds.comp.tabs.labelTypeScale)}
                style={{ color: props.color }}
            >
                {props.title}
            </Typography>
        )}
    </Container>
}

const Container = styled(View, {
    flexDirection: 'column',
    alignItems: 'center',
})

interface TabLabelProps {
    title?: string
    icon?: IconNames
    color: string
}
