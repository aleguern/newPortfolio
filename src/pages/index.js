import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Button from "./../components/Button";
import SkillContainer from "../components/SkillContainer";
import ProjectsContainer from "../components/ProjectsContainer";
import ReferencesContainer from "../components/ReferencesContainer";
import header from "./../images/header/header.png";
import Layout from "./../components/Layout";

export default ({ data }) => {
  const { edges: ProjectImgsData } = data.ProjectImgs;
  const { edges: SkillImgData } = data.SkillImgs;
  const { edges: SocialNetworksImgsData } = data.SocialNetworksImgs;
  const { edges: Articles } = data.Articles;
  const { edges: Slugs } = data.Slugs;

  return (
    <Layout activeLink="Accueil">
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
              <Button color="secondary" value="Voir projets" href="#projects" />
              <Button color="primary" value="Contacter" href="/contact" />
            </div>
            <div className="right">
              <img
                style={{ marginBottom: "-6px" }}
                src={header}
                alt="antoine le guern"
              />
            </div>
          </div>
        </div>
        <div className="anchor" id="projects" />
        <div className="bg-white">
          <div className="center">
            <h2 className="blue title">Projets</h2>
            <ProjectsContainer
              ProjectImgs={ProjectImgsData}
              Articles={Articles}
              Slugs={Slugs}
            />
          </div>
        </div>
        <div className="anchor" id="skills" />
        <div className="bg-blue">
          <div className="center">
            <h2 className="white title">Compétences techniques</h2>
            <SkillContainer SkillImgs={SkillImgData} />
          </div>
        </div>
        <div className="anchor" id="references" />
        <div className="bg-white">
          <div className="center">
            <ReferencesContainer />
          </div>
        </div>
        <div className="footer bg-blue">
          <ul style={{ marginLeft: "0px" }} className="navlink-container">
            {SocialNetworksImgsData.map((el, index) => {
              return (
                <>
                  <a href="google.com" key={index}>
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
    </Layout>
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
    Articles: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            type
            picture_filename
          }
          excerpt
          timeToRead
          html
        }
      }
    }
    SkillImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/skills/.*.png/" } }
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
    Slugs: allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`;
