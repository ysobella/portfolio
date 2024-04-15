import React from 'react';
import Logo from '../assets/logo_name.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
 
  return( 
  <div className='section mt-20' id='contact'>
    <div className='container mx-auto'>
      <h1 className='my-5'>// contact</h1>
      <hr className="flex-grow border-t-2 opacity-40"></hr>
      <div className='flex flex-col lg:flex-row lg:gap-x-24 mt-10'>
        
        <div class="pyramid-loader mx-auto">
          <div class="wrapper">
            <span class="side side1"></span>
            <span class="side side2"></span>
            <span class="side side3"></span>
            <span class="side side4"></span>
            <span class="shadow"></span>
          </div>  
        </div>

        <div className='flex flex-col items-center lg:items-start'>
          <div className='text-xl font-extrabold mb-4'>
            Get in touch, say hi.
          </div>
          <div className='mb-4 text-base text-center lg:text-left'>
            Feel free to send me an email! I'm always open to new opportunities and collaborations.
          </div>
          <div className='mb-4 text-base mt-10 text-cyan-300'>
            ysobellatorio@gmail.com
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/ysobella' target="_blank" title="GitHub" className='hover:text-cyan-300'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/ysobella-torio/' target="_blank" title="LinkedIn" className=' hover:text-cyan-300'>
              <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/y.so.bella/' target="_blank" title="Instagram" className=' hover:text-cyan-300'>
              <FaInstagram />
            </a>
          </div>
        </div>

        
      </div>
      <hr className="flex-grow border-t-2 opacity-20 mt-44 mb-10"></hr>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center opacity-50 mb-10'>
          <div>Ysobella Torio.</div>
          <div>All rights reserved.</div>
        </div>
    </div>
    </div>
  </div>
  );
};

export default Contact;
