import React from 'react'
import { ItemTitle, ItemWrapper } from '../styles/UI/TechItem.styles'

interface ITechItem {
    title: string
    author: string
    urlToImage: string
}

export const TechItem = ({title, author, urlToImage}: ITechItem) => {
    return <ItemWrapper>
        <img src={urlToImage} alt={title} />
        <ItemTitle>
            <p>{author} - 27 Dec 2020</p>
            <h4>{title}</h4>
        </ItemTitle>
    </ItemWrapper>
}
