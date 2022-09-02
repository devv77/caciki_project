import React from "react";
import {ReactComponent as Logo} from '../../../assets/caciki_logo_new.svg'
import './mheader.styles.scss'

const MobileHeader=() => {
    return (
      <div className="mheader">
        <div className ='mlogo-container'>
          <div className='mlogoc'><Logo className="mlogo" /></div>          
        </div>
        </div>        
    );
  }
  
  export default MobileHeader;
  