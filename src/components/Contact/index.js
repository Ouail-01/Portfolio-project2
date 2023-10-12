/* eslint-disable */
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';


const Contact = () => {
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Empower your vision by collaborating on the development of your 
          product, feature, or website. Explore my portfolio and delve into 
          my wealth of experience. If you resonate with my work and have a coding 
          project in mind, don't hesitate to get in touch. I'm ready to bring your 
          ideas to life and contribute to the success of your project. Let's turn your 
          vision into a reality .
          </p>
          
        </div>
        
        <div className="contact-form">
            <form action="https://formspree.io/f/xyyvrwvj" method="post">
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
