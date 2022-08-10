import React from 'react'
import { NavigationItem, NavigationWrapper } from '../../../styles/Navigation.styles'

const navItems = [
    'General', 'Buisness', 'Entartainment', 'Health', 'Science', 'Sports', 'Technology',
];

export const Navigation = () => {
    return <NavigationWrapper>
        {navItems.map((item, index) => {
            return (
                <NavigationItem key={index}>{item}</NavigationItem>
            )
        })}
    </NavigationWrapper>

}
