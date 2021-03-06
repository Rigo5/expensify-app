import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class ExpenseLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange = (e) => {
        const value = e.target.value;
        
        this.setState(() => ({
            username : value
        }))
    }

    onPasswordChange = (e) => {
        const value = e.target.value;
        
        this.setState(() =>( {
            password : value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.startLogin();
    }

    render() {
        return (<div>
            <p>Logga per accedere all'applicazione</p>
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.onUsernameChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />
                <button>Login</button>
            </form>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(ExpenseLogin);