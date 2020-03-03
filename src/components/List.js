import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

export default class List extends Component {
  render() {
    if (!this.props.images) {
      return <p>loading...</p>;
    } else {
      return (
        <div>
          {!this.props.user ? <LoginFormContainer /> : <CreateFormContainer />}
          <div>
            {this.props.images.map(image => {
              return (
                <div key={image.id}>
                  <h3>{image.title}</h3>
                  <img src={image.url} alt={image.title} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
