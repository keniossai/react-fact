import React from 'react'
import Logo from '../../images/react-logo.png'

const NavBar = () => {
    return(
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <ul className='list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar