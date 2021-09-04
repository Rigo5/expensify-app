import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ logout }) => {
    return (
        <header>
            <h1>Expensive app</h1>
            <div>
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            </div>
            <button onClick={logout}>Logout</button>
        </header>
    );
}


const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);