import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Layout from './modules/components/hoc/Layout/Layout';
import Dashboard from './modules/components/dashboard/dashboard';
import NicePage from "./modules/components/nicePage/nicePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/nice-page" component={NicePage}/>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
