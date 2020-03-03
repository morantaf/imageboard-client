import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

export default class List extends Component {
  render() {
    if (!this.props.images) {
      return <p>loading...</p>;
    } else {
      return (
        <div>
          {!this.props.user.auth ? (
            <div>
              <SignUpFormContainer />
              <LoginFormContainer />
            </div>
          ) : (
            <CreateFormContainer />
          )}
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
