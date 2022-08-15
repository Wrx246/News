import React, { useEffect, useState } from 'react'
import Moment from 'moment'
import { API } from '../../API/urlConfig';
import { LifeBody, LifeItem, LifeItemTitle, LifeSectionFirst, LifeWrapper } from '../../styles/Life.styles'
import { INews } from '../../types/types';

export const Life = () => {
    const [life, setLife] = useState<INews[]>([]);

    const mapLife = life.slice(0, 3);

    const fetchNews = async () => {
        await API.get(`everything?q=life&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
            .then(res => {
                setLife(res.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    }, []);

    if (life.length) {
        return <LifeWrapper>
            <h2>Life</h2>
            <hr />
            <LifeBody>
                <div>
                    <LifeSectionFirst>
                        <img src={life[0].urlToImage} alt={life[0].description} />
                        <span>{life[0].author} - {Moment(life[0].publishedAt).format('d MMM YYYY')}</span>
                        <a target='_blank' href={life[0].url}>
                            <h2>{life[0].title}</h2>
                        </a>
                        <p>{life[0].description}</p>
                    </LifeSectionFirst>
                    <LifeItem>
                        <img src={life[2].urlToImage} alt={life[2].description} />
                        <LifeItemTitle>
                            <span>{life[2].author} - {Moment(life[2].publishedAt).format('d MMM YYYY')}</span>
                            <a target='_blank' href={life[2].url}>
                                <h3>{life[2].title}</h3>
                            </a>
                        </LifeItemTitle>
                    </LifeItem>
                    <LifeItem>
                        <img src={life[3].urlToImage} alt={life[3].description} />
                        <LifeItemTitle>
                            <span>{life[3].author} - {Moment(life[3].publishedAt).format('d MMM YYYY')}</span>
                            <a target='_blank' href={life[3].url}>
                                <h3>{life[3].title}</h3>
                            </a>
                        </LifeItemTitle>
                    </LifeItem>
                </div>
                <div>
                    <LifeSectionFirst>
                        <img src={life[1].urlToImage} alt={life[1].description} />
                        <span>{life[1].author} - {Moment(life[1].publishedAt).format('d MMM YYYY')}</span>
                        <a target='_blank' href={life[1].url}>
                            <h2>{life[1].title}</h2>
                        </a>
                        <p>{life[1].description}</p>
                    </LifeSectionFirst>
                    <LifeItem>
                        <img src={life[4].urlToImage} alt={life[4].description} />
                        <LifeItemTitle>
                            <span>{life[4].author} - {Moment(life[4].publishedAt).format('d MMM YYYY')}</span>
                            <a target='_blank' href={life[4].url}>
                                <h3>{life[4].title}</h3>
                            </a>
                        </LifeItemTitle>
                    </LifeItem>
                    <LifeItem>
                        <img src={life[5].urlToImage} alt={life[5].description} />
                        <LifeItemTitle>
                            <span>{life[5].author} - {Moment(life[5].publishedAt).format('d MMM YYYY')}</span>
                            <a target='_blank' href={life[5].url}>
                                <h3>{life[5].title}</h3>
                            </a>
                        </LifeItemTitle>
                    </LifeItem>
                </div>
            </LifeBody>
        </LifeWrapper>
    }
    return <></>
}
