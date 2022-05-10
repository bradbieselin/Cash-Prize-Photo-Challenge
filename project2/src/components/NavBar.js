import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/nature">Nature Challenge</NavLink>
            <NavLink to="cityscape">City Scape Challenge</NavLink>
            <NavLink to="/portrait">Portrait Challenge</NavLink>
            <NavLink to="/submit">Submit</NavLink>
        </nav>
    );
};

export default NavBar;