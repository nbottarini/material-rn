import React, { useState } from 'react'
import { ScreenContainer } from '../../../components/ScreenContainer'
import { SearchField } from '@material-rn/core'

export const SearchFieldScreen = () => {
    const [value, setValue] = useState('')
    return (
        <ScreenContainer>
            <SearchField
                value={value}
                onChangeText={(text) => setValue(text)}
                onClear={() => setValue('')}/>
        </ScreenContainer>
    )
}
