import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GaleriaMin extends Component {

    miniaturaGaleria = () => {
        const { galeria } = this.props;
        
        return (
            <div className="card small">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator responsive-img" src={galeria.imagenes[0].ruta} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{galeria.nombre}<i className="material-icons right">more_vert</i></span>
                    <label>
                        <input type="checkbox" className="filled-in" checked={galeria.activa} onChange={ (e) => this.props.setGaleriaActiva(e.currentTarget.checked === true, galeria._id) } />
                        <span>Galeria Activa</span>
                    </label>
                    <p><Link to={ `/mis_galerias/${galeria._id}` }>Ver galeria</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{galeria.nombre}<i className="material-icons right">close</i></span>
                    <p>Total de imagenes: {galeria.imagenes.length}</p>
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