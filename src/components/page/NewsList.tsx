import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../API/urlConfig';
import { NewsListWrap } from '../../styles/NewsList.styles'
import { INews } from '../../types/types';
import { ListItem } from '../../UI/ListItem'

export const NewsList = () => {
    const [health, setHealth] = useState<INews[]>([]);
    const { path } = useParams();

    const heal = health.slice(0, 10);

    const fetchHealth = async (path: string | undefined) => {
        await API.get(`?q=${path}&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
            .then(res => {
                setHealth(res.data.articles)
            })
    }

    useEffect(() => {
        fetchHealth(path);
    }, [path]);

  return <NewsListWrap>
    {heal.map((item, index) => {
        const {author, title, urlToImage, description, publishedAt} = item;
        return <ListItem 
        key={index} 
        author={author} 
        title={title} 
        urlToImage={urlToImage} 
        description={description}
        publishedAt={publishedAt}
         />
    })}
    
  </NewsListWrap>
}
