import React from 'react';
import img1 from '../Assets/background.jpg';
import img2 from '../Assets/background1.jpg';
import img3 from '../Assets/city.jpg';
import img4 from '../Assets/city1.jpg';
import { Carousel } from 'react-responsive-carousel';
import './ImageSlide.css';


const ImageSlide = () => {
  return (
    // <Carousel>
    //   <div>
    //     <img src={img1} alt="Image 1" />
    //     <p className="legend">Legend 1</p>
    //   </div>
    //   <div>
    //     <img src={img2} alt="Image 2" />
    //     <p className="legend">Legend 2</p>
    //   </div>
    //   <div>
    //     <img src={img3} alt="Image 3" />
    //     <p className="legend">Legend 3</p>
    //   </div>
    // </Carousel>
    <section className='container'>
        <div className="slider-wrapper">
            <div className="slider">
            <img src={img1}  id="s1" alt="Image 1" />
            <img src={img2} id="s2" alt="Image 2" />
            <img src={img3} id="s3" alt="Image 3" />
            </div>
            <div className="slider-nav">
                <a href="#s1"></a>
                <a href="#s2"></a>
                <a href="#s3"></a>
            </div>
        </div>
    </section>
  );
};

export default ImageSlide;