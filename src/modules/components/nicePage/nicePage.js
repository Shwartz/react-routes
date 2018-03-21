import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './nicePage.css';


class NicePage extends Component {
  state = {
    test: null,
  };

  componentWillMount() {
    // Is this safe to use? URLSearchParams
  }

  render() {
    const {match} = this.props;
    console.log('path:', match.path);
    console.log('url:', match.url);

    return (
      <div className="NicePage">
        <p>NicePage</p>
        <ul>
          <ul>
            <li><NavLink
              to="/nice-page/some-item-1/:1"
              activeClassName="active">Some item 1</NavLink></li>
            <li><NavLink
              to="/nice-page/some-item-2"
              activeClassName="active">Some item 2</NavLink></li>
            <li><NavLink
              to="/nice-page/some-item-3"
              activeClassName="active">Some item 3</NavLink></li>
          </ul>
        </ul>
      </div>
    )
  }
}

export default NicePage;