import React from 'react';


import './homepage.styles.scss';



const HomePage = ({}) => (
  <div className="homePage">
    <div className="landing">
      <div className="main-picture">
        <p>
          <span className="name1">
            caciki<span className="pont">.</span>
          </span>

          <br />
          <span className="name2">pita bar</span>
        </p>
      </div>
    </div>
    <div className="menu">
      <p className="menu1">Étlap letöltése</p>
      <p className="menu2">
        A gomb megnyomása után az étlapunk
        <br /> letöltésre kerül PDF formátumban.
      </p>
    </div>
    <div className="galery">
      <div className="soon">
      <div className="square"> <p className="item1">Galéria</p></div>
      </div>
    </div>
    <div className="about">
    <div className="square"><p className="item1">Kapcsolat</p></div>
      <div className="items">
        <div className="maps">
          <iframe
            className="maps1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.8790339072991!2d18.432063719810813!3d47.194966850201205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769f7be20580885%3A0x7bc5e773d57f02b5!2zU3rDqWtlc2ZlaMOpcnbDoXIsIFpzb2x0IHUuIDEsIDgwMDA!5e0!3m2!1shu!2shu!4v1648575747617!5m2!1shu!2shu"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="items">
          <span className="name1">
            caciki<span className="pont">.</span>
          </span>

          <br />
          <span className="name2">pita bar</span>
        </div>
      </div>
    </div>
  </div>
);

  export default HomePage;