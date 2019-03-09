import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout activeLink="Portfolio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title}</title>
        <meta name="title" content={post.frontmatter.title} />
      </Helmet>
      <div className="center project-page">
        <div className="project-page-header">
          <h2 className="project-page-title">{post.frontmatter.title}</h2>
          <h3 className="project-page-date">{post.frontmatter.date}</h3>
        </div>
        <Img
          className="project-page-image"
          sizes={post.frontmatter.picture_filename.childImageSharp.fluid}
        />
        <div
          className="project-page-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        picture_filename {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
