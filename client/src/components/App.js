import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { fecthUser} from '../actions';

const Login = ()=> <div>Login</div>;
const Home = ()=> <div>Home</div>;
const Galerias = ()=> <div>Galerias</div>;
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
                <Route path="/galerias" component={Galerias} />
                <Route path="/" component={Home} />
            </Switch>
            </ React.Fragment>
        </BrowserRouter>
        )
    }
}

export default connect(null, {fecthUser})(App);

