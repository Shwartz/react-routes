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
    console.log('+++ COMMENTS props: ', this.props);

    axios.get(`/posts/${params.id}/comments`)
      .then(response => {
        const comments = response.data;
        console.log('comments: ', comments);
        this.setState(
          {
            comments: comments,
            id: params.id
          }
        );
      })
  }

  render() {
    const {post}   = this.state;
    const {params} = this.props;

    if (this.state.id !== params.id) {
      this.getPost();
    }
    console.log('comments: ', this.state.comments);
    const comments = this.state.comments.map(comment => {
      return <Comment
        key={comment.id}
        email={comment.email}
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