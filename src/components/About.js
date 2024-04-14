import React from 'react';
import ImageGrid from './ImageGrid'; 
import t1 from '../assets/tech/asm.png';
import t2 from '../assets/tech/c.png';
import t3 from '../assets/tech/cpp.png';
import t4 from '../assets/tech/csharp.png';
import t5 from '../assets/tech/css.png';
import t6 from '../assets/tech/golang.png';
import t7 from '../assets/tech/html.png';
import t8 from '../assets/tech/java.png';
import t9 from '../assets/tech/kotlin.png';
import t10 from '../assets/tech/mongodb.png';
import t11 from '../assets/tech/mysql.png';
import t12 from '../assets/tech/nextjs.png';
import t13 from '../assets/tech/opencv.png';
import t14 from '../assets/tech/prolog.png';
import t15 from '../assets/tech/python.png';

import t16 from '../assets/tech/reactjs.png';
import t17 from '../assets/tech/ruby.png';
import t18 from '../assets/tech/scikit.png';
import t19 from '../assets/tech/tailwindcss.png';
import t20 from '../assets/tech/vercel.png';

const About = () => {
  const images = [
    t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20
 ];
  return(
    <div className='lg:min-h-[78vh] flex items-center' id='about'>
      <div className='container mx-auto'>
        <h1 className='my-5'>// about me</h1>
        <hr className="flex-grow border-t-2 opacity-40"></hr>
        <div className='flex flex-col lg:flex-row lg:gap-x-24'>
          <div className='lg:w-1/2'>
            <p className='mt-10 text-gray-400'>
              Hi! I'm Ysobella Torio, a 3rd year undergraduate student at <span className="text-cyan-300 font-extrabold">De La Salle University, Manila</span>
              , and I'm currently taking up <span className="font-extrabold">Bachelor of Science in Computer Science</span> with a Major in <span className="font-extrabold">Software Technology</span>.
            </p>
          </div>
          
          <div className='lg:w-1/2 grid h-full'>
            <p className='mt-10 text-gray-400 mb-10'>
              Here are some technologies I have worked with:
            </p>
            <ImageGrid images={images} />
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default About;
