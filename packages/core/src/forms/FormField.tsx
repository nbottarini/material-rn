import React, { ReactNode } from 'react'
import { StyleProp, View, ViewProps } from 'react-native'
import { FormLabel } from './FormLabel'
import { styled } from '@nbottarini/react-native-styled'
import { rv } from '../rv'

export const FormField: React.FC<Props> = (props) => {
    return (
        <Container style={props.style}>
            {props.label && <FormLabel text={props.label} />}
            {props.children}
        </Container>
    )
}

const Container = styled(View, {
    gap: rv(4),
})

interface Props {
    label?: string
    style?: StyleProp<ViewProps>
    children: ReactNode
}
