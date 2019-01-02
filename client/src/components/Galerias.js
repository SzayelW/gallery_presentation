import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGaleriasUsuario, setGaleriaActivaUsuario, eliminarGaleria } from '../actions';
import GaleriaCard from './GaleriaCard';
import GaleriaView from './GaleriaView';

class Galerias extends Component {

    render(){
        const galeriasRuta = '/mis_galerias';
        const { location, match } = this.props;
        let render = [];
        render = this.props.galeriasUsuario.map(g => <GaleriaCard {...this.props} galeria={g} key={g._id} />);
            
        if(match.params.id){
            const viewGaleria = this.props.galeriasUsuario.filter( g => g._id === match.params.id)[0];
            render = viewGaleria ? <GaleriaView {...this.props } galeria={viewGaleria} key="galeriaView"/> : render;
        }

        return (
            <React.Fragment>
                <div className="row">
                    {(this.props.galeriasUsuario.length === 0) && <h3>Sin galerias creadas</h3>}
                    {render}
                </div>
                { (location.pathname === galeriasRuta) &&             
                <div className="fixed-action-btn">
                    <Link to="/mis_galerias/nuevo" className="btn-floating btn-large waves-effect waves-light red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps({galeriasUsuario}){
    return {galeriasUsuario};
}

export default connect(mapStateToProps, { fetchGaleriasUsuario, setGaleriaActivaUsuario, eliminarGaleria})(Galerias);