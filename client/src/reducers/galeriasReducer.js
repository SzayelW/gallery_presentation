import { FETCH_GALERIAS_USER, NUEVA_GALERIA, ELIMINA_GALERIA, EDITA_GALERIA } from '../actions';

export default function(state = [], action){
    switch(action.type){
        case FETCH_GALERIAS_USER:
            return action.payload;
         case NUEVA_GALERIA:
            return action.payload ? [...state, action.payload] : state;
        case EDITA_GALERIA:
            return [...state.filter(g => g._id !== action.payload._id), action.payload];
        case ELIMINA_GALERIA:
            return action.payload ? state.filter(g => g._id !== action.payload._id) : state;
         default:
          return state
    }
};