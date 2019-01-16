import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Button from "./../components/Button";
import SkillContainer from "../components/SkillContainer";
import ProjectsContainer from "../components/ProjectsContainer";
import Navbar from "../components/Navbar";
import header from "./../images/header/header.png";

export default ({ data }) => {
  const { edges: ProjectImgsData } = data.ProjectImgs;
  const { edges: SkillImgData } = data.SkillImgs;
  const { edges: SocialNetworksImgsData } = data.SocialNetworksImgs;
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-blue">
          <div className="hero center">
            <div className="left">
              <h1 className="white" style={{ fontSize: "3.6em" }}>
                <span className="surname" style={{ fontWeight: "200" }}>
                  Antoine
                </span>
                <span className="name" style={{ fontWeight: "400" }}>
                  {" "}
                  Le Guern
                </span>
              </h1>
              <p className="white">
                Vous accompagner dans la réalisation de vos projets digitaux.
              </p>
              <Button
                color="secondary"
                value="Voir projets"
                href="google.com"
              />
              <Button color="primary" value="Contacter" href="google.com" />
            </div>
            <div className="right">
              <img style={{ marginBottom: "-6px" }} src={header} />
            </div>
          </div>
        </div>
        <div class="anchor" id="projects" />
        <div className="bg-white">
          <div className="center">
            <h2 className="blue title">Projets</h2>
            <ProjectsContainer ProjectImgs={ProjectImgsData} />
          </div>
        </div>
        <div class="anchor" id="skills" />
        <div className="bg-blue">
          <div className="center">
            <h2 className="white title">Compétences techniques</h2>
            <SkillContainer SkillImgs={SkillImgData} />
          </div>
        </div>
        <div class="anchor" id="references" />
        <div className="bg-white">
          <div className="center">
            <h2 className="blue title">Recommandations</h2>
            <div
              className="container"
              style={{
                height: "200px",
                paddingTop: "40px"
              }}
            >
              <span className="prev">&laquo;</span>
              <div>
                <h3
                  className="blue"
                  style={{
                    fontSize: "1.7em",
                    fontWeight: "400",
                    textAlign: "center",
                    marginLeft: "50px",
                    marginRight: "50px"
                  }}
                >
                  Merci pour tous ces bons moment de joie et de kiff.
                </h3>
                <span
                  className="blue"
                  style={{ float: "right", marginTop: "20px" }}
                >
                  Antoine Le Guern - Responsable des trucs
                </span>
              </div>
              <span className="next">&raquo;</span>
            </div>
          </div>
        </div>
        <div className="footer bg-blue">
          <ul style={{ marginLeft: "0px" }} className="navlink-container">
            {SocialNetworksImgsData.map(el => {
              return (
                <>
                  <a href="#">
                    <li className="navlink">
                      <Img
                        style={{ width: "30px" }}
                        sizes={el.node.childImageSharp.sizes}
                      />
                    </li>
                  </a>
                </>
              );
            })}
          </ul>
          <span
            className="white"
            style={{ display: "block", textAlign: "center" }}
          >
            © 2019 Antoine Le Guern
          </span>
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query allImgsQuery {
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    SocialNetworksImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/social_networks/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    headerImage: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/header/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    SkillImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/logos/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
