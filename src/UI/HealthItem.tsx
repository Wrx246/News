import React from 'react'
import Moment from 'moment'
import { HealthWrap, HealthWrapBody } from '../styles/UI/HealthItem.styles'

interface IHealthItem {
    title: string
    author: string
    urlToImage: string
    publishedAt: string | undefined
}

export const HealthItem = ({title, author, urlToImage, publishedAt}: IHealthItem) => {
    return <HealthWrap>
        <img src={urlToImage} alt={title} />
        <HealthWrapBody>
            <span>{author} - {Moment(publishedAt).format('d MMM YYYY')}</span>
            <h2>{title}</h2>
        </HealthWrapBody>
    </HealthWrap>
}
