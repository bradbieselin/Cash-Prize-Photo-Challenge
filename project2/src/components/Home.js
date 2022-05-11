import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Welcome = styled.h2`
    padding-top: 1rem;
    font-size: 22px;
    padding-bottom: 1rem;
`

const NavBarUnderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Home = () => {
    return (
        <>
        <div className="block">
            <Welcome>💸Welcome to Cash Prize Photo Challenge💸</Welcome>
            <Welcome>📷Submit Photos📷</Welcome>
            <Welcome>🗳️Get Votes🗳️</Welcome>
            <Welcome>💵Win Cash💵</Welcome>
        </div>
        <NavBarUnderBox>
            <NavLink className="navItem" to="/nature"><strong>Nature Challenge</strong></NavLink>
            <NavLink className="navItem" to="cityscape"><strong>City Scape Challenge</strong></NavLink>
            <NavLink className="navItem"to="/portrait"><strong>Portrait Challenge</strong></NavLink>
        </NavBarUnderBox>
        </>
    );
};

export default Home;