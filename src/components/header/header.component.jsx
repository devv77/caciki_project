import React from "react";
import {ReactComponent as Logo} from '../../assets/caciki_logo_feher.svg'
import {Link} from 'react-router-dom'

import './header.styles.scss'

const Header=() => {
  return (
    <div className="header">
      <Link className ='logo-container' to='/'>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <div className="option-e">étlap</div>
        <div className="option-g">galéria</div>
        <div className="option-k">kapcsolat</div>
      </div>
    </div>
  );
}

export default Header;
