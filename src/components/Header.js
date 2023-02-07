import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/pizzaLogo.png';
import { useState } from 'react';
import '../style/Header.scss';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick= () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      {/* logo */}
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* menu */}
      <div className={open ? 
      'header-menu' : 'header-menu mb'}>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Info">Menu</Link>
        <Link to="/About">About</Link>
      </div>

      <div className="menu-btn">
        <button onClick={handleClick} >O</button>
      </div>

      {/* /* ============================================ */
      /*                    ROUTER                    */
      /* ============================================ */}
    </div>
  );
}
export default Header;
