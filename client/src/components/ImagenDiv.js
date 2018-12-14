const minDiv = {
    height: '250px',
    padding: '5px'
}
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}
export default (imagenes) => {
    return imagenes.map( i => (
        <div className="col s6 m4 l2" style={minDiv} >
            <img className="center-align" src={i.ruta} style={imgStyle}/>
        </div>
    ));
};