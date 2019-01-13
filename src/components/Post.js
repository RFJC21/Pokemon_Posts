import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../store/actions/actions";
import { deletePost } from "../store/actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    //check if there is a post
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center"> Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

//onwProps: this refers to the props of this compoennts, before
//we attach the additional props fro the redux store
const mapStateToProps = (state, ownProps) => {
  //i want to grab the id of the post
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
