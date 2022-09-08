import React from "react";
import Gallery from "../../../components/gallery/gallery.component";

import { ReactComponent as TypoPic } from "../../../assets/telo_land_caciki-05.svg";
import { ReactComponent as SzoborPic } from "../../../assets/desk_land_szobor-06-03.svg";
import {ReactComponent as OpenPic} from "../../../assets/telo_kapcs_nyitva-02.svg"
import {ReactComponent as InstaPic} from "../../../assets/caciki_insta_szurke.svg"
import {ReactComponent as FBPic} from "../../../assets/caciki_fb_szurke.svg"
import {ReactComponent as AboutPic} from "../../../assets/telo_kapcs_info-03.svg"

import "./mhomepage.styles.scss";

const MobileHomePage = ({}) => (
  <div id="mhomepage" className="mhomepage">
    <div className="mlanding">
      <TypoPic className="mtypo" />
    </div>
    <div className="mszland">
      <SzoborPic className="mszobor" />
    </div>
    <div id="mmenu" className="mmenu">
      <button className="mmenu1">
        <a
          className="mmenu-link"
          href={process.env.PUBLIC_URL + "/Etlap_A4_RGB.pdf"}
          download
        >
          Étlap letöltése
        </a>
      </button>
      <p className="mmenu2">
        A gomb megnyomása után az étlapunk
        <br /> letöltésre kerül PDF formátumban.
      </p>
    </div>

    <div className='mgallery' id="mgallery">
      <p className="mitem1">galéria</p>
    </div>
    <div className="mabout">
      <br/>
      <p>kapcsolat</p>
    </div>

  </div>

);

export default MobileHomePage;
