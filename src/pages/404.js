import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
//import PropTypes from "prop-types";

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contactez-moi !</title>
      </Helmet>
      <p>Vous vous êtes trompés de page ?</p>
    </Layout>
  );
};

/*
Button.propTypes = {
  color: PropTypes.oneOf([
    "primary", // primary color, no underline
    "secondary" // inherit surrounding styles
  ]),
  href: PropTypes.string.isRequired
};*/
