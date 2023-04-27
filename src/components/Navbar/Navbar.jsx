import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div><NavLink to='/profile' activeclassName={s.activeLink}>Profile</NavLink></div>
        <div><NavLink to='/messages'>Messages</NavLink></div>
        <div><NavLink to='/news'>News</NavLink></div>
        <div><NavLink to='/music'>Music</NavLink></div>
        <div><NavLink to='/settings'>Settings</NavLink></div>
      </nav>
  )
}

export default Navbar
