import { combineReducers } from 'redux';
import authReducer from './authReducer';
import galeriasReducer from './galeriasReducer';

export default combineReducers({
    user: authReducer,
    galeriasUsuario: galeriasReducer
});