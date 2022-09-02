import React from 'react';
import {ReactComponent as Logo} from '../../../assets/caciki_logo_new.svg'


import './mfooter.styles.scss'

const MobileFooter=() =>{
    return (
      <div className="mfooter">
        <div className="address">
          
        </div>       
        <div className="info">
          <div className="secret">
            Created by: David Lencses <br /> Designed by: Alex Kemény
          </div>
          <div>2022</div>
        </div>
      </div>
    );
}

export default MobileFooter;