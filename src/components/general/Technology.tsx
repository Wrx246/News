import React, { useEffect, useState } from 'react'
import { API } from '../../API/urlConfig';
import { LinkCategory, TechBody, TechItemWrap, TechMainNews, TechTitle, TechWrapper } from '../../styles/Technology.styles'
import { INews } from '../../types/types';
import { TechItem } from '../../UI/TechItem';

export const Technology = () => {
    const [technology, setTechnology] = useState<INews[]>([]);

    const tech = technology.slice(1, 4);

    const fetchNews = async () => {
        await API.get(`?q=technology&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
            .then(res => {
                setTechnology(res.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    }, []);

    if (technology.length) {
        return <TechWrapper>
            <h2>Technology</h2>
            <hr />
            <TechBody>
                <TechMainNews image={technology[0].urlToImage}>
                    <LinkCategory>Technology</LinkCategory>
                    <TechTitle>
                        <h3>{technology[0].title}</h3>
                        <hr />
                        <p>{technology[0].description}</p>
                    </TechTitle>
                </TechMainNews>
                <TechItemWrap>
                    {tech.map((item, index) => {
                        const { author, title, urlToImage, publishedAt } = item;
                        return (
                            <TechItem key={index} publishedAt={publishedAt} author={author} title={title} urlToImage={urlToImage} />
                        )
                    })}
                </TechItemWrap>
            </TechBody>
        </TechWrapper>
    }
    return <></>
}
