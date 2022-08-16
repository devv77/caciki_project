import React from "react";
import {ReactComponent as Logo} from '../../assets/caciki_logo_new.svg'

import {Link} from 'react-router-dom'

import './header.styles.scss'

const isHover=false;

const Header=() => {
  return (
    <div className="header">
      <a className ='logo-container' href="#homepage">
        <Logo className="logo" />
      </a>
      <div className="options">
        <div className="option-k"><a href="#menu"><b>étlap</b></a></div>
        <div className="option-k"><a href="#gallery"><b>galéria</b></a></div>
        <div className="option-k"><a href="#info"><b>kapcsolat</b></a></div>
      </div>
    </div>
  );
}

export default Header;
