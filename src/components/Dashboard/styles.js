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
    margin-bottom: 30px;
    width: 30%;
    z-index: 3;
    @media only screen and (max-width: 425px) {
        width: 90%;
    }
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

    @media only screen and (max-width: 425px) {
        flex-direction: column;
    }
`;