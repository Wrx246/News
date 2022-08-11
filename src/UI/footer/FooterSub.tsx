import React from 'react'
import { SubWrapper } from '../../styles/UI/footer/FooterSub.styles'

export const FooterSub = () => {
    return <SubWrapper>
        <h3>Stay In Touch</h3>
        <hr />
        <p>
            To be updated with all the latest news, offers
            and special annoucements.
        </p>
        <input type='text' placeholder='Your email adress' />
        <button type='button'>Subscribe</button>
    </SubWrapper>
}
