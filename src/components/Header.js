import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>Expensive app</h1>
            <div>
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            </div>
        </header>
    );
}

export default Header;