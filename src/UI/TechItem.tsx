import React from 'react'
import Moment from 'moment'
import { ItemTitle, ItemWrapper } from '../styles/UI/TechItem.styles'

interface ITechItem {
    title: string
    author: string
    urlToImage: string
    publishedAt: string | undefined
}

export const TechItem = ({title, author, urlToImage, publishedAt}: ITechItem) => {
    return <ItemWrapper>
        <img src={urlToImage} alt={title} />
        <ItemTitle>
            <p>{author} - {Moment(publishedAt).format('d MMM YYYY')}</p>
            <h4>{title}</h4>
        </ItemTitle>
    </ItemWrapper>
}
