import React from "react";
import {ReactComponent as Logo} from '../../assets/caciki_logo_feher.svg'
import {ReactComponent as EPic} from '../../assets/caciki_etlap_feher.svg'
import {ReactComponent as GPic} from '../../assets/caciki_galéria_feher.svg'
import {ReactComponent as KPic} from '../../assets/caciki_kapcsolat_feher.svg'
import {ReactComponent as EPicS} from '../../assets/caciki_etlap_sarga.svg'
import {Link} from 'react-router-dom'

import './header.styles.scss'

const isHover=false;

const Header=() => {
  return (
    <div className="header">
      <Link className ='logo-container' to='/'>
        <Logo className="logo" />
      </Link>
      <div className="options">
        {/*<EPicS className="option-e2"/>
        <EPic className="option-e" />

        <GPic className="option-g"/>*/}
        <div className="option-k">étlap</div>
        <div className="option-k"><b>galéria</b></div>
        <div className="option-k"><b>kapcsolat</b></div>
      </div>
    </div>
  );
}

export default Header;
