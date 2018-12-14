import React from 'react';
import {connect} from 'react-redux';
import { login, fetchGaleriasUsuario } from '../actions';

class LoginForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(
            {
                username: this.refs.username.value,
                password: this.refs.password.value
            },
            this.props.history,
            this.props.fetchGaleriasUsuario
            );
    }

    render(){
        return (
            <React.Fragment>
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">                  
                        <div className="col offset-s1 s10">
                            <label>Username</label>
                            <input type="text" ref="username" name="username"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-s1 s10">
                            <label >Password</label>
                            <input type="password" ref="password" name="password"/>
                        </div>
                    </div>
                    <button className="btn right" type="submit">Submit</button>
                </form>
            </ React.Fragment>
        )
    }
}

export default connect(null, { login, fetchGaleriasUsuario } )(LoginForm);