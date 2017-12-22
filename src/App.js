import React, { Component } from 'react';
import Header from './containers/Header';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import Questions from './containers/Questions';
import Home from './containers/Home';
import CommonHeader from './components/CommonHeader';

import './App.css';

class App extends Component {
  shouldComponentUpdate(){
    console.log(222);
    return true;
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <section className="content container">
            <Switch>
              <Route path="/assessment" component={Questions} />
              <Route path="/" component={Home} />
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps({userName}) {
  return {
    userName
  }
}

export default connect(mapStateToProps)(App);
