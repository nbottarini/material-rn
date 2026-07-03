import React from 'react'
import { TextProps } from 'react-native'
import { TitleSmall } from '../text/Typography'
import { themed } from '../theme/themed'

export const FormLabel: React.FC<Props> = (props) => {
    return <_TitleSmall>{props.text}</_TitleSmall>
}

const _TitleSmall = themed(TitleSmall, ({ ds, resolve }) => ({
    color: resolve(ds.sys.color.onSurfaceVariant),
}))

interface Props extends TextProps {
    text: string
}
