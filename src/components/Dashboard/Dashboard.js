import React, { useLayoutEffect, useState } from 'react';
import {Container, ContainerChart, Charts} from './styles';
import {RadarChart} from './Charts/RadarChart';
import {PieChart} from './Charts/PieChart';
import {Link} from "react-router-dom";
import axios from 'axios';

export default function Dashboard() {
    const [info, setinfo] = useState([]);

    useLayoutEffect(() => {
        axios.get('https://nameless-brushlands-25377.herokuapp.com/api/encuestas')
            .then((response) => setinfo(response.data));
    }, []);

    return (
        <Container>
            <Link to="/">
                <button style={{
                    backgroundColor: 'black',
                    position: 'absolute',
                    right: '40px',
                    top: '20px',
                }}>HOME</button>
            </Link>
            <h1>DASHBOARD</h1>
            <Charts>
                <ContainerChart>
                    <h1>GENERAL</h1>
                    <RadarChart info={info}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>HOMBRE</h1>
                    <RadarChart info={info.filter(i => i.genre === 'hombre')}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>MUJER</h1>
                    <RadarChart info={info.filter(i => i.genre === 'mujer')}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>OTROS</h1>
                    <RadarChart info={info.filter(i => i.genre === 'otro')}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>RESPUESTAS POR GENERO</h1>
                    <PieChart info={info}/>
                </ContainerChart>
            </Charts>
        </Container>
    )
}
