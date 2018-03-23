import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import axios from 'axios';

import Item from '../item/item';
import SideDraw from '../ui/SideDraw/SideDraw';
import './dashboard.css';

class Dashboard extends Component {
  state = {
    posts: [],
    error: false,
  };

  componentDidMount() {
    const {match} = this.props;
    console.log('--- Dashboard: url: ', match.path, ' | path: ', match.url);

    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 10);
        console.log('response posts', posts);
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
    console.log('this: ', this);

    const items = this.state.posts.map(post => {
      return <Item
        key={post.id}
        id={post.id}
        title={post.title}
      />
    });

    return (
      <div className="Dashboard">
        <p>Home: Dashboard</p>
        <h3>Titles</h3>

        <ol>
          {/*<li><NavLink to="/items/123456">Item 1</NavLink></li>*/}
          {items}
        </ol>

        <Route path={`${match.url}/:id`} component={SideDraw} />

      </div>
    )
  }
}

export default Dashboard;