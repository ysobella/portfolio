// import React from 'react';
import React, { useState } from 'react';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
 } from "@material-tailwind/react";

import certdl from '../assets/certs/certdl.png';
import certcloud from '../assets/certs/certcloud.jpg';
import certgo from '../assets/certs/certgo.png';
import certkotlin from '../assets/certs/certkotlin.png';
import certr from '../assets/certs/certr.png';
import certruby from '../assets/certs/certruby.png';

const Services = () => {
  const [activeTab, setActiveTab] = useState("orgs");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };


  // const [activeTab, setActiveTab] = useState(1);

  // // Function to handle tab click
  // const handleTabClick = (tabNumber) => {
  //   console.log(`Tab ${tabNumber} clicked`);
  //   setActiveTab(tabNumber);
  //  };
  const data = [
    {
      label: "Organizations",
      value: "orgs",
    },
    {
      label: "Competitions",
      value: "comps",
    },
    {
      label: "Certificates",
      value: "certs",
    },
  ];

  const organizationsData = [
    {
      name: "La Salle Computer Society (LSCS)",
      position: "Associate Vice President, Socio-Civic Committee",
      timeframe: "Sep 2023 - Present",
      description: `Organized events and activities, significantly enhancing officer engagement and contributing to social development initiatives, impacting over 100 members and officers.
      Led a fundraising event benefitting children, women, education, health, environment, and PWDs, with over 30 volunteers involved.
      Received consistent recognition as an outstanding officer for 2 consecutive terms.`,
   },
   {
      name: "Computer Studies Government (CSG)",
      position: "Executive, Human Resources Committee",
      timeframe: "Jan 2024 - Present",
      description: `Facilitated diverse personal and holistic development programs for nearly 100 CSG executives, significantly enhancing their growth and improvement
      Spearheaded the planning and execution of 2 large-scale organizational events, with a total attendance of over 150 participants.`,
   },
   {
      name: "Clash of the Brains 2023",
      position: "Assistant Committee Head, Programs Committee",
      timeframe: "Feb 2023 - Oct 2023",
      description: `Spearheaded the organization of the quiz bee and programming competitions, enhancing the event content, resulting in a successful intercollegiate competition that engaged over 10 teams from various top universities in the Philippines.`,
  },
  {
    name: "La Salle Computer Society (LSCS)",
    position: "Associate Vice President, Academics Committee",
    timeframe: "Sep 2022 - Aug 2023",
    description: `Coordinated various organization's events, including webinars, group studies, and a thesis showcase, engaging over 150 participants in academic excellence and intellectual growth initiatives
    Received regognition as an outstanding officer.`,
 },
 {
    name: "La Salle Computer Society (LSCS)",
    position: "Junior Officer, Publicity and Creatives Committee",
    timeframe: "Oct 2021 - Sep 2022",
    description: `Organized a successful event held in a 3D virtual platform, which garnered positive feedback from members.
    Created publicity materials for the social media content of the organization.`,
  },
 ];

 const certificatesData = [
  {
    imageSrc: certdl,
    caption: "Jose Rizal First Honors",
  },
  {
    imageSrc: certcloud,
    caption: "Cloud Foundations",
  },
  {
    imageSrc: certgo,
    caption: "Go Programming Language",
  },
  {
    imageSrc: certkotlin,
    caption: "Kotlin Programming Language",
  },
  {
    imageSrc: certr,
    caption: "R Programming Language",
  },
  {
    imageSrc: certruby,
    caption: "Ruby Programming Language",
  },
 ];

 const competitionsData = [
  {
    name: "Blue Hacks 2023 | Computer Society of the Ateneo (CompSAt)",
    rank: "2nd Runner-Up",
    description: "Collaborated with a 5-member team to develop \"F.A.R.M.\", a prototype app designed to empower farmers, businessmen, and consumers, addressing the 8th Sustainable Development Goal of Decent Work and Economic Growth by offering online courses, real-time price statistics, and an online selling platform, enhancing economic growth and improving the quality of life in the agricultural sector.",
 },
 {
    name: "Samsung Create Ideathon 2023",
    rank: "Participant",
    description: "Engaged in an ideathon with a group of 4, proposing \"HAPAG\", an application designed to assist users in tracking their macros, receiving exercise tips, and accessing online medical consultations, tailored to their body type, aiming to enhance personal health and wellness.",
 },
 {
    name: "Hackercup 2023 | La Salle Computer Society (LSCS)",
    rank: "Participant",
    description: "Collaborated with a 4-member team to brainstorm and develop innovative solutions addressing United Nations' Sustainable Development Goals (SDGs) 5 (Gender Equality), 9 (Industry, Innovation, and Infrastructure), and 13 (Climate Action), aiming to contribute to global sustainability and development.",
  },
 ];

 return (
  <div className="lg:min-h-[78vh] flex items-center mt-24" id="services">
    <div className="container mx-auto">
      <h1 className="my-5">// awards and experiences</h1>
      <hr className="flex-grow border-t-2 opacity-40 mb-10"></hr>
      <div className="flex flex-col lg:flex-row lg:gap-x-24 justify-center">
        <Tabs value={activeTab} onChange={handleTabChange} className="w-full lg:w-5/6 mx-auto">
          <TabsHeader className="bg-gray-900/10 shadow-none mb-5 h-10" indicatorProps={{ className: "border-b-2 border-fuchsia-500 shadow-none !text-gray-900 bg-gray-900/10" }}>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
               {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className='text-sm'>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {value === "orgs" && organizationsData.map((org, index) => (
                  <div key={index} className="mb-4">
                    <div className="font-bold text-lg text-cyan-400">{org.name}</div>
                    <div className="text-slate-200">{org.position}</div>
                    <div className="text-gray-500">{org.timeframe}</div>
                    <ul className="list-disc list-inside text-slate-200 opacity-40 mt-2">
                      {org.description.split('\n').map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {value === "certs" && (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificatesData.map((cert, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img src={cert.imageSrc} alt={cert.caption} className="h-auto w-64 sm:max-w-full mx-auto" />
                        <div className="text-center mt-2 text-slate-200 opacity-50">{cert.caption}</div>
                      </div>
                    ))}
                  </div>
                )}
                {value === "comps" && competitionsData.map((comp, index) => (
                  <div key={index} className="mb-4">
                    <div className="font-bold text-lg text-cyan-400">{comp.name}</div>
                    <div className="text-slate-200">{comp.rank}</div>
                    <p className="text-slate-200 opacity-40 mt-2">{comp.description}</p>
                  </div>
                ))}
                {/* Render other tabs' content here */}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  </div>
);
};

export default Services;
