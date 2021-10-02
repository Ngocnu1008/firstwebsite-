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
`;
const Wrap = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    font-size: 18px;
`;
const Left = styled.div`
    display: flex;  
    padding: 8px 16px; 
    p{
        margin-right: 10px;
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
    a{
        text-decoration: none;
        color: black;
    }   
`;
function Navigation(props) {
    return (
        <BigWrap>
            <Wrap>
                <Left>
                    <p><strong>BR</strong></p>
                    <p>Architects</p>
                </Left>
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