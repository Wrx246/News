import React from 'react'
import {
    GeneralBoxFirst,
    GeneralBoxSecond,
    GeneralBoxThird,
    GeneralBoxFourth,
    GeneralWrapper,
    LinkCategory,
    LinkTitle
} from '../../styles/General.styles'

export const General = () => {
    return <GeneralWrapper>
        <GeneralBoxFirst>
            <LinkCategory>Buisness</LinkCategory>
            <LinkTitle size='12px' height='106px' width='478px'>
                <p>Craig Bator - 27 Dec 2020</p>
                <h3>After all is said and done, more is done</h3>
            </LinkTitle>
        </GeneralBoxFirst>
        <GeneralBoxSecond>
            <LinkCategory>Buisness</LinkCategory>
            <LinkTitle size='10px' height='42px' width='165px'>
                <p>Craig Bator - 27 Dec 2020</p>
                <h3>After all is said and done, more is done</h3>
            </LinkTitle>
        </GeneralBoxSecond>
        <GeneralBoxThird>
            <LinkCategory>Buisness</LinkCategory>
            <LinkTitle size='10px' height='42px' width='165px'>
                <p>Craig Bator - 27 Dec 2020</p>
                <h3>After all is said and done, more is done</h3>
            </LinkTitle>
        </GeneralBoxThird>
        <GeneralBoxFourth>
            <LinkCategory>Buisness</LinkCategory>
            <LinkTitle size='12px' height='72px' width='295px'>
                <p>Craig Bator - 27 Dec 2020</p>
                <h3>After all is said and done, more is done</h3>
            </LinkTitle>
        </GeneralBoxFourth>
    </GeneralWrapper>
}
