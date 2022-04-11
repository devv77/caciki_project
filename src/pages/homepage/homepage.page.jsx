import React from "react";
import Gallery from "../../components/gallery/gallery.component";
import {ReactComponent as LogoPic} from "../../assets/caciki_tipo_fekete.svg"; 
import {ReactComponent as AboutPic} from "../../assets/caciki_tipo_kek.svg"
import {ReactComponent as OpenPic} from "../../assets/nyitvatartas.svg"

import "./homepage.styles.scss";

const HomePage = ({}) => (
  <div className="homePage">
    <div className="landing">
      <LogoPic
        className="main-picture"
        style={{ width: "35%", height: "35%" }}
      />
      {/* <div className="main-picture">
        { <p>
          <span className="name1">
            caciki<span className="pont">.</span>
          </span>
          <br />
          <span className="name2">pita bar</span>
        </p> }
        
      </div> */}
    </div>
    <div className="menu">
      <p className="menu1">
        <a className="menu-link" href="/test_menu.pdf" download>
          Étlap letöltése
        </a>
      </p>
      <p className="menu2">
        A gomb megnyomása után az étlapunk
        <br /> letöltésre kerül PDF formátumban.
      </p>
    </div>
    <div className="galery">
      <div className="soon">
        <p className="item1">Galéria</p>

        <Gallery className="pictures"></Gallery>
      </div>
    </div>
    <div className="about">
      <p className="item1">Kapcsolat</p>

      <div className="items">
        <iframe
          className="maps1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.8790339072991!2d18.432063719810813!3d47.194966850201205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7be20580885%3A0x7bc5e773d57f02b5!2zU3rDqWtlc2ZlaMOpcnbDoXIsIFpzb2x0IHUuIDEsIDgwMDA!5e0!3m2!1shu!2shu!4v1648575747617!5m2!1shu!2shu"
          width="600"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <AboutPic className="pic1"/>

          <div>
            <OpenPic className="opening"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
