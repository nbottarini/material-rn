import React, { FC } from 'react'
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view'
import { ViewProps } from 'react-native'
import { ScrollViewProps } from 'react-native/Libraries/Components/ScrollView/ScrollView'

export const KeyboardAwareContainer: FC<KeyboardAwareContainerProps> = (props: KeyboardAwareContainerProps) => (
    <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        {...props}
    >
        {props.children}
    </KeyboardAwareScrollView>
)

export interface KeyboardAwareContainerProps extends KeyboardAwareScrollViewProps, ViewProps, ScrollViewProps {
    children?: React.ReactNode
}
