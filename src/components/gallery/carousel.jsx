import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} width={800}>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/caciki1.jpg"} />
                    
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/caciki2.jpg"}  />
                    
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/caciki3.jpg"}  />
                    
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/caciki4.jpg"}  />
                    
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/caciki5.jpg"}  />
                    
                </div>
            </Carousel>
        );
    }
};

//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel