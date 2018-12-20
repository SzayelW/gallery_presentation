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
        window.instanceCarousel = M.Carousel.init(window.carouselElem,{fullWidth: true, duration: 500});
        window.instanceCarousel.set(1);
        this.manejaTiempoCarousel(window.instanceCarousel, this.props.tiempo);
        pantallaCompleta.manejaPantallaCompleta('.carousel');                
    }

    componentWillUnmount(){
        clearInterval(window.automaticCarousel);
    }

    render(){
        return (
            <React.Fragment>
                <div className="carousel carousel-slider">
                    { this.props.imagenes && this.props.imagenes.map((el, idx) => (
                        <div className="carousel-item img_presentacion_container" ><img className="img_presentacion" src={el.ruta} /></div>
                    )) }
                </div>
                <button className="waves-effect waves-light btn right"onClick={this.manejaPantallaCompleta}>
                    Iniciar modo presentación
                </button>
            </React.Fragment>
        );
    }
}