/* eslint-disable */
import LogoO from '../../assets/images/logo-ol.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoO} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Ouail logo name" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="works-link" to="/about">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ouail-laarabi/" >
          <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
        </a>
      </li>
      
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Ouail-01" >
          <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
        </a>
      </li>

      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/Ouail_Laarabi" >
          <FontAwesomeIcon icon={faTwitter} color="4d4d4e"/>
        </a>
      </li>
    </ul>

  </div>
);

export default Sidebar;
