import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from './../utils/initalData';
import CartLogo from '../assets/cart-icon.svg';
const NavigationHeader = () => {

    return (
        <div className='flex flex-row justify-between items-center py-1 font-poppins font-normal px-10  bg-slate-800'>
            <div className=''>
                <Link to='/'>
                    <img src={CartLogo} alt="cartlogo" className='w-12 h-12 inline ' />
                    <p className='inline ms-3 font-medium text-white'>Grocery Website</p>
                </Link>
            </div>
            <div className=''>
                {navLinks.map((link) => (<NavLink key={link.linkName} className={'mx-2  text-white'} to={`/${link.linkName}`}>{`${link.Name}`}</NavLink>))}
            </div>
        </div>
    )
}

export default NavigationHeader
