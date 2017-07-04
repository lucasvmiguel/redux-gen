import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(
  createLogger(), 
  thunk
);

export default middlewares;