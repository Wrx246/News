import React from 'react'
import { HeaderBody, HeaderWrapper } from '../../styles/Header.styles'
import { Navigation } from './navigation/Navigation'
import Logo  from '../../assets/images/mainLogo.png'

export const Header = () => {
  return <HeaderWrapper>
    <HeaderBody>
        <img src={Logo} alt='main logo picture' />
    </HeaderBody>
    <Navigation />
  </HeaderWrapper>
}
