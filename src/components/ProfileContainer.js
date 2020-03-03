import React, { Component } from "react";
import { connect } from "react-redux";
import { getUniqueUser } from "../store/actions/user";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getUniqueUser(this.props.match.params.id);
  }

  render() {
    const userDisplayed = this.props.user.userDisplayed;

    if (!userDisplayed) {
      return <p>loading</p>;
    } else {
      return <Profile user={userDisplayed} />;
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getUniqueUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
