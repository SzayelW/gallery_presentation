import { FETCH_GALERIAS_USER } from '../actions';

export default (state = null, action) => {
    switch (action.type){
        case FETCH_GALERIAS_USER:
            return action.payload.filter(a => a.activa === true)[0] || null;
        default:
            return state;
    }
}