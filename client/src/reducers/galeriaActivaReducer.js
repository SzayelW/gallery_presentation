import { FETCH_GALERIAS_USER, ELIMINA_GALERIA } from '../actions';

export default (state = null, action) => {
    switch (action.type){
        case FETCH_GALERIAS_USER:
            const galeriaActiva = action.payload.filter(a => a.activa === true);
            return  galeriaActiva[0] ? galeriaActiva[0] : null;
        case ELIMINA_GALERIA: 
            return (state && action.payload._id === state._id) ? null : state;
        default:
            return state;
    }
}