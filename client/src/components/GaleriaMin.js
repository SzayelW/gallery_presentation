import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GaleriaMin extends Component {

    miniaturaGaleria = () => {
        const { galeria } = this.props;
        
        return (
            <div className="card small sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator responsive-img" src={galeria.imagenes[0].ruta} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{galeria.nombre}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{galeria.nombre}<i className="material-icons right">close</i></span>
                    <p>Total de imagenes: {galeria.imagenes.length}</p>
                </div>
                <div className="card-action">
                    <div>
                        <label>
                            <input type="checkbox" className="filled-in" checked={galeria.activa} onChange={ (e) => this.props.setGaleriaActivaUsuario(galeria._id, e.currentTarget.checked === true) } />
                            <span>Galeria Activa</span>
                        </label>
                    </div>
                    <div>
                        <Link to={ `/mis_galerias/${galeria._id}` }>Ver galeria</Link>
                        <button className="btn waves-effect waves-light red  btn-small" onClick={ () => this.props.eliminarGaleria(galeria._id)}><i className="large material-icons">delete</i></button>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div className="col s6 m4 l2">
                { this.miniaturaGaleria() }
            </div>    
        );
    }
}
export default  GaleriaMin;