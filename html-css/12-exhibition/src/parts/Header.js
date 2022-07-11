import React from 'react';

import './header.css';
import Links from './../components/Links';

const linkItems = [
    {
        title: "Home",
        linkTo: '/home',
        imageURL: ''
    },
    {
        title: "Profile",
        linkTo: '/profile',
        imageURL: ''
    },
    {
        title: "News",
        linkTo: '/news',
        imageURL: ''
    },
    {
        title: "Schedule",
        linkTo: '/schedule',
        imageURL: ''
    },
    {
        title: "Contact Us",
        linkTo: '/contactUs',
        imageURL: ''
    },
];

const wrapStyleLink = {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
}

const Header = () => {
  return (
    <header className='exhibition__header'>
        <div className='exhibition__header-logo'>
            <img src="https://cenzo128.github.io/exhibition.github.io/images/exhibitionlogo.png" alt="exhibition logo" />
        </div>

        <div className='exhibition__header-links'>
            <Links 
            links={linkItems} wrapStyle={wrapStyleLink} 
            classname= "navActive"
            />
        </div>
    </header>
  )
}

export default Header