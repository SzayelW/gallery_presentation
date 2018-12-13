import { FETCH_GALERIAS_USER } from '../actions';

export default function(state = [], action){
    switch(action.type){
        case FETCH_GALERIAS_USER:
         return action.payload;
         default:
          return state
    }
};