import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';

class GaleriaForm extends Component {
    state = {
        uploading: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({uploading: true});
        axios
            .post('/api/galeria/nuevo', new FormData(this.refs.galeriaForm))
            .then(res => { console.log(res); this.props.history.push("/mis_galerias"); })
            .catch(e => console.log(e));
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

export default GaleriaForm;