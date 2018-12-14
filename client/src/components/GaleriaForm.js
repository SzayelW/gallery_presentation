import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { postNuevaGaleriaUsuario } from '../actions';

class GaleriaForm extends Component {
    state = {
        uploading: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({uploading: true});
        this.props.postNuevaGaleriaUsuario(new FormData(this.refs.galeriaForm), this.props.history);           
    }
    
    componentWillUnmount(){
        this.setState({uploading: false});
    }

    render(){
        return (
            
            <form ref="galeriaForm" className="col s12" onSubmit={this.handleSubmit}>
                {this.state.uploading && <div>guardando...</div>}
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input ref="nombre" type="text" name="nombre" />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea name="descripcion" ref="descripcion" className="materialize-textarea" cols="30" rows="10"></textarea>
                </div>
                <input type="file" name="imagenes" multiple />
                <button type="submit">Guardar</button>
            </form>
        );
    }
}

export default connect(null, {postNuevaGaleriaUsuario})(GaleriaForm);