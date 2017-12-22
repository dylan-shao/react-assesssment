import React, { Component } from 'react';
import Header from './containers/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Assessment from './containers/Assessment';
import Home from './containers/Home';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <section className="content container">
            <BrowserRouter>
              <Switch>
                <Route path="/assessment" component={Assessment} />
                <Route path="/" component={Home} />
              </Switch>
            </BrowserRouter>
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps({userName}) {
  return {
    userName
  };
}

export default connect(mapStateToProps)(App);
