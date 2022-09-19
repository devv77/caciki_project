import React from 'react';
import {ReactComponent as Logo} from '../../assets/caciki_logo_new.svg'
import {Link} from 'react-router-dom'

import './footer.styles.scss'

const Footer=() =>{
    return (
      <div className="footer">
        <div className="address">
        <a
          className="footer-link"
          href={process.env.PUBLIC_URL + "/Etlap_A4_RGB.pdf"}
          download
        >
          étlap letöltése.
        </a>
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