import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Pokeball from "../pokeball.png";

class Home extends Component {
  render() {
    console.log(this.props);
    //destructure the posts in a class component
    const { posts } = this.props;
    //if we have posts
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet </div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
