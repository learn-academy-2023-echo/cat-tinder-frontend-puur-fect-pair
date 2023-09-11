import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (

    
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catindex" className="nav-link">
        Meet the kitties!
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catnew" className="nav-link">
        New meow meow
        </NavLink>
      </NavItem>
    </Nav>
  
  )
}

export default Header