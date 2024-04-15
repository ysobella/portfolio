import React from 'react';

import ville from '../assets/projects/ville.png';
import armstrong from '../assets/projects/armstrong.png';
import bb from '../assets/projects/bb.png';
import blending from '../assets/projects/blending.png';
import chatbot from '../assets/projects/chatbot.png';
import checkers from '../assets/projects/checkers.png';
import chutes from '../assets/projects/chutes.png';
import converter from '../assets/projects/converter.png';
import huewiz from '../assets/projects/huewiz.png';
import insurance from '../assets/projects/insurance.png';
import mazebot from '../assets/projects/mazebot.png';
import pasahero from '../assets/projects/pasahero.png';
import pokedex from '../assets/projects/pokedex.png';
import quilting from '../assets/projects/quilting.png';
import spikezone from '../assets/projects/spikezone.png';
import tax from '../assets/projects/tax.png';

const Work = () => {

  const cards = [
    { 
      title: 'BantayBuddy', 
      text: 'A social web application for pet owners', 
      tech: 'NextJS, Tailwind CSS, Vercel',
      image: bb },
    { 
      title: 'SpikeZone', 
      text: 'An online forum for Valorant players', 
      tech: 'Javascript, MongoDB',
      image: spikezone },
    { 
      title: 'PasaHero', 
      text: 'A mobile application prototype for Filipino commuters', 
      tech: 'Figma',
      image: pasahero },
    { 
      title: 'Threeville Farm', 
      text: 'An OOP farming game that included buying seeds, preparing land, planting, and harvesting', 
      tech: 'Java',
      image: ville },
    { 
      title: 'HueWiz', 
      text: 'An image-processing project that lets users adjust the colors of an image by modifying its palette (Image Recolorization)', 
      tech: 'Python, Hugging Face, Holoviz Panel, OpenCV',
      image: huewiz },
    { 
      title: 'Image Quilting', 
      text: 'A program that synthesizes a new image by stitching together small patches of a given pattern', 
      tech: 'Python, OpenCV, Matplotlib',
      image: quilting },
    { 
      title: 'Multi-band Blending', 
      text: 'A program that blends two images together', 
      tech: 'Python, OpenCV',
      image: blending },
    { 
      title: 'Mazebot', 
      text: 'A mazebot that utilized the A* search algorithm in finding the goal state from different mazes', 
      tech: 'Python',
      image: mazebot },
    { 
      title: 'Insurance Claim Prediction', 
      text: 'A machine learning project that utilized Decision Trees and Support Vector Machines (SVM) to analyze the likelihood of an insurance claim being approved by analyzing individual-specific information', 
      tech: 'Python, Jupyter Notebook',
      image: insurance },
    { 
      title: 'Diagnostic Chatbot', 
      text: 'A medical diagnostic chatbot specialized in infectious diseases', 
      tech: 'Prolog',
      image: chatbot },
    { 
      title: 'Armstrong Number Checker', 
      text: 'A program that checks if an input is an Armstrong number', 
      tech: 'Assembly',
      image: armstrong },
    { 
      title: 'Decimal32 Floating Point Converter', 
      text: 'A web application that shows the process of converting a decimal and exponent input to its binary and hexadecimal equivalent', 
      tech: 'Python, Jupyter Lab, Holoviz Panel',
      image: converter },
    { 
      title: 'Chutes and Ladders',
      text: 'An ancient Indian board game similar to snakes and ladders. It can be played by 2-4 human players but the user may choose to play with a pseudo-AI player.', 
      tech: 'C',
      image: chutes },
    { 
      title: 'Discrete Checkers', 
      text: 'A checkers game made with Discrete Structures', 
      tech: 'C',
      image: checkers },
    { 
      title: 'Pokedex', 
      text: 'A Pokemon database made using multi-dimensionial arrays', 
      tech: 'C',
      image: pokedex },
    { 
      title: 'Tax Calculator', 
      text: 'A monthly tax calculator that computed the income tax, SSS, PhilHealth, and Pag-IBIG contributions', 
      tech: 'Kotlin',
      image: tax },
    // Add more cards as needed
 ];

  return( 
    <div className='mt-10' id='work'>
      <div className='container mx-auto'>
        <h1 className='my-5'>// projects</h1>
        <hr className="flex-grow border-t-2 opacity-40"></hr>
        <div className='flex flex-col lg:flex-row lg:gap-x-24'>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-wrapper"
            >
              <div
                className="card flex flex-col justify-between"
                style={{ backgroundImage: `url(${card.image})` }}
                data-text={card.text}
              >
                <div className="flex-grow"></div> {/* This div will take up all available space, pushing the title to the bottom */}
                <div className="text-white p-2 text-center font-extrabold">{card.title}</div>
              </div>
              <div className="text-cyan-400 p-2 text-center font-normal text-sm">{card.tech}</div>
            </div>
          ))}
          </div>

        </div>
      </div>
    </div>
    );
};

export default Work;
