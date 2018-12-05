import axios from 'axios';
export const FETCH_USER = 'FETCH_USER';

export const fecthUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: user.data});
}

export const login = (datos, history) => async dispatch => {
    const user = await axios.post('/api/login', datos);
    if(user){
        history.push("/");
    }
    dispatch({ type: FETCH_USER, payload: user.data});
}