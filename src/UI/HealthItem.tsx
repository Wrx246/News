import React from 'react'
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
            <span>{author} - {publishedAt}</span>
            <h2>{title}</h2>
        </HealthWrapBody>
    </HealthWrap>
}
