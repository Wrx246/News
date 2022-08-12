import React from 'react'
import Moment from 'moment'
import { HealthWrap, HealthWrapBody } from '../styles/UI/HealthItem.styles'

interface IHealthItem {
    title: string
    author: string
    urlToImage: string
    publishedAt: string | undefined
    url: string
}

export const HealthItem = ({title, author, urlToImage, publishedAt, url}: IHealthItem) => {
    return <HealthWrap>
        <img src={urlToImage} alt={title} />
        <HealthWrapBody>
            <span>{author} - {Moment(publishedAt).format('d MMM YYYY')}</span>
            <a target='_blank' href={url}>
            <h2>{title}</h2>
            </a>
        </HealthWrapBody>
    </HealthWrap>
}
