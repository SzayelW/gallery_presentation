import axios from 'axios';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_GALERIAS_USER = 'FETCH_GALERIAS_USER';
export const NUEVA_GALERIA = 'NUEVA_GALERIA';
export const ELIMINA_GALERIA = 'ELIMINA_GALERIA';
export const EDITA_GALERIA = 'EDITA_GALERIA';

export const fecthUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: user.data});
}

export const login = (datos, history, next) => async dispatch => {
    const user = await axios.post('/api/login', datos);
    if(user){
        history.push("/");
    }
    dispatch({ type: FETCH_USER, payload: user.data});
    next();
}

export const fetchGaleriasUsuario = () => async dispatch => {
    const galerias = await axios.get('/galerias_usuario');
    dispatch({ type: FETCH_GALERIAS_USER , payload: galerias.data});
}

export const postNuevaGaleriaUsuario = (datos, history) => async dispatch => {
    const galeriaNueva = await axios.post('/api/galeria/nuevo', datos);
    history.push('/mis_galerias');
    dispatch({ type: NUEVA_GALERIA , payload: galeriaNueva.data});
}

export const updateGaleriaUsuario = (datos, history) => async dispatch => {
    const galeria = await axios.put('/api/galeria/editar', datos);
    history.push('/mis_galerias');
    dispatch({ type: EDITA_GALERIA , payload: galeria.data});
}

export const setGaleriaActivaUsuario = (galeriaId, activa) => async dispatch => {
    await axios.post('/galerias_usuario/set_activa', {galeriaId, activa: (activa === true) });
    const galerias = await axios.get('/galerias_usuario');
    dispatch({ type: FETCH_GALERIAS_USER , payload: galerias.data});
}

export const eliminarGaleria = (galeriaId, history) => async dispatch => {
    const eliminado = await axios.delete('/galerias_usuario/eliminar', {data: {galeriaId}});
    if(history) history.push('/mis_galerias');
    dispatch({ type: ELIMINA_GALERIA , payload: eliminado.data });
};