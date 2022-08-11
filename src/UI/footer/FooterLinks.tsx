import React from 'react'
import { LinksWrap } from '../../styles/UI/footer/FooterLinks.styles'
import Logo from '../../assets/images/footerLogo.png'
import Facebook from '../../assets/images/Facebook.png'

export const FooterLinks = () => {
  return <LinksWrap>
    <img src={Logo} alt='main logo picture' />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Neque, pellentesque dictum posuere id diam rutrum.
    </p>
    <div>
      <img src={Facebook} alt='main logo picture' />
      <img src={Facebook} alt='main logo picture' />
      <img src={Facebook} alt='main logo picture' />
      <img src={Facebook} alt='main logo picture' />
    </div>
  </LinksWrap>
}
