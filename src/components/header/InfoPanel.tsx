import React from 'react'
import Moment from 'moment';
import { PanelInfo, PanelLinks, PanelWrap } from '../../styles/InfoPanel.styles'
import Icon from '../../assets/images/Facebook.png'
import Clock from '../../assets/images/clock.png'

export const InfoPanel = () => {
    const date = new Date();

    return <PanelWrap>
        <PanelInfo>
            <p>15 New York</p>
            <div>
                <img src={Clock} alt='clock picture' />
                <p>{Moment(date).format('dddd, Do MMMM YYYY')}</p>
            </div>
        </PanelInfo>
        <PanelLinks>
            <img src={Icon} alt='Facebook link picture' />
            <img src={Icon} alt='Facebook link picture' />
            <img src={Icon} alt='Facebook link picture' />
            <img src={Icon} alt='Facebook link picture' />
        </PanelLinks>
    </PanelWrap>
}
