import React, { Component } from 'react';
import Header from './containers/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Assessment from './containers/Assessment';
import Home from './containers/Home';
import Result from './containers/Result';
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
                <Route exact path="/assessment" component={Assessment} />
                <Route exact path="/result" render={()=> <Result maxScore={3}/>}/>
                <Route exact path="/" component={Home} />
              </Switch>
            </BrowserRouter>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
