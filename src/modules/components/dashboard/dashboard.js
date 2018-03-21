import React, {Component} from 'react';
import './dashboard.css';
class Dashboard extends Component {
  state = {
    test: null,
  };

  componentWillMount() {
    // Is this safe to use? URLSearchParams
  }

  render() {
    return (
      <div className="Dashboard">
        <p>Home: Dashboard</p>
      </div>
    )
  }
}

export default Dashboard;