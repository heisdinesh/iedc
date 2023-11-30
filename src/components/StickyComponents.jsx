// StickyComponents.js
import React from 'react';
import Lottie from 'lottie-react';
import Animation from '../assets/data/Animation - 1700917369774.json';
import { motion, useAnimation } from 'framer-motion';

const StickyComponents = () => {
  const buttonAnimation = useAnimation();

  // Function to start the scaling animation
  const startAnimation = async () => {
    while (true) {
      await buttonAnimation.start({ scale: 0.9, transition: { duration: 0.7 } });
      await buttonAnimation.start({ scale: 1, transition: { duration: 0.7 } });
    }
  };

  // Start the animation when the component mounts
  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="fixed bottom-2 right-2 flex items-end p-2">
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfEu8vZnJLtjv5Ti_f74ojXbfCaSVT5uVb8EfyyKXx0UYEjmw/viewform?usp=sf_link'>
        <motion.button
          animate={buttonAnimation}
          className="w-[6rem] md:w-[12rem] md:h-[3rem] text-black bg-[#FDC324] font-bold rounded-full text-lg md:text-2xl px-3 py-1 mb-[1rem] md:mb-[2rem] "
        >
          Register
        </motion.button>
      </a>
      <Lottie animationData={Animation} className='w-[6rem] md:w-[12rem] h-auto' />
    </div>
  );
};

export default StickyComponents;
