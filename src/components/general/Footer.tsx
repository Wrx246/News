import React from 'react'
import { FooterBody, FooterWrapper } from '../../styles/Footer.styles'
import { FooterLinks } from '../../UI/footer/FooterLinks'
import { FooterTags } from '../../UI/footer/FooterTags'
import { FooterSub } from '../../UI/footer/FooterSub'

export const Footer = () => {
  return <FooterWrapper>
    <FooterBody>
        <FooterLinks />
        <FooterTags />
        <FooterSub />
    </FooterBody>
  </FooterWrapper>
}
