import {bounceInDown, bounceInLeft, fadeOutRight} from 'react-animations';
import styled, { keyframes } from 'styled-components';

const InDown = keyframes`${bounceInDown}`;
const InLeft = keyframes`${bounceInLeft}`;
const FadeOut = keyframes`${fadeOutRight}`;

export const BouncyDiv = styled.div`
    animation: 3s ${InDown};
`;

export const BouncyButton = styled.div`
    align-self: center;
    animation: 3s ${InLeft};
`;

export const OutDiv = styled.div`
    align-items: center;
    animation: 3s ${prop => prop.state && FadeOut};
    display: flex;
    color: white;
    font-family: fontTitle;
    font-weight: bold;
    height: 100vh;
    justify-content: space-evenly;

    .text {
        -webkit-text-stroke: 1px black;
        display: flex;
        flex-direction: column;
        letter-spacing: 5px;
        font-size: 30px;
        width: 500px;
    }

    img {
        height: 600px;
        width: 600px;
    }

    button {
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
    }
`;