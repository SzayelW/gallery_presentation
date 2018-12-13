import axios from 'axios';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_GALERIAS_USER = 'FETCH_GALERIAS_USER';

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

export const fetchGaleriasUsuario = () => async dispatch => {
    const galerias = await axios.get('/galerias_usuario');
    dispatch({ type: FETCH_GALERIAS_USER , payload: galerias.data});
}

export const setGaleriaActivaUsuario = (galeriaId, activa) => async dispatch => {
    await axios.post('/galerias_usuario/set_activa', {galeriaId, activa: (activa === true) });
    const galerias = await axios.get('/galerias_usuario');
    dispatch({ type: FETCH_GALERIAS_USER , payload: galerias.data});
}