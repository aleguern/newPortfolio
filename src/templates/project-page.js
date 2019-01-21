import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="center project-page">
        <div className="header">
          <h2 className="title">{post.frontmatter.title}</h2>
          <h3 className="date">{post.frontmatter.date}</h3>
        </div>
        <Img
          className="image"
          sizes={post.frontmatter.picture_filename.childImageSharp.fluid}
        />
        <div className="text" dangerouslySetInnerHTML={{ __html: post.html }} />
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
