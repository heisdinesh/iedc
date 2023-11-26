import React, { useState, useEffect } from 'react';
import { Footer, Navbar, Hero } from '../components';

const Esummit = () => {
  const [imageSource, setImageSource] = useState('images/fffbg3.png'); // Initial image source

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setImageSource(screenWidth > 768 ? 'images/fffbg3.png' : 'images/fffbg4.png');
    };

    handleResize();

  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <Hero />
        <img
          src={imageSource}
          alt='Zoomed Out Image'
          className="object-cover object-center max-w-full h-full transform scale-[100%]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Esummit;
