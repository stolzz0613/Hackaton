import styled from 'styled-components';

export const Container = styled.div`
    -webkit-text-stroke: 1px black;
    background-color: #FFC1EB;
    color: white;
    font-family: fontTitle;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 5px;
    height: 100vh;
    text-align: center;

    img {
        position: absolute;
        width: 800px;
    }
`;

export const ContainerChart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    z-index: 3;
`;

export const Charts = styled.div`
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
    z-index: 3;
`;