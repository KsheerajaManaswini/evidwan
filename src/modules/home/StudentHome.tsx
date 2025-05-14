import React from 'react';
import Navbar from '../home/Navbar.tsx';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Heroo from "../../assets/hero.png";
import Blob from '../../assets/blob.svg';
import { motion } from "framer-motion";


export const FadeUp = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 0.5,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };


const Hero = () => {
  return (
    <section className='bg-white overflow-hidden relative'>
        <Navbar userRole={JSON.parse(localStorage.getItem("evidwan-role") || "null")} />
    <div className='container flex flex-col md:flex-row justify-center items-center min-h-[650px]'>
    {/*Brand Info */}
    <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
        <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
        <motion.h1 variants={FadeUp(0.6)}  initial="initial"
              animate="animate" className='text-3xl lg:text-5xl font-bold !leading-sung'>Let's Learn Something New Everyday</motion.h1>
        <motion.div variants={FadeUp(0.8)}
              initial="initial"
              animate="animate" className='flex justify-center md:justify-start'>
            <button className='primary-btn flex items-center gap-2 group'>Get Started
            <span className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300">
                <IoIosArrowRoundForward />
            </span>
            </button>
        </motion.div>
        </div>
    </div>
    <motion.img
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
      src={Heroo}
      alt="Hero"
      className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
    />
    </div>
    </section>
  );
};

export default Hero;
