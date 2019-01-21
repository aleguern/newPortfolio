import React, { Component } from "react";
import { Link } from "gatsby";

class Layout extends Component {
  render() {
    const links = [
      { name: "Accueil", link: "/" },
      { name: "Portfolio", link: "/#projects" },
      { name: "Competences", link: "/#skills" },
      { name: "Contact", link: "/contact/" }
    ];

    return (
      <>
        <div className="navbar">
          <ul className="navlink-container">
            {links.map(el => {
              let className;
              this.props.activeLink === el.name
                ? (className = `navlink selected`)
                : (className = `navlink`);
              return (
                <li>
                  <Link className={className} to={el.link}>
                    {el.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {this.props.children}
      </>
    );
  }
}

export default Layout;
