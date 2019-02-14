import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Button from "../components/Button";
import SkillContainer from "../components/SkillContainer";
import ProjectsContainer from "../components/ProjectsContainer";
import ReferencesContainer from "../components/ReferencesContainer";
import Layout from "./../components/Layout";
import SEO from "./../components/SEO";

export default ({ data }) => {
  const { edges: ProjectImgsData } = data.ProjectImgs;
  const { edges: SkillImgData } = data.SkillImgs;
  const { edges: SocialNetworksImgsData } = data.SocialNetworksImgs;
  const { edges: Articles } = data.Articles;
  const { edges: Slugs } = data.Slugs;
  const { edges: headerImage } = data.headerImage;
  const SEOimg = data.SEOImg;

  return (
    <Layout activeLink="Accueil">
      <SEO SEOimg={SEOimg} />
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
              <p
                className="white"
                style={{ fontWeight: "300", fontSize: "1.1em" }}
              >
                Vous accompagner dans la réalisation de vos projets digitaux.
              </p>

              <Button color="secondary" value="Voir projets" href="#projects" />
              <Button color="primary" value="Contacter" href="/contact" />
            </div>
            <div className="right">
              <Img
                style={{ marginBottom: "0px" }}
                alt="antoine le guern"
                sizes={headerImage[0].node.childImageSharp.fluid}
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
              const imageSizes = el.node.childImageSharp.fluid;
              const name = el.node.name;
              let link = "";
              switch (name) {
                case "github":
                  link = "https://github.com/aleguern";
                  break;
                case "linkedin":
                  link = "https://www.linkedin.com/in/antoine-leguern/";
                  break;
                case "twitter":
                  link = "https://twitter.com/a_leguern";
                  break;
                default:
                  console.log("error in logo pictures");
                  break;
              }
              return (
                <>
                  <li className="navlink">
                    <a
                      href={link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img style={{ width: "30px" }} sizes={imageSizes} />
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
          <span
            className="white"
            style={{ display: "block", textAlign: "center", marginTop: "15px" }}
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
    SEOImg: file(relativePath: { eq: "profile_cut.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
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
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    headerImage: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/header/header.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
            picture_filename {
              relativePath
            }
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
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid_withWebp
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
