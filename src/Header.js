import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from './Img/logo.svg';
export default function Header() {
  const [activ, setActive] = useState(false);
  return (
    <div className="HeaderContent">
      <div className="Logo">
        <a href="#">
          <img className="LLogo" src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className="Bar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Open Chat</a>
        </li>
        <li>
          <a href="#">Content</a>
        </li>
        <li>
          <a href="#">Bookings</a>
        </li>
      </ul>
      <div className="row cf">
        <div className="three col">
          <div
            className={activ ? 'hamburger is-active' : 'hamburger'}
            id="hamburger-5"
            onClick={(event) => {
              setActive((current) => !current);
            }}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
