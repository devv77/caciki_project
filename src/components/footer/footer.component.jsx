import React from 'react';
import {ReactComponent as Logo} from '../../assets/caciki_logo_feher.svg'

import './footer.styles.scss'

const Footer=() =>{
    return (
      <div className="footer">
        <div className="address">
          Caciki pita bar <br /> Székesfehérvár, Zsolt utca 1.
        </div>
        <div className="logo-container">
          <Logo className="logo" />
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

export default Footer;