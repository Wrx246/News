import React, { useEffect, useState } from 'react'
import Moment from 'moment';
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

    if (general.length) {
        return <GeneralWrapper>
            <GeneralBoxFirst image={general[0].urlToImage}>
                <LinkCategory>General</LinkCategory>
                <LinkTitle size='12px' height='106px' width='478px'>
                    <p>{general[0].author} - {Moment(general[0].publishedAt).format('d MMM YYYY')}</p>
                    <a target='_blank' href={general[0].url}>
                        <h3>{general[0].title}</h3>
                    </a>
                </LinkTitle>
            </GeneralBoxFirst>
            <GeneralBoxSecond image={general[1].urlToImage}>
                <LinkCategory>General</LinkCategory>
                <LinkTitle size='10px' height='62px' width='165px'>
                    <p>{general[1].author} - {Moment(general[1].publishedAt).format('d MMM YYYY')}</p>
                    <a target='_blank' href={general[1].url}>
                        <h3>{general[1].title}</h3>
                    </a>
                </LinkTitle>
            </GeneralBoxSecond>
            <GeneralBoxThird image={general[5].urlToImage}>
                <LinkCategory>General</LinkCategory>
                <LinkTitle size='10px' height='42px' width='165px'>
                    <p>{general[5].author} - {Moment(general[5].publishedAt).format('d MMM YYYY')}</p>
                    <a target='_blank' href={general[5].url}>
                        <h3>{general[5].title}</h3>
                    </a>
                </LinkTitle>
            </GeneralBoxThird>
            <GeneralBoxFourth image={general[3].urlToImage}>
                <LinkCategory>General</LinkCategory>
                <LinkTitle size='12px' height='72px' width='360px'>
                    <p>{general[3].author} - {Moment(general[3].publishedAt).format('d MMM YYYY')}</p>
                    <a target='_blank' href={general[3].url}>
                        <h3>{general[3].title}</h3>
                    </a>
                </LinkTitle>
            </GeneralBoxFourth>
        </GeneralWrapper>
    }
    return <></>
}
