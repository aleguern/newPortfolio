import React, { Component } from "react";

const references = [
  {
    text: `Un accompagnement sans faille de l’équipe Mon Pacte Dutreil dans la réalisation de l’interface web et mobile. 
    Antoine a été proactif et force de proposition tout au long de la mission. On recommande les yeux fermés !`,
    author: `Ronan Lajoux, avocat, fondateur du site www.mon-pacte-dutreil.fr`
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
        <div className="container reference-page">
          {/*<span className="prev" onClick={this.previousReference}>
            &laquo;
    </span>*/}
          <div>
            <h3 className="blue reference-title">{reference.text}</h3>
            <span className="blue reference-author">{reference.author}</span>
          </div>
          {/*<span className="next" onClick={this.nextReference}>
            &raquo;
  </span> */}
        </div>
      </>
    );
  }
}
export default ReferencesContainer;
