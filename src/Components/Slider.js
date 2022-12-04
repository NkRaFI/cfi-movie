import React from 'react';
import Slider from "react-slick";
import './../css/global.css';
import './../css/responsive.css';


const MainSlider = () => {

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        speed: 800,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


    return (
        <>
        <div className='mb-4 slider-width mx-auto'>
            
            <Slider {...settings}>
            <div className='slider-container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyF3y3h6_o7lO9GQNlKQ3n0cgLztJXHK8Kw&usqp=CAU" className='slider-img' alt="slider-1" />
            </div>
            <div className='slider-container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIuBhlOXTy7nlxAmlit-i57fVE8MOo_y2kQ&usqp=CAU" className='slider-img'  alt="slider-2" />
            </div>
            <div className='slider-container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hEhzVhGxPeLUMWeNO3oneZpz8acaZXKTww&usqp=CAU" className='slider-img'  alt="slider-3" />            
            </div>
            <div className='slider-container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatDy1Z2JIXRgxVepM1U_V1WHSxwYYZDhHjw&usqp=CAU" className='slider-img'  alt="slider-4" />            
            </div>
            <div className='slider-container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq9bxVNESqaQB2qDooO_C3U66DTMybODchw&usqp=CAU" className='slider-img'  alt="slider-5" />
            </div>
            
            </Slider>
        </div>  
        </>
    );
};

export default MainSlider;