import React, {Component} from 'react';
import  * as pantallaCompleta  from '../utils/PantallaCompleta';

export default class Carousel extends Component{

    componentDidMount(){
        window.carouselElem = document.querySelector('.carousel');
        window.instanceCarousel = M.Carousel.init(window.carouselElem,{duration: 500});
        pantallaCompleta.initEvents(this.salirPantallaCompleta);
        this.manejaTiempoCarousel(window.instanceCarousel, this.props.tiempo);
    }

    salirPantallaCompleta = () =>{
        this.destruyeCarousel(window.instanceCarousel);
        window.carouselElem.style = '';
        window.instanceCarousel = M.Carousel.init(window.carouselElem,{duration: 500});
        this.manejaTiempoCarousel(window.instanceCarousel, this.props.tiempo);
    }

    manejaTiempoCarousel = (instance, tiempo = 5000) => {
        window.automaticCarousel = setInterval(()=>{
            instance.next();
        }, tiempo);
    }

    destruyeCarousel = (instance) =>{
        instance.destroy();
        clearInterval(window.automaticCarousel);
    }

    manejaPantallaCompleta = () =>{
        this.destruyeCarousel(window.instanceCarousel);
        pantallaCompleta.manejaPantallaCompleta('.carousel');
        window.instanceCarousel = M.Carousel.init(window.carouselElem,{fullWidth: true, duration: 500});
        this.manejaTiempoCarousel(window.instanceCarousel, this.props.tiempo);
    }

    componentWillUnmount(){
        clearInterval(window.automaticCarousel);
    }

    render(){
        return (
            <React.Fragment>
            <button onClick={this.manejaPantallaCompleta}>
                Iniciar modo presentación
            </button>
            <div className="carousel carousel-slider">
                { this.props.imagenes && this.props.imagenes.map((el, idx) => (
                    <a className="carousel-item" href={'#'+idx} ><img src={el.ruta} /></a>
                )) }
            </div>
            </React.Fragment>
        );
    }
}