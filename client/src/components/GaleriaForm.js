import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { postNuevaGaleriaUsuario, updateGaleriaUsuario } from '../actions';
import ImageUpload from './ImageUpload';

class GaleriaForm extends Component {
    state = {
        saving: false,
        files: [],
        update: false,
        galeria: {_id:'', nombre:'', descripcion:'', imagenes:[]},
        imagenesEliminadas: []
    };

    addFiles = (files) => {
        this.setState({files: [...this.state.files, ...files]});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({saving: true});
        let form = new FormData(this.refs.galeriaForm);
        this.state.files.forEach(f => form.append('imagenesDZ', f));
        form.append('imagenesEliminadas', JSON.stringify(this.state.imagenesEliminadas));
        if(this.state.update) this.props.updateGaleriaUsuario(form, this.props.history);
        else this.props.postNuevaGaleriaUsuario(form, this.props.history);           
    }
    
    handleEliminar = (e,imagen) => {
        e.preventDefault();
        this.setState((state) => ({imagenesEliminadas: [...state.imagenesEliminadas, imagen]}));
    }

    handleRevertir = (e,imagen) => {
        e.preventDefault();
        this.setState((state) => ({imagenesEliminadas: [...state.imagenesEliminadas.filter(i => i._id !== imagen._id)]}));
    }

    imagenesEdit = (imagenes) => {
        return imagenes.map(img => {
            const eliminado = this.state.imagenesEliminadas.some(i => i._id === img._id);
            return (
                <div key={img._id} className="col s4 m3 l2" >
                    <div className="card">
                        <div className="card-image" style={ {opacity: eliminado ? '0.5' : '1'}} >
                            <img src={img.ruta} style={ {maxWidth:'100%', objectFit: 'scale-down'} } />
                        </div>
                        <div className="card-action">
                            {!eliminado && <button className="waves-effect waves-light btn-small  red darken-2" onClick={(e) => this.handleEliminar(e,img) }>Eliminar</button>}
                            {eliminado && <button className="waves-effect waves-light btn-small" onClick={(e) => this.handleRevertir(e,img) }>Revertir</button>}
                        </div>
                    </div>                
                </div>
            )
        }
        );
    }

    componentDidMount(){
        const update = this.props.location.pathname.startsWith('/mis_galerias/editar/');
        if(update){
            const id = this.props.match.params.id;
            const galeria = this.props.galeriasUsuario.filter(g => id == g._id)[0];
            if(!galeria) return this.props.history.push('/');
            this.setState( {galeria, update: true} );
        }
    }

    handleTextarea = () =>{
        this.setState( (state) => {
            const {galeria} = state;
            galeria.descripcion = this.refs.descripcion.value;
            return {...state, galeria};
        });
    }

    render(){
        const {galeria, update} = this.state;

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
                    <textarea value={galeria.descripcion} onChange={this.handleTextarea} name="descripcion" key="descripcion" ref="descripcion" className="materialize-textarea" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <ImageUpload ref="imagenesDropRef" imagenProps={{name:'imagenesDrop'}} addFiles={this.addFiles}/>
                </div>
                <div className="row">
                    { update && this.imagenesEdit(galeria.imagenes) }
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