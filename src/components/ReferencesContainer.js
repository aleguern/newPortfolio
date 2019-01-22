import React, { Component } from "react";

const references = [
  {
    text: "Merci pour tous ces bons moment de joie et de kiff.",
    author: "Antoine Le Guern - Responsable des trucs"
  },
  {
    text: "COUCOU",
    author: "Lucie Frelot - Responsable des trucs"
  }
];

class ReferencesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReference: 0
    };
    this.nextReference = this.nextReference.bind(this);
    this.previousReference = this.previousReference.bind(this);
  }

  nextReference() {
    if (this.state.currentReference === references.length - 1) {
      this.setState({
        currentReference: 0
      });
    } else {
      this.setState({
        currentReference: this.state.currentReference + 1
      });
    }
  }

  previousReference() {
    if (this.state.currentReference === 0) {
      this.setState({
        currentReference: references.length - 1
      });
    } else {
      this.setState({
        currentReference: this.state.currentReference - 1
      });
    }
  }

  render() {
    const reference = references[this.state.currentReference];

    return (
      <>
        <h2 className="blue title">Recommandations</h2>
        <div
          className="container"
          style={{
            height: "200px",
            paddingTop: "40px"
          }}
        >
          <span className="prev" onClick={this.previousReference}>
            &laquo;
          </span>
          <div>
            <h3
              className="blue"
              style={{
                fontSize: "1.7em",
                fontWeight: "400",
                textAlign: "center",
                width: "100%",
                paddingLeft: "20px",
                paddingRight: "20px"
              }}
            >
              {reference.text}
            </h3>
            <span
              className="blue"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "20px"
              }}
            >
              {reference.author}
            </span>
          </div>
          <span className="next" onClick={this.nextReference}>
            &raquo;
          </span>
        </div>
      </>
    );
  }
}
export default ReferencesContainer;
