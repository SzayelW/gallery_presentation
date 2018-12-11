import react, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Galerias extends Component {
    render(){
        return (
            <div className="fixed-action-btn">
                <Link to="/mis_galerias/nuevo" className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

export default Galerias;