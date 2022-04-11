import React from 'react';
import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const MyGallery =() =>{
  const images = [
    {
      headerText: null,
      image: process.env.PUBLIC_URL + "/pita1.jpg",
      subText: null,
    },
    {
      headerText: null,
      image: process.env.PUBLIC_URL + "/pita2.jpg",
      subText: null,
    },
    {
      headerText: null,
      image: process.env.PUBLIC_URL + "/pita3.jpg",
      subText: null,
    },
  ];

  return  <Carousel
    data={images}
    autoPlay={false}
    rightItem={<FaArrowRight />}
    leftItem={<FaArrowLeft />}
    animationDuration={3000}
    size="normal"
  />;
}
export default MyGallery;