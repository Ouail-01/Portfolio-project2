/* eslint-disable */
import liveImg from "../../assets/images/liveDemo-img.png";
import githubImg from "../../assets/images/github-img.png";



export const ProjectCard = ({ title, description, imgUrl, projLink, githubLink }) => {

  const visibleRange = 3;
  const cardStyles = {
    display: visibleRange,
  };

  
  return (
      <div className="proj-container" style={cardStyles}>
        <img className="cards-img" src={imgUrl} alt="project-img"/>
        <div className="card-img_hover">
            <div
              onClick={() => window.open(projLink, "_blank")}
            >
              <img
                src={liveImg}
                alt='source code'
              />
            </div>
            <div
              onClick={() => window.open(githubLink, "_blank")}
            >
              <img
                src={githubImg}
                alt='source code'
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
  )
}
