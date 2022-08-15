import React from 'react'
import { LinksWrap } from '../../styles/UI/footer/FooterLinks.styles'
import Logo from '../../assets/images/footerLogo.png'
import Facebook from '../../assets/images/footerLinks/Facebook.png'
import Twitter from '../../assets/images/footerLinks/Twitter.png'
import Instagram from '../../assets/images/footerLinks/Instagram.png'
import Youtube from '../../assets/images/footerLinks/Youtube.png'

export const FooterLinks = () => {
  return <LinksWrap>
    <img src={Logo} alt='main logo picture' />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Neque, pellentesque dictum posuere id diam rutrum.
    </p>
    <div>
      <a href='https://facebook.com' target='_blank'>
        <img src={Facebook} alt='Facebook link picture' />
      </a>
      <a href='https://twitter.com' target='_blank'>
        <img src={Twitter} alt='Twitter link picture' />
      </a>
      <a href='https://instagram.com' target='_blank'>
        <img src={Instagram} alt='Instagram link picture' />
      </a>
      <a href='https://youtube.com' target='_blank'>
        <img src={Youtube} alt='Youtube link picture' />
      </a>
    </div>
  </LinksWrap>
}
