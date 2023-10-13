import React from 'react';
import PropTypes from 'prop-types';
import liveImg from '../../assets/images/liveDemo-img.png';
import githubImg from '../../assets/images/github-img.png';

const ProjectCard = ({
  title, description, imgUrl, projLink, githubLink,
}) => (
  <div className="proj-container">
    <img className="cards-img" src={imgUrl} alt="project-img" />
    <div className="card-img_hover">
      <div
        role="button"
        tabIndex={0}
        onClick={() => window.open(projLink, '_blank')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            window.open(projLink, '_blank');
          }
        }}
      >
        <img
          src={liveImg}
          alt="source code"
        />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => window.open(githubLink, '_blank')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            window.open(githubLink, '_blank');
          }
        }}
      >
        <img
          src={githubImg}
          alt="source code"
        />
      </div>
    </div>
    <div className="proj-title">
      <h3>{title}</h3>
    </div>
    <div className="proj-info">
      <p>{description}</p>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  projLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
