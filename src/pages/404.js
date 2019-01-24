import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contactez-moi !</title>
      </Helmet>
      <div>
        <div className="bg-white">
          <div className="center" style={{ marginTop: "150px" }}>
            <h2>La page que vous semblez rechercher semble introuvable ...</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};
