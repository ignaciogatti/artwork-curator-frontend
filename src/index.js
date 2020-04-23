import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import history from './history';
import { routerMiddleware } from 'connected-react-router';

import App from './components/App';
//import reducers from './reducers';
import createRootReducer from './reducers'


const store = createStore(
    createRootReducer(history), 
    applyMiddleware(thunk, routerMiddleware(history)));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector("#root")
);

