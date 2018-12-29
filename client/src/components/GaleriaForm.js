import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { postNuevaGaleriaUsuario } from '../actions';
import ImageUpload from './ImageUpload';

class GaleriaForm extends Component {
    state = {
        uploading: false,
        files: []
    };

    addFiles = (files) => {
        this.setState({files: [...this.state.files, ...files]});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({uploading: true});
        let form = new FormData(this.refs.galeriaForm);
        this.state.files.forEach(f => form.append('imagenesDZ', f));
        this.props.postNuevaGaleriaUsuario(form, this.props.history);           
    }
    
    componentWillUnmount(){
        this.setState({uploading: false});
    }

    render(){
        return (
            
            <form ref="galeriaForm" className="col s12" onSubmit={this.handleSubmit}>
                {this.state.uploading && <div key="msj">guardando...</div>}
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input ref="nombre" key="nombre" type="text" name="nombre" />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea name="descripcion" key="descripcion" ref="descripcion" className="materialize-textarea" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <ImageUpload ref="imagenesDropRef" imagenProps={{name:'imagenesDrop'}} addFiles={this.addFiles}/>
                </div>
                <button className="waves-effect waves-light btn right" type="submit" style={ {marginTop: '5px'} }>Guardar</button>
            </form>
        );
    }
}

export default connect(null, {postNuevaGaleriaUsuario})(GaleriaForm);