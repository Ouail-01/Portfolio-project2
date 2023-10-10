/* eslint-disable */
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import projects from "./projectData";
import { ProjectCard } from "./projectCard";
import AnimatedLetters from '../AnimatedLetters';
import { PiArrowFatLinesLeftBold, PiArrowFatLinesRightBold } from 'react-icons/pi';
// import { fadeIn, slideIn } from './motion';

const Work = () => {

  const [number, setNumber] = useState(1);
  const [desktop, setDesktop] = useState(false);
  const [showPerPage, setShowPerPage] = useState(1);
  const lastNumber = number * showPerPage;
  const firstNumber = lastNumber - showPerPage;
  const filterProject = projects.slice(firstNumber, lastNumber);

  const prev = () => {
    if (desktop) {
      setNumber((prevNumber) => (prevNumber === 2 ? prevNumber - 1 : 1));
    } else {
      setNumber((prevNumber) => (prevNumber === 1 ? projects.length : prevNumber - 1));
    }
  };

  const next = () => {
    if (desktop) {
      setNumber((prevNumber) => (prevNumber === 1 ? prevNumber + 1 : 2));
    } else {
      setNumber((prevNumber) => (prevNumber === projects.length ? 1 : prevNumber + 1));
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setShowPerPage(3);
        setDesktop(true);
      } else {
        setShowPerPage(1);
        setDesktop(false);
      }
    };
    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

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
              {
                filterProject.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
         </div>

         <div className="btn_container">
          <button
            className={desktop && number === 1 ? 'hidden' : 'button prev'}
            type="button"
            onClick={prev}
          >
            <PiArrowFatLinesLeftBold />
          </button>
          <button
            className={desktop && number === 2 ? 'hidden' : 'button next'}
            type="button"
            onClick={next}
          >
            <PiArrowFatLinesRightBold />
          </button>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work;
