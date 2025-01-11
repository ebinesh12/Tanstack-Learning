import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav>
            <NavLink className={"m-3 text-yellow-400"} to={'/'}> Home</NavLink>
            <NavLink className={"m-3 text-yellow-400"} to={'/rq'}> Query</NavLink>
            <NavLink className={"m-3 text-yellow-400"} to={'/pro'}> Products</NavLink>
            <NavLink className={"m-3 text-yellow-400"} to={'/page'}>Page</NavLink>
            <NavLink className={"m-3 text-yellow-400"} to={'/scroll'}>scroll</NavLink>
            <NavLink className={"m-3 text-yellow-400"} to={'/mute'}>Mute</NavLink>
            <NavLink className={"m-3 text-yellow-400"} to={'/table'}>Table</NavLink>
            {/* <NavLink to={'/det'}> Details</NavLink> */}
        </nav>
    </div>
  )
}

export default Header;