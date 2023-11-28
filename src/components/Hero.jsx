import React from 'react';
import Animation from '../assets/data/Animation - 1700917369774.json';
import Lottie from 'lottie-react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const buttonAnimation = useAnimation();

  // Function to start the scaling animation
  const startAnimation = async () => {
    while (true) {
      await buttonAnimation.start({ scale: 0.8, transition: { duration: 0.5 } });
      await buttonAnimation.start({ scale: 1.2, transition: { duration: 0.5 } });
    }
  };

  // Start the animation when the component mounts
  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(images/esum1.jpg)' }}>
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="flex-wrap flex absolute bottom-[5vh] right-[1vw] w-[20rem] md:w-[32rem] items-center">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfEu8vZnJLtjv5Ti_f74ojXbfCaSVT5uVb8EfyyKXx0UYEjmw/viewform?usp=sf_link'>
        <motion.button
        
          animate={buttonAnimation}
          className="w-[10rem] md:w-[16rem] md:h-[5rem] text-black bg-[#FDC324] font-bold rounded-full text-lg md:text-2xl px-5 py-2.5 mt-[5rem]"
        >
          Register
        </motion.button>
        </a>
        <Lottie animationData={Animation} className='w-[10rem] md:w-[16rem] h-auto' />
      </div>
    </div>
  );
};

export default Hero;
