import React, {Component} from 'react';
import axios from 'axios';

import Comment from './comment/comment';
import './comments.css';

class Comments extends Component {
  state = {
    comments: [],
    id:   null
  };

  getPost() {
    const {params} = this.props;

    axios.get(`/posts/${params.id}/comments`)
      .then(response => {
        const comments = response.data;
        this.setState(
          {
            comments: comments,
            id: params.id
          }
        );
      })
  }

  render() {
    const {params} = this.props;

    if (this.state.id !== params.id) {
      this.getPost();
    }

    const comments = this.state.comments.map(comment => {
      return <Comment
        key={comment.id}
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
    });

    return (
      <div className="Comments">
        <h3>Comments</h3>
        {comments}
      </div>
    );
  }
}

export default Comments;