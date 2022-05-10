import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-left: 25rem;
    padding-right: 25rem;
`

const NavBar = () => {
    return (
        <NavContainer>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/nature">Nature Challenge</NavLink>
            <NavLink to="cityscape">City Scape Challenge</NavLink>
            <NavLink to="/portrait">Portrait Challenge</NavLink>
            <NavLink to="/submit">Submit</NavLink>
        </NavContainer>
    );
};

export default NavBar;