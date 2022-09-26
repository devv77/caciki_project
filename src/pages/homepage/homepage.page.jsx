import React from "react";
import Gallery from "../../components/gallery/gallery.component";

//import {ReactComponent as LogoPic} from "../../assets/caciki_tipo_fekete.svg";
import { ReactComponent as TypoPic } from "../../assets/desk_land_caciki-07.svg";
import { ReactComponent as SzoborPic } from "../../assets/desk_land_szobor_kisebb.svg";
import { ReactComponent as AboutPic } from "../../assets/caciki_info-02.svg";
//import {ReactComponent as OpenPic} from "../../assets/nyitvatartas.svg"
//import { ReactComponent as OpenPic } from "../../assets/caciki_info-01.svg";
import { ReactComponent as OpenPic2 } from "../../assets/telo_kapcs_nyitva-02.svg";
import { ReactComponent as OpenPic3 } from "../../assets/kapcsolat_telefonszam_cim-01.svg";
import { ReactComponent as InstaPic } from "../../assets/caciki_insta_szurke.svg";
import { ReactComponent as FBPic } from "../../assets/caciki_fb_szurke.svg";
import { ReactComponent as FoodPanda } from "../../assets/fp_szurke.svg";
import { ReactComponent as Wolt } from "../../assets/wolt_szurke.svg";

import "./homepage.styles.scss";

const HomePage = ({}) => (
  <div id="homepage" className="homePage">
    <div className="landing">
      <SzoborPic className="szobor" />
      <TypoPic className="main-picture" />
    </div>
    <div id="menu" className="menu">
      <button className="menu1">
        <a
          className="menu-link"
          href={process.env.PUBLIC_URL + "/Etlap_A4_RGB.pdf"}
          download
        >
          Étlap letöltése
        </a>
      </button>
      <p className="menu2">
        A gomb megnyomása után az étlapunk
        <br /> letöltésre kerül PDF formátumban.
      </p>
    </div>
    
    <div id="gallery" className="galery">
    <div className="soon">
      <br />
      <span className="item1">galéria</span>
      <div className="pictures">   
      <span className="soon-text">HAMAROSAN</span>   
        <div className="inpicture">
        
          <div className="inin">

          </div>
        </div>
      </div>
    </div>
</div>
    <div id="info" className="about">
      <p className="item1">kapcsolat</p>

      <div className="items">
        <iframe
          className="maps1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.8790339072991!2d18.432063719810813!3d47.194966850201205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7be20580885%3A0x7bc5e773d57f02b5!2zU3rDqWtlc2ZlaMOpcnbDoXIsIFpzb2x0IHUuIDEsIDgwMDA!5e0!3m2!1shu!2shu!4v1648575747617!5m2!1shu!2shu"
          width="600"
          height="550"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="opens">
          <AboutPic className="pic1" />

          <div className="opening">
            <div>
              <OpenPic2 className="opening2" />
            </div>
            <div></div>
            <OpenPic3 className="opening3" />
            <div className="buttons-site">
              <div className="insta">
                <a
                  href="https://www.instagram.com/cacikipitabar/"
                  target="_blank"
                >
                  <InstaPic></InstaPic>
                </a>
              </div>
              <div className="facebook">
                <a
                  href="https://www.facebook.com/Caciki-Pitab%C3%A1r-108419611702865"
                  target="_blank"
                >
                  <FBPic></FBPic>
                </a>
              </div>
              <div className="foodpanda">
                <a href="https://www.foodpanda.hu" target="_blank">
                  <FoodPanda />
                </a>
              </div>
              <div className="wolt">
                <a href="https://www.wolt.com" target="_blank">
                  <Wolt />
                </a>
              </div>
            </div>
            <div className="shop">              
              <div>Kérheted házhoz is!</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
