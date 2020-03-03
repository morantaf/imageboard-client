import React, { Component } from "react";
import { connect } from "react-redux";
import { getImages } from "../store/actions/images";
import List from "./List";

class ListContainer extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      <div>
        <List images={this.props.images} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  images: reduxState.images,
  user: reduxState.user
});

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
