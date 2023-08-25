import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div className="Header">
      <h1>Coupons!</h1>
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default Header;
