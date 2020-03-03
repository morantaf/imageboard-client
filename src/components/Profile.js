import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.email}</h2>
      </div>
    );
  }
}
