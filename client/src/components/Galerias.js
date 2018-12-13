import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGaleriasUsuario, setGaleriaActivaUsuario } from '../actions';
import GaleriaMin from './GaleriaMin';
import GaleriaView from './GaleriaView';

class Galerias extends Component {
    componentDidMount(){
        this.props.fetchGaleriasUsuario();
    }

    setGaleriaActiva = (activa,galeriaId) => {
        this.props.setGaleriaActivaUsuario(galeriaId, activa);
    }
    
    render(){
        const galeriasRuta = '/mis_galerias';
        const { location, match } = this.props;
        let render = [];
        if(location.pathname === galeriasRuta){
            render = this.props.galeriasUsuario.map(g => <GaleriaMin setGaleriaActiva={this.setGaleriaActiva} galeria={g} key={g.id} />);
        }else if(match.params.id){
            const viewGaleria = this.props.galeriasUsuario.filter( g => g._id === match.params.id)[0];
            render = <GaleriaView galeria={viewGaleria} setGaleriaActiva={this.setGaleriaActiva} />
        }

        return (
            <React.Fragment>
                <div className="row">
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

export default connect(mapStateToProps, { fetchGaleriasUsuario, setGaleriaActivaUsuario})(Galerias);