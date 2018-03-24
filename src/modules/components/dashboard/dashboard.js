import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import Item from '../item/item';
import SideDraw from '../ui/SideDraw/SideDraw';
import './dashboard.css';

class Dashboard extends Component {
  state = {
    posts: [],
    error: false,
    currentTitle: 'Nothing is loaded here yet'
  };

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 10);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
          }
        });
        this.setState({posts: updatedPosts});
      })
  }

  render() {
    const {match} = this.props;

    const items = this.state.posts.map(post => {
      return <Item
        key={post.id}
        id={post.id}
        title={post.title}
      />
    });

    return (
      <div className="Dashboard">
        <h1>Home page</h1>
        <ol>{items}</ol>
        <Route path={`${match.url}/:id`} component={SideDraw}/>
      </div>
    )
  }
}

export default Dashboard;