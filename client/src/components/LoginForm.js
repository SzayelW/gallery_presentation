import React from 'react';
import {connect} from 'react-redux';
import { login, fetchGaleriasUsuario } from '../actions';

class LoginForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.refs.username.value.trim();
        const password = this.refs.password.value.trim();
        if(!username || !password) return;
        this.props.login(
            { username, password },
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
                            <input type="text" ref="username" key={111} name="username"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-s1 s10">
                            <label >Password</label>
                            <input type="password" ref="password" key={211} name="password"/>
                        </div>
                    </div>
                    <button className="btn right" type="submit">Submit</button>
                </form>
            </ React.Fragment>
        )
    }
}

export default connect(null, { login, fetchGaleriasUsuario } )(LoginForm);