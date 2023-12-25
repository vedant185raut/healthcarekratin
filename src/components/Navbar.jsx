import React from 'react'
import {Link} from 'react-router-dom'
import "../Css/navbar.css"
import logo from "../asset/logo1.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-container'>
            <div className='logo'>
            <Link  to="/"><img src={logo} to=''alt='logo'/></Link>
             </div>
            <div className='links'>
                <Link className='link' to="/"><h6>Home</h6></Link>
                <Link className='link' to="/Food"><h6>Food</h6></Link>
                <Link className='link' to="/Exercise"><h6>Exercise</h6></Link>
                <Link className='link' to="/Yoga"><h6>Yoga</h6></Link>
                <Link className='link' to="Music"><h6>Music</h6></Link>
                <Link className='link' to="/Blogs"><h6>Blogs</h6></Link>
                <Link className='name' to="/"><h6>Sunita</h6></Link>
                <Link className='link' to="/"><h6>Logout</h6></Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar