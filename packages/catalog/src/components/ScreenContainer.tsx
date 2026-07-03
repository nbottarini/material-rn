import { rv, styled } from '@material-rn/core'
import { ScrollView, View, ViewStyle } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'

export const ScreenContainer: FC<Props> = (props) => (
    <ScrollView>
        <Container style={props.style}>
            {props.children}
        </Container>
    </ScrollView>
)

const Container = styled(View, {
    padding: rv(16),
    gap: rv(16),
})

interface Props extends PropsWithChildren {
    style?: ViewStyle
}
