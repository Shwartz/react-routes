import React, {Component} from 'react';
import axios from 'axios';

import './itemInfo.css';

class ItemInfo extends Component {
  state = {
    post: [],
    id:   null
  };

  getPost() {
    const {params} = this.props;
    console.log('+++ itemInfo props: ', this.props);

    axios.get('/posts/' + params.id)
      .then(response => {
        const post = response.data;
        this.setState(
          {
            post: post,
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

    return (
      <div className="ItemInfo">
        <h3>{post.title}</h3>
        <p>Article ID: {params.id}</p>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default ItemInfo;