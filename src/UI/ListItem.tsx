import React from 'react'
import Moment from 'moment'
import { ListItemBody, ListItemWrap } from '../styles/UI/ListItem.styles'

interface IList {
    author: string
    title: string
    urlToImage: string
    description: string
    publishedAt: string | undefined
}

export const ListItem = ({author, title, urlToImage, description, publishedAt}: IList) => {
  return <ListItemWrap>
    <img src={urlToImage} alt={description} />
    <ListItemBody>
        <span>{author} - {Moment(publishedAt).format('d MMM YYYY')}</span>
        <h3>{title}</h3>
        <p>{description}</p>
    </ListItemBody>
  </ListItemWrap>
}
