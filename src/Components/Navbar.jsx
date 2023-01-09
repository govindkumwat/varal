import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState('Home')

    const menu = [{
        title: 'Home',
        url: '/home'
    }, 
    {
        title: 'Service',
        url: '/service'
    },
    {
        title: 'Pricing',
        url: '/pricing'
    },
    {
        title: 'About Us',
        url: 'about-us'
    }
]
  return (
    <div className='menu_container'>
    <div className="logo">
        Logo
    </div>

    <div className="hamburger">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
    </div>
    <div className="menulist">
        <ul>
            {
                menu.map((menus, index) => (   
                    <li key={index} id={menus.title} className={activeMenu === menus?.title && 'active'} onClick={(e) => setActiveMenu(e.target.id)} href={menus.url}>{menus.title}</li>
                ))
            }
           <a className='nav_button'>Start a Company</a>
        </ul>
    </div>
    </div>
  )
}
