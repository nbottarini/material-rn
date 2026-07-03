import { createIconSet } from '@expo/vector-icons'
import glymaph from './material3/material-glymaph.json'
import React, { FC } from 'react'
import { TextStyle } from 'react-native'
import { IconNames } from './IconNames'
import { rv } from '../rv'

const InternalIcon = createIconSet(glymaph, 'MaterialSymbols', 'MaterialSymbols.ttf')

export const Icon: FC<IconProps> = (props) => {
    let size = props.size ?? rv(12)
    let offset = 1
    let fontSize = size * 0.9
    return (
        <InternalIcon
            name={props.name}
            color={props.color}
            allowFontScaling={false}
            size={fontSize}
            style={[
                {
                    flexGrow: 0,
                    flexShrink: 0,
                    width: size + offset,
                    height: size,
                    fontSize,
                    lineHeight: props.lineHeight ? props.lineHeight : size + offset,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    verticalAlign: 'middle',
                },
                props.style,
            ]}
        />
    )
}

export interface IconProps {
    name: IconNames
    size?: number
    style?: TextStyle
    color?: any
    lineHeight?: number | undefined
}
