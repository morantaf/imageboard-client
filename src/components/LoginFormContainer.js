import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm.js";
import { login } from "../store/actions/user";

class LoginFormContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.login(this.state.email, this.state.password);

    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <LoginForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state}
      />
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LoginFormContainer);
