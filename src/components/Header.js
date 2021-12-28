import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/netflix-logo.png'

const Header = () => {
    return (
        <header style={headerSty} className="hero-header">
            <img src={logo} alt="Netflix-logo" />
            <Link style={headerBtnStyle} to="/signin" >Sign In</Link>
        </header>
    )
}

const headerSty = {
    padding:"0 40px",
    bacckgroundColor:"#000"
}

const headerBtnStyle = {
    padding:'10px 15px',
    fontSize:'16px',
    color:'White',
    backgroundColor:' #E50914',
    border:'none',
    outline:'none',
    borderRadius:'5px',
    cursor:' pointer',
    textDecoration : "none"
}

export default Header
