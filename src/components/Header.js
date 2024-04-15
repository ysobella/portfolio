import React from 'react';
import Logo from '../assets/logo_name.png';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { FaRegStar } from "react-icons/fa";
import { CgLaptop } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='fixed w-full top-0 z-50 bg-indigo-950 bg-opacity-80 py-3 rounded-b-2xl'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='' style={{ width: '200px', height: 'auto' }} />
        </a>

        <nav className='flex space-x-4'>
            <Link 
              to='home' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BiHomeAlt />
            </Link>
            <Link 
              to='about' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-60}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BiUser />
            </Link>
            <Link 
              to='services' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-100}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <FaRegStar />
            </Link>
            <Link 
              to='work' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-110}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <CgLaptop />
            </Link>
            <Link 
              to='contact' 
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-120}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <FaRegMessage />
            </Link>
          </nav>
      </div>
    </div>
  </header>;
};

export default Header;
