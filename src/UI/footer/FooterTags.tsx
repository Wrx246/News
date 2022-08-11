import React from 'react'
import { FooterTagsWrap, TagCategory } from '../../styles/UI/footer/FooterTags.styles'

const tags = ['Football', 'Cricket', 'Covid 19', 'Travel', 'Life Style', 'Tranding News', 'Technology'];
const color = ['#F65050', '#0088FF', '#A56CBD', '#997C00', '#FFB8B8', '#49CFE8', '#4281FF'];

export const FooterTags = () => {
  return <FooterTagsWrap>
    <h3>Tags</h3>
    <hr />
    <div>
        {tags.map((item, index) => {
            return <TagCategory key={index}>{item}</TagCategory>
        })}
    </div>
  </FooterTagsWrap>
}
