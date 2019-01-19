import React, { Component } from "react";
import Img from "gatsby-image";

const ProjectsContainer = props => {
  const projectImgs = props.ProjectImgs;
  const articles = props.Articles;
  const slugs = props.Slugs;

  return (
    <div className="container">
      {articles.map((article, index) => {
        const image = projectImgs.find(n => {
          return (
            n.node.relativePath ===
            `projects/${article.node.frontmatter.picture_filename}`
          );
        });
        const imageSizes = image.node.childImageSharp.sizes;
        const projectInfo = article.node.frontmatter;
        return (
          <div className="project" key={index}>
            <a href={slugs[index].node.fields.slug}>
              <Img className="project-img" sizes={imageSizes} />
            </a>
            <h3 className="project-title">{projectInfo.title}</h3>
            <h4 className="project-subtitle">{projectInfo.type}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsContainer;