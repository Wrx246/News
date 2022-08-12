import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { NavigationItem, NavigationWrapper } from '../../../styles/Navigation.styles'

const navItems = [
    'General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology',
];

export const Navigation = () => {
    const {pathId} = useParams();
    return <NavigationWrapper>
        {navItems.map((item, index) => {
            const path = item.toLowerCase();
            // if(pathId === path) {
                // return (
                //     <NavLink key={index} style={{textDecoration: 'none'}} to={`/${path}`}>
                //         <NavigationItem color={'#FFFFFF'} background={'#F65050'}>{item}</NavigationItem>
                //     </NavLink>
                // )
            // }
            return (
                <NavLink key={index} style={{textDecoration: 'none'}} to={`/${path}`}>
                    <NavigationItem color='' background=''>{item}</NavigationItem>
                </NavLink>
            )
        })}
    </NavigationWrapper>
}
