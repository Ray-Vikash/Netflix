import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix-logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import user from '../../assets/avatar.png'
import dropdown from '../../assets/down-arrow.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="search_icon" className='icon' />
        <p>Children</p>
        <img src={bell} alt="bell_icon" className='icon' />
        <div className='navbar-profile'>
          <img src={user} alt="Profile_icon" className='profile' />
          <img src={dropdown} alt="dropdown-icon" className='icon' />
          <div className="dropdown-content">
            <p>Manage Profiles</p>
            <p>Account</p>
            <p>Help Center</p>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar