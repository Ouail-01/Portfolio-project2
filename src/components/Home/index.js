/* eslint-disable */
import './index.scss';
import LogoTitle from "../../assets/images/logo-o.png"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hey, <br /> I'm 
        <img src={LogoTitle} />
        uail
        <br />
        I'm a full-stack developer
        </h1>
        <h2>Front End Developer / JavaScript Expert / Freelancer</h2>
        <Link to="/contact" className="flat-button" >Contact me</Link>

      </div>
    </div>
  )
}

export default Home;
