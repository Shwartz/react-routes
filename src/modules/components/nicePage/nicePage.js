import React, {Component} from 'react';
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
        NicePage
      </div>
    )
  }
}

export default NicePage;