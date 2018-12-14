import { FETCH_GALERIAS_USER, NUEVA_GALERIA } from '../actions';

export default function(state = [], action){
    switch(action.type){
        case FETCH_GALERIAS_USER:
            return action.payload;
         case NUEVA_GALERIA:
            return action.payload ? [...state, action.payload] : state;
         default:
          return state
    }
};