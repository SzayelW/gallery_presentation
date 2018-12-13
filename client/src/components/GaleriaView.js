import React, { Component } from 'react';

const minDiv = {
    height: '250px',
    padding: '5px'
}
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}
class GaleriaView extends Component {
    minImagenes = (imagenes) => {
        return imagenes.map( i => (
            <div className="col s6 m4 l2" style={minDiv} >
                <img className="center-align" src={i.ruta} style={imgStyle}/>
            </div>
        ));
    }
    render(){
        const {galeria} = this.props;
        return (
            <div>
                <div className="row">
                    <h1>{galeria.nombre}</h1>
                    <label>
                        <input type="checkbox" className="filled-in" checked={galeria.activa} onChange={ (e) => this.props.setGaleriaActiva(e.currentTarget.checked === true, galeria._id) } />
                        <span>Galeria Activa</span>
                    </label>
                </div>
                <p>{galeria.descripcion}</p>
                { this.minImagenes(galeria.imagenes) }
            </div>
        );
    }
}
export default GaleriaView;