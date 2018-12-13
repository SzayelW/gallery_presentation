import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { fecthUser} from '../actions';

import LoginForm from './LoginForm';
import Home from './Home';
import Galerias from './Galerias';
import GaleriaForm from './GaleriaForm';
import Navbar from './Navbar';

const Usuarios = ()=> <div>Usuarios</div>;

class App extends React.Component{
    
    componentDidMount(){
        this.props.fecthUser();
    }

    render() {
        return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/usuarios" component={Usuarios} />
                    <Route exact path="/mis_galerias/nuevo" component={GaleriaForm} />
                    <Route path="/mis_galerias/:id" component={Galerias} />
                    <Route path="/mis_galerias" component={Galerias} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </ React.Fragment>
        </BrowserRouter>
        )
    }
}

export default connect(null, {fecthUser})(App);
