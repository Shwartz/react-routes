import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Layout from './modules/components/hoc/Layout/Layout';
import Dashboard from './modules/components/dashboard/dashboard';
import PageOne from "./modules/components/pageOne/pageOne";
import PageTwo from "./modules/components/pageTwo/pageTwo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact={true} component={Dashboard}/>
          <Route path="/items" component={Dashboard}/>
          <Route path="/page-one" component={PageOne}/>
          <Route path="/page-two" component={PageTwo}/>
        </Layout>
      </div>
    );
  }
}

export default App;
