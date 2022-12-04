import React from 'react';
import { Carousel } from 'react-bootstrap';
import thumbnail from './../img/thumbnail.webp';

const Caurosel = () => {
    return (
        <>
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 thumbnil-img"
          
          src={thumbnail}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 thumbnil-img"
          src={thumbnail}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 thumbnil-img"
          src={thumbnail}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> 
        </>
    );
};

export default Caurosel;