import React from 'react';
import {Card, Charts} from './styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../../globalState';
import Thermometer from 'react-thermometer-component'

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Results() {
    const pointsState = useSelector(state => state.points);
    const incidences = useSelector(state => state.incidence);
    const form = useSelector(state => state.data);
    const indidencesNumber = incidences.filter(i => i === true).length;
    const dispatch = useDispatch();

    let summary = {
        psicologica: 0,
        fisica: 0,
        fisicaSev: 0,
        sexual: 0
    };

    pointsState.map(p => {
        summary['psicologica'] = summary['psicologica'] + p.psicologica
        summary['fisica'] = summary['fisica'] + p.fisica
        summary['fisicaSev'] = summary['fisicaSev'] + p.fisicaSev
        summary['sexual'] = summary['sexual'] + p.sexual
    });

    const data = {
        labels: [
            'Psicologica',
            'Fisica',
            'Fisica Severa',
            'Sexual'
        ],
        datasets: [{
            label: 'Resultados individuales',
            data: [
                summary.psicologica,
                summary.fisica,
                summary.fisicaSev,
                summary.sexual
            ],
            backgroundColor: [
                  '#C7B8F8',
                  '#FFBB45',
                  '#6DC8C2',
                  '#FC8693'
            ],
            hoverOffset: 4
        }]
    };

    const submitInfo = () => {
        dispatch(addData(summary));
        console.log(form);
    }

    return (
        <Card>
            <h1>TUS RESULTADOS</h1>
            <button onClick={() => submitInfo()}>Enviar respuestas</button>
            <Charts>
                <Doughnut data={data}/>
                <Thermometer
                    theme="light"
                    value={indidencesNumber}
                    max="10"
                    steps="5"
                    format=""
                    size="large"
                    height="300"
                />
            </Charts>
        </Card>
    )
}
