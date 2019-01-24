import React, { Component } from "react";
import Img from "gatsby-image";

const skills = [
  { name: "react", link: "https://reactjs.org/", type: "front-end" },
  {
    name: "react-native",
    link: "https://facebook.github.io/react-native/",
    type: "front-end"
  },
  {
    name: "graph-ql",
    link: "https://graphql.org/",
    type: "front-end"
  },
  { name: "redux", link: "https://redux.js.org/", type: "front-end" },
  { name: "gatsby", link: "https://www.gatsbyjs.org/", type: "front-end" },
  {
    name: "html",
    link: "https://developer.mozilla.org/fr/docs/Web/HTML",
    type: "front-end"
  },
  {
    name: "css",
    link: "https://developer.mozilla.org/fr/docs/Web/css",
    type: "front-end"
  },
  {
    name: "js",
    link: "https://developer.mozilla.org/fr/docs/Web/javascript",
    type: "front-end"
  },
  { name: "node-js", link: "https://www.mongodb.com/", type: "back-end" },
  { name: "mongo-db", link: "https://nodejs.org/en/", type: "back-end" },
  { name: "my-sql", link: "https://www.mysql.com/fr/", type: "back-end" },
  {
    name: "materialize",
    link: "https://materializecss.com/",
    type: "front-end"
  },
  { name: "material-ui", link: "https://material-ui.com/", type: "front-end" },
  { name: "bootstrap", link: "https://getbootstrap.com/", type: "front-end" }
];

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }
  render() {
    const skill = this.props.skill;
    const imageSizes = this.props.imageSizes;
    const key = this.props.index;
    return (
      <div className="skill" key={key}>
        <a href={skill.link}>
          <Img
            className="skill-img"
            alt={skill.name}
            title={skill.name}
            sizes={imageSizes}
          />
        </a>
      </div>
    );
  }
}

const SkillContainer = props => {
  const SkillImgs = props.SkillImgs;
  return (
    <div className="skills container">
      {skills.map((skill, index) => {
        const image = SkillImgs.find(n => {
          return n.node.relativePath === `skills/${skill.name}.png`;
        });
        const imageSizes = image.node.childImageSharp.fluid;
        return (
          <Skill
            key={index}
            skill={skill}
            imageSizes={imageSizes}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default SkillContainer;
