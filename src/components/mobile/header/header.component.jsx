import React from "react";
import {ReactComponent as Logo} from '../../assets/caciki_logo_new.svg'
import './header.styles.scss'

const MobileHeader=() => {
    return (
      <div className="header">
        <a className ='logo-container' href="#homepage">
          <Logo className="logo" />
        </a>
        </div>        
    );
  }
  
  export default MobileHeader;
  