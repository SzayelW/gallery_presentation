import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

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
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Galeria</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        { menu }
                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps({user}){
    return {user};
}

export default connect(mapStateToProps)(Navbar);