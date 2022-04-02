import { Carousel } from 'react-carousel-minimal';
//import * from '../../../public/images';


const Gallery= ()=> {
    const data=[
        {
            image:"../../../public/images/pita1.jpg",
            caption: "Gyros"
        },
        {
            image:"/images/pita2.jpg",
            caption: "Gyros2"
        },
        {
            image:"/images/pita3.jpg",
            caption: "Gyros3"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      return (
        <div className="App">
          <div style={{ textAlign: "center" }}>            
            <div
              style={{
                padding: "0 20px",
              }}
            >
              <Carousel
                data={data}
                time={10000}
                width="600px"
                height="450px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
    }
   
    export default Gallery;
