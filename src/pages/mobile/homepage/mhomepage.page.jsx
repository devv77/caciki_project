import React from "react";
import Gallery from "../../../components/gallery/gallery.component";

import { ReactComponent as TypoPic } from "../../../assets/telo_land_caciki-05.svg";
import { ReactComponent as SzoborPic } from "../../../assets/desk_land_szobor-06-03.svg";
import { ReactComponent as OpenPic } from "../../../assets/telo_kapcs_nyitva-02.svg";
import { ReactComponent as OTPic } from "../../../assets/telo_kapcs_caciki-04.svg";
import { ReactComponent as InstaPic } from "../../../assets/caciki_insta_szurke.svg";
import {ReactComponent as OpenPic2} from "../../../assets/telefon_kapcsolat-01-01.svg"
import { ReactComponent as FBPic } from "../../../assets/caciki_fb_szurke.svg";
import { ReactComponent as AboutPic } from "../../../assets/telo_kapcs_info-03.svg";

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

    <div className="mgallery" id="mgallery">
      <br />
      <span className="mitem1">galéria</span>
    </div>
    <div className="mmabout">
      <br />
      <span className="mitem1">kapcsolat</span>
      <div className="mmaps">
        <iframe
          className="mmaps1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.8790339072991!2d18.432063719810813!3d47.194966850201205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7be20580885%3A0x7bc5e773d57f02b5!2zU3rDqWtlc2ZlaMOpcnbDoXIsIFpzb2x0IHUuIDEsIDgwMDA!5e0!3m2!1shu!2shu!4v1648575747617!5m2!1shu!2shu"
          width="80%"
          height="400px"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mopening">
        <OTPic className="motpic" />
      </div>
      <div className="minfos">
        <OpenPic className="mopenpic" />
        <AboutPic className="maboutpic" />
      </div>
    </div>
  </div>
);

export default MobileHomePage;