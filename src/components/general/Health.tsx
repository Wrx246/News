import React, { useEffect, useState } from 'react'
import { API } from '../../API/urlConfig';
import { HealthBanner, HealthBody, HealthColumn, HealthMainNews, HealthWrapper } from '../../styles/Health.styles'
import { INews } from '../../types/types';
import { HealthItem } from '../../UI/HealthItem';

export const Health = () => {
    const [health, setHealth] = useState<INews[]>([]);

    const heal = health.slice(1, 6);

    const fetchHealth = async () => {
        await API.get(`?q=health&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
            .then(res => {
                setHealth(res.data.articles)
            })
    }

    useEffect(() => {
        fetchHealth();
    }, []);

    if (health.length) {
        return <HealthWrapper>
            <h2>Health</h2>
            <hr />
            <HealthBody>
                <HealthMainNews>
                    <img src={health[0].urlToImage} alt={health[0].description} />
                    <span>{health[0].author} - {health[0].publishedAt}</span>
                    <h2>{health[0].title}</h2>
                    <p>{health[0].description}</p>
                </HealthMainNews>
                <HealthColumn>
                    {heal.map((item, index) => {
                        const { title, author, publishedAt, urlToImage } = item;
                        return (
                            <HealthItem 
                            key={index}
                             title={title} 
                             author={author}
                             publishedAt={publishedAt}
                             urlToImage={urlToImage} />
                        )
                    })}

                </HealthColumn>
                <HealthBanner></HealthBanner>
            </HealthBody>
        </HealthWrapper>
    }
    return <></>
}