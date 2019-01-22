import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default ({ data }) => {
  const { edges: icons } = data.icons;
  const { edges: SocialNetworksImgsData } = data.SocialNetworksImgs;
  return (
    <Layout activeLink="Contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contactez-moi !</title>
      </Helmet>
      <div
        className="bg-blue"
        style={{ paddingTop: "170px", marginBottom: "0px", height: "100%" }}
      >
        <div className="container center contact">
          <div
            className="white left"
            style={{ borderRadius: "3px", padding: "0px 30px 30px 30px" }}
          >
            <div id="white-cube" />
            <h3 className="black">Prenons contact !</h3>
            <div>
              <h4 className="black">Contactez moi directement :</h4>

              {icons.map((el, index) => {
                switch (el.node.name) {
                  case "phone":
                    return (
                      <div key={index}>
                        <Img
                          style={{
                            width: "20px",
                            float: "left"
                          }}
                          sizes={el.node.childImageSharp.sizes}
                        />
                        <p
                          className="black"
                          style={{
                            fontSize: ".9em",
                            fontWeight: "300",
                            paddingLeft: "40px",
                            float: "center"
                          }}
                        >
                          06 84 08 74 72
                        </p>
                      </div>
                    );
                  case "mail3":
                    return (
                      <div key={index}>
                        <Img
                          style={{
                            width: "20px",
                            float: "left"
                          }}
                          sizes={el.node.childImageSharp.sizes}
                        />
                        <p
                          className="black"
                          style={{
                            fontSize: ".9em",
                            fontWeight: "300",
                            paddingLeft: "40px",
                            float: "center"
                          }}
                        >
                          antoineleguern@yahoo.fr
                        </p>
                      </div>
                    );
                  default:
                    console.log("error");
                    return false;
                }
              })}
            </div>
          </div>

          <div className="right">
            <div className="contact-form">
              <form action="https://formspree.io/your@email.com" method="POST">
                {icons.map((el, index) => {
                  switch (el.node.name) {
                    case "avatar":
                      return (
                        <div
                          className="input small-input container"
                          key={index}
                        >
                          <Img
                            className="img"
                            sizes={el.node.childImageSharp.sizes}
                          />
                          <input
                            placeholder="Saisissez votre nom"
                            type="text"
                            name="fname"
                          />
                        </div>
                      );
                    case "mail2":
                      return (
                        <div
                          className="input small-input container"
                          key={index}
                        >
                          <Img
                            className="img"
                            sizes={el.node.childImageSharp.sizes}
                          />
                          <input
                            placeholder="Saisissez votre mail"
                            type="email"
                            name="_replyto"
                          />
                        </div>
                      );
                    default:
                      console.log("error");
                      return false;
                  }
                })}
                <div className="input">
                  <textarea
                    style={{ height: "140px" }}
                    placeholder="Votre message"
                    name="fname"
                    autocomplete="off"
                  />
                </div>

                <div>
                  <input
                    id="submit"
                    type="submit"
                    value="Envoyer"
                    onClick={e => alert("ok")}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer bg-blue"
        style={{ marginTop: "0px", height: "120px" }}
      >
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
    </Layout>
  );
};

export const query = graphql`
  query contactIcons {
    icons: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/contact/.*.png/" } }
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
  }
`;
