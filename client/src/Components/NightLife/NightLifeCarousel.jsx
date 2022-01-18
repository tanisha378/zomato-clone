import React,{useState} from 'react';
import Slider from 'react-slick';

//component
import PictureCarouselCard from '../PictureCarouselCard'
import {NextArrow, PrevArrow} from '../CarouselArrow';


function NightLifeCarousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const [nightLife] = useState([
      {
        image: "https://b.zmtcdn.com/data/collections/bb6a35086c983af31c536a3cfe886f1b_1631616165.jpg",
        title:"Microbreweries",
        places:"18 Places",
      },
      {
        image: "https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg",
        title:"Where's The Party",
        places:"30 Places",
      },
      {
        image: "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
        title:"Bar-gain",
        places:"18 Places",
      },
      {
        image: "https://im.whatshot.in/img/2020/Aug/13172-d-1597168183.jpg",
        title:"Rooftop Cafes",
        places:"15 Places",
      },
      {
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png",
        title:"On a Budget",
        places:"23 Places",
      },
    ]);

    return (
     <div className='w-full'>
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
           <PictureCarouselCard {...nightLife} key={index}/> 
        ))}
      </Slider> 
     </div>
    )
}

export default NightLifeCarousel 
