import React, { Component } from 'react';
import Login from './pages/Login';
import Register from './pages/Register'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
class App extends Component {

  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    )
    return (
      <BrowserRouter>
      <Switch>
        <App/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
