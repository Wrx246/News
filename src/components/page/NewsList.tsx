import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../API/urlConfig';
import { CountryWrap, LoadNewsButton, NewsListWrap } from '../../styles/NewsList.styles'
import { INews } from '../../types/types';
import { ListItem } from '../../UI/ListItem'
import { NewsCountry } from '../../UI/NewsCountry';
import { Preloader } from '../../UI/Preloader';

export const NewsList = () => {
  const [health, setHealth] = useState<INews[]>([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [isFetching, setIsFetching] = useState(true);
  const { path } = useParams();

  const country = ['us', 'ru', 'ua', 'lv', 'kr', 'ng', 'br', 'sg'];

  const fetchNews = async () => {
    await API.get(`everything?q=${path}&pageSize=10&page=${currentPage}&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
      .then(res => {
        setHealth([...health, ...res.data.articles])
        setCurrentPage(prevState => prevState + 1)
      })
  }

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);

  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   }
  // }, [])

  // useEffect(() => {
  //   if(isFetching) {
  //     fetchHealth(path);
  //   }
  // }, [path, isFetching]);
  const fetchHealth = async (path: string | undefined) => {
    await API.get(`everything?q=${path}&pageSize=10&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
      .then(res => {
        setHealth(res.data.articles)
      })
  }

  useEffect(() => {
    fetchHealth(path);
  }, [path]);

  // const scrollHandler = (e: any) => {
  //   const containerHeight = e.target.documentElement.scrollHeight;
  //   const windowHeight = window.innerHeight;
  //   const scrollTop = e.target.documentElement.scrollTop;

  //   if (containerHeight - (windowHeight + scrollTop) < 100) {
  //     setIsFetching(true)
  //   }
  // }

  if (health.length) {
    return <NewsListWrap>
      {/* <CountryWrap>
      {country.map((item, index) => {
        return <NewsCountry key={index} item={item} />
      })}
    </CountryWrap> */}
      {health.map((item, index) => {
        const { author, title, urlToImage, description, publishedAt, url } = item;
        return <ListItem
          key={index}
          author={author}
          title={title}
          url={url}
          urlToImage={urlToImage}
          description={description}
          publishedAt={publishedAt}
        />
      })}
      <LoadNewsButton onClick={fetchNews}>Load more news</LoadNewsButton>
    </NewsListWrap>
  }
  return <Preloader />
}
