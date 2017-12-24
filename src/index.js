import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './store/reducers';
import Header from './containers/Header';
import Assessment from './containers/Assessment';
import Home from './containers/Home';
import Result from './containers/Result';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <Header />
      <main>
        <section className="content container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/assessment" component={Assessment} />
              <Route exact path="/result" render={() => <Result maxScore={3} />} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </section>
      </main>
    </div>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
