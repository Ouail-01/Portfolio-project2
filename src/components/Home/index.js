/* eslint-disable */
import './index.scss';
import LogoTitle from "../../assets/images/logo-o.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import LogoO from '../../assets/images/logo-ol.png'
import Loader from 'react-loaders';

const Home = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ['u', 'a', 'i', 'l'];
  const jobArray = ["I'", 'm', ' ' , 'a', ' ', 'f', 'u', 'l', 'l', '-', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Cleanup function to clear the timeout when the component unmounts or the effect is re-run
    return () => clearTimeout(timeoutId);
  }, []);
  


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        
        <span className={{letterClass}}>H</span>
        <span className={`${letterClass} _12`}>e</span>
        <span className={`${letterClass} _13`}>y, </span>
        {/* <AnimatedLetters letterClass={letterClass} strArray={regardsArray} idx={15} /> */}
          <br />
        <span className={`${letterClass} _14`}>I'</span>
        <span className={`${letterClass} _15`}>m</span>
        <img src={LogoTitle} alt="Web Developer letter"/>
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
        {/* Im a full-stack developer */}
        </h1>
        <h2>Front End Developer / JavaScript Expert / Freelancer</h2>
        <Link to="/contact" className="flat-button" >Contact me</Link>

      </div>
      <img
        className="solid-logo"
        src={LogoO}
        alt="JavaScript,  Developer"
      />
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home;
