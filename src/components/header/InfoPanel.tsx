import React, { useEffect, useState } from 'react'
import Moment from 'moment';
import { MoveInfo, PanelInfo, PanelLinks, PanelWrap } from '../../styles/InfoPanel.styles'
import Icon from '../../assets/images/Facebook.png'
import Clock from '../../assets/images/clock.png'
import axios from 'axios';
import { IExchangeEur, IExchangeUsd, IWeather } from '../../types/types';

export const InfoPanel = () => {
    const api = {
        key: 'ec3ce23b9a71994fb4dc391b4ae673d6',
        base: 'https://api.openweathermap.org/data/2.5/',
    }

    const [weather, setWeather] = useState<IWeather | null>(null);
    const [usd, setUsd] = useState<IExchangeUsd | null>(null);
    const [eur, setEur] = useState<IExchangeEur | null>(null);

    const lon = navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude)
    })

    const lat = navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
    })

    const [longitude, setLongitude] = useState(lon as unknown as number);
    const [latitude, setLatitude] = useState(lat as unknown as number);


    useEffect(() => {
        axios(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
            .then(res => {
                setWeather(res.data)
            })
    }, [longitude, latitude])

    useEffect(() => {
        axios(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
            .then(res => {
                setUsd(res.data)
            })
        axios(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`)
            .then(res => {
                setEur(res.data)
            })
    }, [])



    const date = new Date();

    return <PanelWrap>
        <PanelInfo>
            <MoveInfo>
                <p>{Math.round(weather?.main.temp as number)}℃ {weather?.name}</p>
                <div>
                    <img src={Clock} alt='clock picture' />
                    <p>{Moment(date).format('dddd, Do MMMM YYYY')}</p>
                </div>
                <p>$: {(usd?.usd.byn as number).toFixed(2)}</p>
                <p>EUR: {(eur?.eur.byn as number).toFixed(2)}</p>
            </MoveInfo>
        </PanelInfo>
        <PanelLinks>
            <img src={Icon} alt='Facebook link picture' />
            <img src={Icon} alt='Facebook link picture' />
            <img src={Icon} alt='Facebook link picture' />
            <img src={Icon} alt='Facebook link picture' />
        </PanelLinks>
    </PanelWrap>
}
