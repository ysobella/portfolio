import React from 'react';
// images
import Image from '../assets/me.svg';
// icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[80px] mt-20 mb-5'>
              hi! bella here.
            </h1>
            <div className='mb-6 text-[36px] lg:text-[50px] font-secondary font-bold leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer', 
                2000,
                'Designer',
                2000,
                'Student Leader',
                2000,
                'Dean\'s Lister',
                2000,
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />
            </div>
              <p className='mb-8 max-w-xl mx-auto lg:mx-0'>
              With a passion for software development and innovation, 
              I thrive on transforming concepts into tangible solutions
              that push the boundaries of technology.
              </p>
              <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>Say hi!</button>
                <a href='#' className='text-gradient btn-link'>My Portfolio</a>
              </div>
              {/* socials */}
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='#'>
                  <FaGithub />
                </a>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
              </div>
          
          </div>
          {/* image */}
          <div className='mx-auto lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Banner;
