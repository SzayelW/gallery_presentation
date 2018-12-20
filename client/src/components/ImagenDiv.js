import React,{ Component } from 'react';
import '../assets/css/ImagenDiv.css';

export default class ImagenDiv extends Component{
    componentDidMount(){
        window.i_divs = document.querySelectorAll('.materialboxed');
        window.instance_i_divs = M.Materialbox.init(window.i_divs);        
    }
    
    render(){
        return this.props.imagenes.map( (i, idx) => (
            <div className="col s6 m4 l2 min_image_container" key={'img_'+idx}>
                <img className="center-align materialboxed" src={i.ruta}/>
            </div>
        ));
    }
};