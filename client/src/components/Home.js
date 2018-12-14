import React, {Component} from 'react';
import { connect } from 'react-redux';
import ImagenDiv from './ImagenDiv';

class Home extends Component {

    render(){
        const { galeriaActiva} = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <h1>Galeria: {galeriaActiva ? galeriaActiva.nombre : 'Sin galeria Activa' }</h1>
                    <p> {galeriaActiva ? galeriaActiva.descripcion : '' }</p>
                </div>
                <div className="row">
                    { (galeriaActiva && galeriaActiva.imagenes) && ImagenDiv(galeriaActiva.imagenes) }
                </div>                
            </ React.Fragment>
        );
    }
}

function mapStateToProps({galeriaActiva}){
    return { galeriaActiva };
}

export default connect(mapStateToProps)(Home);