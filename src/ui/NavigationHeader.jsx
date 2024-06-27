import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from './../utils/initalData';
import CartLogo from '../assets/cart-icon.svg';
import UserIcon from '../assets/user.svg'
const NavigationHeader = () => {
    const [dropDown, setDropDown] = useState(false);
    const handleDropDownButton = () => {
        setDropDown(!dropDown);
    }
    return (
        <div className='flex flex-row justify-between items-center py-1 font-poppins font-normal px-10  bg-slate-800'>
            <div className=''>
                <Link to='/'>
                    <img src={CartLogo} alt="cartlogo" className='w-12 h-12 inline ' />
                    <p className='inline ms-3 font-medium text-white'>Grocery Website</p>
                </Link>
            </div>
            <div className='relative'>
                {navLinks.map((link) => (<NavLink key={link.linkName} className={'mx-2 text-small  text-white'} to={`/${link.linkName}`}>{`${link.Name}`}</NavLink>))}
                <img src={UserIcon} className='w-8 h-8 ms-2 inline shadow-md cursor-pointer' onClick={handleDropDownButton} alt="" />
                <div
                    className={`absolute top-10 right-0 rounded-sm w-auto h-auto text-ssss p-3 bg-white ${dropDown === false ? 'hidden' : ''} shadow-sm `}
                >
                    <Link to='user' className='block text-left mb-2'>User Login</Link>
                    <Link to='admin' className='block text-left mb-2'>Admin Login</Link>
                    <p className='block text-left  cursor-pointer'>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default NavigationHeader

