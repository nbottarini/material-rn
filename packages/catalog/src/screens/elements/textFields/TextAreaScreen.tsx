import React, { useState } from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { OutlinedTextArea } from '@material-rn/core/src/forms/textInputs/OutlinedTextArea'

export const TextAreaScreen = () => {
    const [value1, setValue1] = useState('')
    return (
        <ScreenContainer>
            <OutlinedTextArea
                placeholder="Detalle de consulta"
                value={value1}
                onChangeText={value => setValue1(value)}
            />
            <OutlinedTextArea
                disabled={true}
                placeholder="Detalle de consulta"
                value=""
            />
        </ScreenContainer>
    )
}

