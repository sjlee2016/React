import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p> Test </p> 
          <BurgerBuilder/>
          </Layout>
      </div>
    );
  }
}
export default App;


