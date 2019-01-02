import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        window.instances = M.Sidenav.init(elems, {draggable: true});
    }

    render(){
        let menu = <li><NavLink to="/login">Iniciar Sesión</NavLink></li>;
        if(this.props.user){
            menu = [
                <li>{ this.props.user.username }</li>,
                <li><NavLink to="/mis_galerias">Mis Galerias</NavLink></li>,
                <li><a href="/api/logout">Salir</a></li>
            ];
        }
        return (          
            <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <NavLink to="/" className="brand-logo">Galeria</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        { menu }
                    </ul>
                </div>                
            </nav>
            <ul id="slide-out" className="sidenav">
                { menu }
            </ul>
            
            </React.Fragment>
        )
    }
}
function mapStateToProps({user}){
    return {user};
}

export default connect(mapStateToProps)(Navbar);