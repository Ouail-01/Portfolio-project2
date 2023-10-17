import './index.scss';
import { useEffect, useState } from 'react';
import {
  faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m a passionate Full-Stack Web Developer with roots tracing back to Microverse,
            where intensive training launched my journey.
            Equipped with a skill set spanning front-end technologies like HTML5, CSS3, and React,
            alongside back-end proficiency in Ruby on Rails and Node.js, I craft captivating
            web experiences.
          </p>
          <p>
            Armed with experience in completing 20+ professional websites, I excel in bridging
            the technical and non-technical gap.
            My adeptness in project management, mentorship, and collaborative problem-solving
            shines in remote work
            environments. Committed to excellence, I maintain top-tier GitHub repositories and
            actively contribute to diverse
            developer communities.
          </p>
          <p>
            Beyond the code, I find inspiration in equestrian adventures, where the freedom and
            connection with nature
            foster creativity. This passion not only brings balance to my life but also enhances
            my problem-solving skills,
            injecting a unique perspective into every web development project.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
