import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Tab, Nav } from 'react-bootstrap';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link className="menu" to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>

  </header>
)

export default Header
