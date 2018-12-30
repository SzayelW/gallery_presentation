import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { postNuevaGaleriaUsuario, updateGaleriaUsuario } from '../actions';
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
        if(this.props.match.params.id) this.props.updateGaleriaUsuario(form, this.props.history);
        else this.props.postNuevaGaleriaUsuario(form, this.props.history);           
    }
    
    componentWillUnmount(){
        this.setState({uploading: false});
    }

    render(){
        const update = this.props.location.pathname.startsWith('/mis_galerias/editar/');
        let galeria = {_id:null, nombre:'', descripcion:'', imagenes:[]};
        if(update){
            const id = this.props.match.params.id;
            galeria = this.props.galeriasUsuario.filter(g => id == g._id)[0];
            if(!galeria) return this.props.history.push('/');
        }

        return (
            
            <form ref="galeriaForm" className="col s12" onSubmit={this.handleSubmit}>
                {this.state.uploading && <div key="msj">guardando...</div>}
                <div>
                    <input type="text" name="_id" defaultValue={galeria._id} hidden/>
                </div>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input ref="nombre" key="nombre" type="text" name="nombre" defaultValue={galeria.nombre}/>
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea defaultValue={galeria.descripcion} name="descripcion" key="descripcion" ref="descripcion" className="materialize-textarea" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <ImageUpload ref="imagenesDropRef" imagenProps={{name:'imagenesDrop'}} addFiles={this.addFiles}/>
                </div>
                <button className="waves-effect waves-light btn right" type="submit" style={ {marginTop: '5px'} }>
                    {update ? 'Actualizar': 'Guardar'}
                </button>
            </form>
        );
    }
}

function mapStateToProps({galeriasUsuario}){
    return {galeriasUsuario};
}

export default connect(mapStateToProps, {postNuevaGaleriaUsuario, updateGaleriaUsuario})(GaleriaForm);