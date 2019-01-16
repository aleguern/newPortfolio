import React, { Component } from "react";
import Img from "gatsby-image";

class SkillContainer extends Component {
  render() {
    const SkillImgs = this.props.SkillImgs;
    return (
      <div className="skills container">
        {SkillImgs.map(el => {
          if (el.node.childImageSharp)
            return (
              <div className="skill">
                <Img
                  className="skill-img"
                  alt={el.node.name}
                  title={el.node.name}
                  sizes={el.node.childImageSharp.sizes}
                />
              </div>
            );
        })}
      </div>
    );
  }
}
export default SkillContainer;
