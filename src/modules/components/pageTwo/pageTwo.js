import React, {Component} from 'react';
import './pageTwo.css';

class PageTwo extends Component {

  render() {
    console.log(this);
    return (
      <div className="PageTwo">
        <h1>Page Two</h1>
        <p>This is sample page and content for page two</p>
      </div>
    )
  }
}

export default PageTwo;