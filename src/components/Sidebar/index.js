/* eslint-disable */
import LogoO from '../../assets/images/logo-ol.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoO} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Ouail logo name" />
    </Link>

    <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="works-link" to="/work" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#2aa198" size="3x" className='close-icon' />
    </nav>

    <ul className={showNav ? 'mobile-show' : ''}>
      <li onClick={() => setShowNav(false)}>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ouail-laarabi/" >
          <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
        </a>
      </li>
      
      <li onClick={() => setShowNav(false)}>
        <a target="_blank" rel="noreferrer" href="https://github.com/Ouail-01" >
          <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
        </a>
      </li>

      <li onClick={() => setShowNav(false)}>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/Ouail_Laarabi" >
          <FontAwesomeIcon icon={faTwitter} color="4d4d4e"/>
        </a>
      </li>
    </ul>
    <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#2aa198"
          size="3x"
          className='hamburger-icon' />

  </div>
  )
};

export default Sidebar;
