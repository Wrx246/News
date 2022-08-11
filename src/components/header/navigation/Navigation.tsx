import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { NavigationItem, NavigationWrapper } from '../../../styles/Navigation.styles'

const navItems = [
    'General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology',
];

export const Navigation = () => {
    const {pathId} = useParams();
    return <NavigationWrapper>
        {navItems.map((item, index) => {
            const path = item.toLowerCase();
            if(pathId === path) {
                return (
                    <Link key={index} style={{textDecoration: 'none'}} to={`/${path}`}>
                        <NavigationItem color={'#FFFFFF'} background={'#F65050'}>{item}</NavigationItem>
                    </Link>
                )
            }
            return (
                <Link key={index} style={{textDecoration: 'none'}} to={`/${path}`}>
                    <NavigationItem color='' background=''>{item}</NavigationItem>
                </Link>
            )
        })}
    </NavigationWrapper>
}
