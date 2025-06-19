import React from 'react';
import resorts from '../data/resorts';
import ResortCard from '../components/ResortCard';
import Slider from 'react-slick';
import Resorts from './Resorts';
import About from './About';
import Contact from './Contact';
import cop1 from '../assets/cop1.jpg';
import cop2 from '../assets/cop2.jpg';
import cop3 from '../assets/cop3.jpg';
function Home() {
    const heroSlides = [
  {
    image: cop1,
    text: 'Find Your Perfect Getaway'
  },
  {
    image: cop2,
    text: 'Luxury Resorts in India'
  },
  {
    image: cop3,
    text: 'Experience Nature Like Never Before'
  }
];

const heroSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 1000,
  fade: true,
  arrows: false
};

  return (
    <div>
      <div className="bg-dark text-white text-center py-5" style={{ backgroundImage: 'url("/resort-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Slider {...heroSettings}>
  {heroSlides.map((slide, index) => (
    <div key={index}>
      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: '70vh',
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="display-5">{slide.text}</h1>
        </div>
      </div>
    </div>
  ))}
</Slider>
      </div>

     
<Resorts />
<About />
<Contact />
    </div>
  );
}

export default Home;
