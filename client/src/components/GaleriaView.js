import React, { Component } from 'react';
import ImagenDiv from './ImagenDiv';

class GaleriaView extends Component {
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
                { ImagenDiv(galeria.imagenes) }
            </div>
        );
    }
}
export default GaleriaView;