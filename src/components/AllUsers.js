import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import EditComponent from './EditComponent';

class AllPost extends Component {
  render() {
    return (
      <div class="col-md-6 employee-list">
        <h1 className="post_heading">Feedback <span className="feed-back">List</span></h1>
        {(this.props.posts).length>0 ? ((this.props.posts).reverse()).map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id} /> : <Users post={post}
              key={post.id} />}
          </div>
        )):
        <h2 class="empty-text">No data available</h2>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(AllPost);