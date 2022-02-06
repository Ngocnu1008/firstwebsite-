import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
    .Wrap_banner {
        position: relative;
        p {
            position: absolute;
            top: 47%;
            left: 41%;
            font-size: 40px;
            color: white;
            strong{
                padding: 5px 15px;
                background: #2c2c2c;
                margin-right: 10px;
            }
        }
    }
    .banner{
        width: 98%;
        margin: auto;
    }
    h3{
        margin: 60px 0px; 
        font-weight: normal;
        font-size: 25px;
        margin-left: 2.5%;
    }
    .projects{
        .group_image{
            width: 95%;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .image{
                width: 23%;
                img{
                    width: 100%;
                }
                margin-top: 10px;
            }
        }
    }
    .group_card{
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        .card {
            width: 23%;
            img{
                width: 100%;
            }
            h4{
                font-size: 20px;
                font-weight: normal;
                margin: 20px 0px;
            }
            h5{
                margin-bottom: 10px;
                opacity: 0.5;
                font-size: 16px;
            }
            p{
                font-size: 17px;
                margin-bottom: 12px;
            }
            button{
                width: 100%;
                padding: 10px;
                border: none;
                font-size: 17px;
            }
        }
    }
    .p{
        width: 95%;
        margin: auto;
        margin-bottom: 50px; 
        font-size: 17px;
        font-weight: 500;
    }
    .contact{
        p{
            margin-left: 2.5%;
            margin-bottom: 15px;
        }
        button{
            margin-left: 2.5%;
            text-transform: uppercase;
            padding: 10px 30px;
            margin-top: 10px;
            background: black;
            color: white;
            font-weight: 500;
            font-size: 15px;
            cursor: pointer;
            border-radius: 3px;
            &:hover{
                background-color: orange;
                color: black;
            }
        }
        .image0{
            width: 95%;
            margin: auto;
            margin-top: 40px;
            img{
                width: 100%;
            }
        }
    }
    .group_input{
        width: 100%;
        input{
            width: 95.9%;
            margin: auto;
            padding: 10px 10px;
            font-size: 16px;
            cursor: pointer;
        }
    }
    .copyright{
        margin-top: 5px;
        text-align: center;
        width: 100%;
        height: 80px;
        background: black;
        color: white;
        align-items: center;
        p{
            transform: translateY(120%);
        }
        span{
            border-bottom: 1px solid white;
        }

    }
    

`;

function About(props) {
    useEffect(()=>{
        window.scroll(0,1420);
    })
    return (
        <Wrap>
            <div className="Wrap_banner">
                <div className="banner">
                    <img src="https://www.w3schools.com/w3images/architect.jpg" alt=""/>
                </div>
                <p><strong>BR</strong>Architects</p>
            </div>
            <div className="projects">
                <h3>Projects</h3>
                <div className="group_image">
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house5.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house2.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house3.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house4.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house5.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house4.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house2.jpg" alt=""/>
                    </div>
                    <div className="image">
                        <img src="https://www.w3schools.com/w3images/house3.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="about">
                <h3>About</h3>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="group_card">
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt=""/>
                        <h4>John Doe</h4>
                        <h5>CEO - FROUNDER</h5>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>Contact</button>
                    </div>
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team1.jpg" alt=""/>
                        <h4>Anne Doe</h4>
                        <h5>Architect</h5>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>Contact</button>
                    </div>
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team3.jpg" alt=""/>
                        <h4>Mike Jack</h4>
                        <h5>Singer</h5>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>Contact</button>
                    </div>
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team4.jpg" alt=""/>
                        <h4>John Doe</h4>
                        <h5>CEO - FROUNDER</h5>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>Lets get in touch and talk about your next project</p>
                <div className="group_input">
                    <p><input placeholder="Name"></input></p>
                    <p><input placeholder="Email"></input></p>
                    <p><input placeholder="Subject"></input></p>
                    <p><input placeholder="Comment"></input></p>
                </div>
                <button>send message</button>
                <div className="image0">
                    <img src="https://www.w3schools.com/w3images/map.jpg" alt=""/>
                </div>
            </div>
            <div className="copyright">
                <p>Powered by <span>w3.school</span></p>
            </div>
        </Wrap>
    );
}

export default About;