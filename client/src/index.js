import 'materialize-css/dist/css/materialize.min.css';
import './assets/css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

window.axios = axios;
const store = createStore( reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));