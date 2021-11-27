import styled, { keyframes } from 'styled-components';
import {fadeInLeft} from 'react-animations';
const InLeft = keyframes`${fadeInLeft}`;

export const BouncyDiv = styled.div`
    -webkit-text-stroke: 1px black;
    align-items: center;
    animation: 2s ${InLeft};
    color: white;
    display: flex;
    font-family: fontTitle;
    justify-content: center;
    height: 100vh;
    img {
        left: 0;
        position: absolute;
        width: 1000px;
        z-index: -2;
    }
`;