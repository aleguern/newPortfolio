import React from "react";
import { Helmet } from "react-helmet";
const SEO = props => {
  return (
    <Helmet>
      <meta
        name="google-site-verification"
        content="ELekt-Sbgt9RpADgX_mOMIq6Oixi9PQYlRVLg1qWozo"
      />
      <meta charSet="utf-8" />
      <title>Antoine Le Guern - Développeur Front-End</title>

      <meta name="title" content="Antoine Le Guern - Développeur Front-End" />

      <meta
        name="description"
        content="Antoine Le Guern, développeur front-end.  Découvrez tous mes projets et  compétences. N'hésitez pas à me contacter."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://antoineleguern.fr/" />
      <meta
        property="og:title"
        content="Antoine Le Guern - Développeur Front-End"
      />
      <meta
        property="og:description"
        content="Antoine Le Guern, développeur front-end.  Découvrez tous mes projets et  compétences. N'hésitez pas à me contacter."
      />
      <meta property="og:image" content="" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://antoineleguern.fr/" />
      <meta
        property="twitter:title"
        content="Antoine Le Guern - Développeur Front-End"
      />
      <meta
        property="twitter:description"
        content="Antoine Le Guern, développeur front-end.  Découvrez tous mes projets et  compétences. N'hésitez pas à me contacter."
      />
      <meta property="twitter:image" content="" />
    </Helmet>
  );
};

export default SEO;
