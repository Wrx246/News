import React from 'react'
import { CountryItem } from '../styles/UI/NewsCountry.styles'

interface ICountry {
    item: string
}

export const NewsCountry = ({item}: ICountry) => {
    return <CountryItem>{item}</CountryItem>
}
