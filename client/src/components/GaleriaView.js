import React, { Component } from 'react';
import ImagenDiv from './ImagenDiv';

class GaleriaView extends Component {
    render(){
        const {galeria} = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <h1>{galeria.nombre}</h1>
                    <label>
                        <input type="checkbox" className="filled-in" checked={galeria.activa} onChange={ (e) => this.props.setGaleriaActivaUsuario(galeria._id, e.currentTarget.checked === true) } />
                        <span>Galeria Activa</span>
                    </label>
                    <button className="btn waves-effect waves-light red right" onClick={ () => this.props.eliminarGaleria(galeria._id, this.props.history)}><i className="large material-icons">delete</i></button>
                </div>
                <p>{galeria.descripcion}</p>
                <ImagenDiv imagenes={galeria.imagenes} />
            </React.Fragment>
        );
    }
}
export default GaleriaView;