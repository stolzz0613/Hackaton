import styled from 'styled-components';

export const Card = styled.div`
    align-items: center;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    padding: 20px;
    width: 100vh;

    button {
        -webkit-text-stroke: 1px black;
        background-color: #FFC1EB;
        border-radius: 50px;
        border: none;
        background-color: #6DC8C2;
        box-shadow: 0px 15px 20px rgba(106, 212, 195, 0.561);
        color: #fff;
        font-family: fontTitle;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 5px;
        height: 50px;
        position: absolute;;
        top: -20px;
        right: -20px;
        width: 200px;
        &:hover {
            transform: translateY(-7px);
        }
    }

    .thermometer .thermometer__draw-b:after {
        background-color: #fc8693;
    }
    .thermometer .thermometer__bg-color {
        background: linear-gradient(#fc8693, #fc8693, #fc8693);
    }
    &:before {
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    }
    @media only screen and (max-width: 425px) {
        width: 80%;
    }
`;

export const Charts = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 70%;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
    }
`;