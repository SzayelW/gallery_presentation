import { FETCH_GALERIAS_USER, ELIMINA_GALERIA } from '../actions';

export default (state = null, action) => {
    switch (action.type){
        case FETCH_GALERIAS_USER:
            return action.payload.filter(a => a.activa === true)[0] || null;
        case ELIMINA_GALERIA: 
            return (action.payload._id === state._id) ? null : state;
        default:
            return state;
    }
}