import React, { Component } from 'react';
import Header from './containers/Header';
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import CommonHeader from './components/CommonHeader';
import Questions from './containers/Questions';
import Home from './containers/Home';
import './App.css';

class App extends Component {

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

function mapStateToProps({headerMessage, userName}) {
  return {
    headerMessage,
    userName
  }
}

export default connect(mapStateToProps, null)(App);
