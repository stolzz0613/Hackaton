import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Container, ContainerChart, Charts} from './styles';
import {RadarChart} from './Charts/RadarChart';
import picture from '../../assets/9.png';
import axios from 'axios';

export default function Dashboard() {
    const [info, setinfo] = useState([]);

    useLayoutEffect(() => {
        axios.get('https://nameless-brushlands-25377.herokuapp.com/api/encuestas')
            .then((response) => setinfo(response.data));
    }, []);
    useEffect(() => {
        console.log(info)
    }, [info])
    return (
        <Container>
            <h1>DASHBOARD</h1>
            <Charts>
                <ContainerChart>
                    <h1>GENERAL</h1>
                    <RadarChart info={info}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>HOMBRE</h1>
                    <RadarChart info={info}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>MUJER</h1>
                    <RadarChart info={info}/>
                </ContainerChart>
                <ContainerChart>
                    <h1>OTROS</h1>
                    <RadarChart info={info}/>
                </ContainerChart>
            </Charts>
        </Container>
    )
}
