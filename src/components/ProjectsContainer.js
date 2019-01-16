import React, { Component } from "react";
import Img from "gatsby-image";

class ProjectsContainer extends Component {
  render() {
    const projectImgs = this.props.ProjectImgs;
    return (
      <div className="container">
        {projectImgs.map(el => {
          if (el.node.childImageSharp)
            return (
              <div className="project">
                <a href="#">
                  <Img
                    className="project-img"
                    sizes={el.node.childImageSharp.sizes}
                    title={el.node.name}
                    alt={el.node.name}
                  />
                </a>

                <h3 className="project-title">Mon Pacte Dutreil</h3>
                <h4 className="project-subtitle">FRONT-END</h4>
              </div>
            );
        })}
      </div>
    );
  }
}
export default ProjectsContainer;
