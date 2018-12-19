import React,{ Component } from 'react';
const minDiv = {
    height: '250px',
    padding: '5px'
}
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}
export default class ImagenDiv extends Component{
    componentDidMount(){
        window.i_divs = document.querySelectorAll('.materialboxed');
        window.instance_i_divs = M.Materialbox.init(window.i_divs);        
    }
    
    render(){
        return this.props.imagenes.map( i => (
            <div className="col s6 m4 l2" style={minDiv} >
                <img className="center-align materialboxed" src={i.ruta} style={imgStyle}/>
            </div>
        ));
    }
};