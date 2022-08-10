import React, { useEffect, useState } from 'react'
import { API } from '../../API/urlConfig';
import {
    GeneralBoxFirst,
    GeneralBoxSecond,
    GeneralBoxThird,
    GeneralBoxFourth,
    GeneralWrapper,
    LinkCategory,
    LinkTitle
} from '../../styles/General.styles'
import { INews } from '../../types/types';

export const General = () => {
    const [general, setGeneral] = useState<INews[]>([]);

    const fetchNews = async () => {
        await API.get(`?q=general&sortBy=popularity&apiKey=c55971271077494a9bd56c50bd0deca4`)
            .then(res => {
                setGeneral(res.data.articles)
            })
    }

    useEffect(() => {
        fetchNews();
    }, []);

    if(general.length) {
    return <GeneralWrapper>
        <GeneralBoxFirst image={general[0].urlToImage}>
            <LinkCategory>General</LinkCategory>
            <LinkTitle size='12px' height='106px' width='478px'>
                <p>{general[0].author} - {general[0].publishedAt}</p>
                <h3>{general[0].title}</h3>
            </LinkTitle>
        </GeneralBoxFirst>
        <GeneralBoxSecond image={general[1].urlToImage}>
            <LinkCategory>General</LinkCategory>
            <LinkTitle size='10px' height='42px' width='165px'>
                <p>{general[1].author} - {general[1].publishedAt}</p>
                <h3>{general[1].title}</h3>
            </LinkTitle>
        </GeneralBoxSecond>
        <GeneralBoxThird image={general[5].urlToImage}>
            <LinkCategory>General</LinkCategory>
            <LinkTitle size='10px' height='42px' width='165px'>
                <p>{general[5].author} - {general[5].publishedAt}</p>
                <h3>{general[5].title}</h3>
            </LinkTitle>
        </GeneralBoxThird>
        <GeneralBoxFourth image={general[3].urlToImage}>
            <LinkCategory>General</LinkCategory>
            <LinkTitle size='12px' height='72px' width='360px'>
                <p>{general[3].author} - {general[3].publishedAt}</p>
                <h3>{general[3].title}</h3>
            </LinkTitle>
        </GeneralBoxFourth>
    </GeneralWrapper>
    }
    return <></>
}
