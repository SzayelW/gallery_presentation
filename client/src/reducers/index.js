import { combineReducers } from 'redux';
import authReducer from './authReducer';
import galeriasReducer from './galeriasReducer';
import galeriaActivaReducer from './galeriaActivaReducer';

export default combineReducers({
    user: authReducer,
    galeriaActiva: galeriaActivaReducer,
    galeriasUsuario: galeriasReducer
});