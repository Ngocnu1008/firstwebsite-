import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const BigWrap = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    box-shadow: 1px 3px 5px 0px rgb(0 0 0 / 10%);
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        width: 100%;
        margin: auto;
    }
`;
const Wrap = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    font-size: 18px;
    a{
        text-decoration: none;
        color: black;
    }
`;
const Left = styled.div`
    display: flex;  
    padding: 8px 16px;
    box-sizing: border-box;
    p{
        margin-right: 10px;
        margin-block-start: 0em;
        margin-block-end: 0em;
    } 
    &:hover{
        background-color: #cac3c3;
        cursor: pointer;
    }
`;
const Right = styled.div`
    ul {
        display: flex;
        li {
            list-style: none;
            padding: 8px 16px;
            &:hover{
                cursor: pointer;
                background-color: #cac3c3;
            }
        } 
    }  
    @media screen and (min-device-width: 768px) and (max-device-width: 1023px) {
        display: flex;
        justify-content: space
    } 
`;
function Navigation(props) {
    return (
        <BigWrap>
            <Wrap>
                <Link to="/">
                    <Left>
                        <p><strong>BR</strong></p>
                        <p>Architects</p>
                    </Left>
                </Link>
                <Right>
                    <ul>
                        <Link to="/Projects"><li>Projects</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/Contact"><li>Contact</li></Link>
                    </ul>
                </Right>
            </Wrap>
        </BigWrap>
    );
}

export default Navigation;