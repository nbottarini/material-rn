import React from 'react'
import { ScreenContainer } from '../../components/ScreenContainer'
import { BodyLarge, Chip } from '@material-rn/core'
import { FilterChip } from '@material-rn/core/src/chips/FilterChip'

export const ChipsScreen = () => (
    <ScreenContainer style={{ alignItems: 'flex-start' }}>
        <BodyLarge>Standard chip</BodyLarge>
        <Chip title="Some Chip"/>
        <Chip title="Some Chip" leadingIcon="check_circle"/>
        <Chip title="Some Chip" trailingIcon="check_circle"/>
        <Chip title="Some Chip" leadingIcon="check_circle"/>
        <Chip title="Some Chip" leadingIcon="check_circle" trailingIcon="circle"/>
        <Chip title="Selected Chip" selected={true} leadingIcon="check_circle"/>
        <Chip title="Selected Chip" selected={true}/>
        <Chip title="Disabled Chip" disabled={true}/>
        <Chip title="Disabled Selected Chip" selected={true} disabled={true}/>
        <Chip title="Very long long long long long long long long text"/>
        <Chip title="Very long long long long long long long long text" leadingIcon="check_circle"/>
        <BodyLarge>Filter chip</BodyLarge>
        <FilterChip title="Some FilterChip"/>
        <FilterChip title="Some FilterChip" leadingIcon="check_circle"/>
        <FilterChip title="Some FilterChip" trailingIcon="check_circle"/>
        <FilterChip title="Some FilterChip" leadingIcon="check_circle"/>
        <FilterChip title="Some FilterChip" leadingIcon="check_circle" trailingIcon="circle"/>
        <FilterChip title="Selected FilterChip" selected={true} leadingIcon="check_circle"/>
        <FilterChip title="Selected FilterChip" selected={true}/>
        <FilterChip title="Disabled FilterChip" disabled={true}/>
        <FilterChip title="Disabled Selected FilterChip" selected={true} disabled={true}/>
        <FilterChip title="Very long long long long long long long long text"/>
        <FilterChip title="Very long long long long long long long long text" leadingIcon="check_circle"/>
    </ScreenContainer>
)
