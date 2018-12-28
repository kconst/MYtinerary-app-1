import React from 'react';
import User from './User';
import Menu from './Menu';
import styled from "styled-components";

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
`;


const Header = () => {
    return ( 
        <HeaderWrapper>
            <User />
            <Menu />
        </HeaderWrapper>
    )
}

export default Header


