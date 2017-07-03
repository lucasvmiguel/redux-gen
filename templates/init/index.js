import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// import store requirements
import reducers from './reducers'
import middlewares from './middlewares';

// import containers
import ExampleContainer from './containers/Example';
import NotFoundContainer from './containers/NotFound';

// import css files
import './styles/styles.css';

// apply all reducers and middlewares
let store = createStore(reducers, middlewares);

const customHistory = createBrowserHistory();

// apply routes - the routes order is important!
const render = () => ReactDOM.render(
  <Provider store={store} >
    <Router history={customHistory} >
      <Switch>
        <Route exact path="/" component={ExampleContainer} />
        <Redirect from="/home" to="/"/>
        <Route path="/another" component={ExampleContainer} />
        <Route component={NotFoundContainer}/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(render);