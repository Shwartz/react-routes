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
    return (
      <div className="NicePage">
        <p>NicePage</p>
        <ul>
          <NavLink to="/nice-page/side-draw">Open sidedraw</NavLink>
        </ul>
      </div>
    )
  }
}

export default NicePage;