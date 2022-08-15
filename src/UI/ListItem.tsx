import React from 'react'
import Moment from 'moment'
import { ListItemBody, ListItemWrap } from '../styles/UI/ListItem.styles'
import { IList } from '../types/types'



export const ListItem = ({author, title, urlToImage, description, url, publishedAt}: IList) => {
  return <ListItemWrap>
    <img src={urlToImage} alt={description} />
    <ListItemBody>
        <span>{author} - {Moment(publishedAt).format('d MMM YYYY')}</span>
        <a target='_blank' href={url} style={{textDecoration: 'none'}}><h3>{title}</h3></a>
        <p>{description}</p>
    </ListItemBody>
  </ListItemWrap>
}
