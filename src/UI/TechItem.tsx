import React from 'react'
import Moment from 'moment'
import { ItemTitle, ItemWrapper } from '../styles/UI/TechItem.styles'

interface ITechItem {
    title: string
    author: string
    urlToImage: string
    publishedAt: string | undefined
    url: string
}

export const TechItem = ({ title, author, urlToImage, publishedAt, url }: ITechItem) => {
    return <ItemWrapper>
        <img src={urlToImage} alt={title} />
        <ItemTitle>
            <p>{author} - {Moment(publishedAt).format('d MMM YYYY')}</p>
            <a target='_blank' href={url}>
                <h3>{title}</h3>
            </a>
        </ItemTitle>
    </ItemWrapper>
}
