/* eslint-disable */
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import projects from "./projectData";
import { ProjectCard } from "./projectCard";
import AnimatedLetters from '../AnimatedLetters';

const Work = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Cleanup function to clear the timeout when the component unmounts or the effect is re-run
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container work-page">
        {/* <Sidebar /> */}
        {/* <Projects /> */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              My Recent Works
              strArray={['M', 'y', ' ', 'R', 'e', 'c', 'e', 'n', 't', ' ', 'W', 'o', 'r', 'k', 's']}
              idx={19}
            />
          </h1>
          
        </div>
        <div className="cards">

          {/*  */}
        

          {/*  */}
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
         </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work;
