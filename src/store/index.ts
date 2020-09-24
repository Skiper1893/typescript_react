import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

const middlewares = applyMiddleware(
    thunk
);

const rootReducer = combineReducers({ })

export const history = createBrowserHistory()
export const store = createStore(rootReducer, middlewares);
