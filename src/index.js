
/* REACT */
import React from 'react'
import ReactDOM from 'react-dom';

/* Routes */
import { BrowserRouter } from 'react-router-dom';

/* REDUX */
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';



/* Demo Actions */
import { loadTestPage } from './actions';

/* App */
import App from './App';

/* ThirdPart React Lib */


/* Middleware */
const middleware = applyMiddleware(logger);
 
/* REDUX Store */
const store = createStore(rootReducer,middleware);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);