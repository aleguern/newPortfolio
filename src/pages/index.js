import React from "react";
import { Link } from "gatsby";
import Button from "../components/button";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link
      to={props.to}
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "1.1rem",
        paddingLeft: "10px"
      }}
    >
      {props.children}
    </Link>
  </li>
);

export default () => (
  <>
    <header
      style={{
        paddingTop: "10px",
        backgroundColor: "blue",
        height: "50px",
        position: "fixed",
        width: "100%",
        listStyle: `none`,
        textAlign: "center"
      }}
    >
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    <div style={{ backgroundColor: "blue", paddingTop: "50px" }}>
      <div
        style={{
          height: "250px",
          margin: "3rem auto",
          paddingLeft: "25px",
          maxWidth: "600px"
        }}
      >
        <h1>Antoine Le Guern</h1>
        <p>Bonjour</p>
        <Button />
      </div>
    </div>
    <footer>
      <h4>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </h4>
    </footer>
  </>
);
