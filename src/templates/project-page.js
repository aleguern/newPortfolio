import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div
        className="center"
        style={{
          maxWidth: "750px",
          marginTop: "100px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ display: "inline-block" }}>{post.frontmatter.title}</h1>
          <h3 style={{ display: "inline-block" }}>{post.frontmatter.date}</h3>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ textAlign: "justify", textJustify: "inter-word" }}
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
        picture_filename
      }
    }
  }
`;
