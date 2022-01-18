import React from 'react'
import './bar.css'
import NavbarList from './NavBarList'

function Header() {
    return (
        <div className="header">
            <NavbarList/>
            <div className="intro">
                <p>looking for a job !</p>
                <h1> <span>Search </span>and<span> Get</span> A Job</h1>
                <p className="details">
                <span><b>Khadamny</b></span> is a Tunisian job portal in Tunisia helps you in your job search and offers you many 
                job offers and CVs on the Internet, daily news, advice

                </p>
                <a href="#" className="header-btn">Details</a>
          
            </div>
        </div>
    )
}

export default Header
