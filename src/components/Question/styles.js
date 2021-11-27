import styled, { keyframes } from 'styled-components';
import {fadeInLeft} from 'react-animations';

export const InLeft = keyframes`${fadeInLeft}`;

export const Card = styled.div`
    align-items: center;
    animation: 2s ${InLeft};
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    padding: 20px;
    width: 50%;
    &:before {
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    }
`;

export const Header = styled.div`
    margin-right: auto;
    margin-left: 10px;
    span {
        color: #6DC8C2;
        font-size: 80px;
    }
`;

export const Questions = styled.div`
    font-size: 25px;
    margin-bottom: 50px;
    text-align: center;
    width: 80%;
    p {
        color: #6DC8C2;
    }
`;

export const Answers = styled.div`
    margin-bottom: 50px;
`;

export const Button = styled.button`
    -webkit-text-stroke: 1px black;
    background-color: #FFC1EB;
    border-radius: 50px;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    color: white;
    font-family: fontTitle;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 5px;
    height: 50px;
    width: 200px;
    &:hover {
        background-color: #6DC8C2;
        box-shadow: 0px 15px 20px rgba(106, 212, 195, 0.561);
        color: #fff;
        transform: translateY(-7px);
    }
`;