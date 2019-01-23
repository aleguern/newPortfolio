import React, { Component } from "react";
import { Link } from "gatsby";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: this.props.activeLink
    };
    this.setActiveLink = this.setActiveLink.bind(this);
  }

  setActiveLink(newActiveLink) {
    this.setState({ activeLink: newActiveLink });
  }

  render() {
    const links = [
      { name: "Accueil", link: "/" },
      { name: "Portfolio", link: "/#projects" },
      { name: "Compétences", link: "/#skills" },
      { name: "Contact", link: "/contact/" }
    ];

    return (
      <>
        <div className="navbar">
          <ul className="navlink-container">
            {links.map(el => {
              let className;
              this.state.activeLink === el.name
                ? (className = `navlink selected`)
                : (className = `navlink`);
              return (
                <li onClick={() => this.setActiveLink(el.name)}>
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
