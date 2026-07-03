import React, { useState } from 'react'
import { PasswordField, TextField, TitleMedium } from '@material-rn/core'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { useToast } from 'react-native-toast-notifications'

export const TextFieldScreen = () => {
    const toast = useToast()
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('Initial value')
    return (
        <ScreenContainer>
            <TitleMedium>Filled Text Field (Enabled)</TitleMedium>
            <TextField label="Email" value={value1} onChangeText={value => setValue1(value)} />
            <TextField value={value1} onChangeText={value => setValue1(value)} />
            <TextField defaultValue={'Some default value'} />
            <TextField leadingIcon="circle" trailingIcon="eyeglasses" label="With both icons" />
            <TextField leadingIcon="circle" label="Only leading icon" />
            <TextField trailingIcon="eyeglasses" label="Only trailing icon" />
            <TextField
                leadingIcon="search"
                onLeadingIconPress={() => toast.show('Pressed')}
                label="With multiple options"
                value={value2}
                onChangeText={value => setValue2(value)}
                supportingText={'Some supporting text'}
            />
            <TextField
                leadingIcon="search"
                onLeadingIconPress={() => toast.show('Pressed')}
                editable={false}
                label="Readonly"
                value={value3}
                onChangeText={value => setValue3(value)}
                supportingText={'Some supporting text'}
            />
            <TextField
                leadingIcon="circle"
                trailingIcon="eyeglasses"
                label="With a very very very very very very very very long long long long label"
            />
            <PasswordField label="Password" />
            <TextField
                keyboardType="numeric"
                label="Numeric keyboard"
            />

            <TitleMedium>Filled Text Field (Disabled)</TitleMedium>
            <TextField label="Email" disabled={true} />
            <TextField
                disabled={true}
                leadingIcon="search"
                onLeadingIconPress={() => toast.show('Pressed')}
                label="With multiple options"
                value={value3}
                onChangeText={value => setValue3(value)}
                supportingText={'Some supporting text'}
            />
            <TextField
                disabled={true}
                errorText={'Some error'}
                leadingIcon="search"
                onLeadingIconPress={() => toast.show('Pressed')}
                label="Email"
                value={value3}
                onChangeText={value => setValue3(value)}
                supportingText={'Some supporting text'}
            />

            <TitleMedium>Filled Text Field (Error)</TitleMedium>
            <TextField label="Email" errorText={'Some error'} />
            <TextField
                errorText={'Some error'}
                leadingIcon="search"
                onLeadingIconPress={() => toast.show('Pressed')}
                label="Email"
                value={value3}
                onChangeText={value => setValue3(value)}
                supportingText={'Some supporting text'}
            />
        </ScreenContainer>
    )
}

