import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart({info}) {
    const summary = {
        fisica: 0,
        fisicaSev: 0,
        psicologica: 0,
        sexual: 0,
    }
    info.map(i => {
        summary['fisica'] = summary['fisica'] + i['fisica']
        summary['fisicaSev'] = summary['fisicaSev'] + i['fifisicaSevsica']
        summary['psicologica'] = summary['psicologica'] + i['psicologica']
        summary['sexual'] = summary['sexual'] + i['sexual']
    });

    const data = {
        labels: ['Fisica', 'Fisica Severa', 'Psicologica', 'Sexual'],
        datasets: [
            {
                label: 'Tipo de violencia',
                data: [summary.fisica, summary.fisicaSev, summary.psicologica, summary.sexual],
                backgroundColor: '#6DC8C2',
                borderColor: '#6DC8C2',
                borderWidth: 3,
            }
        ],
    };
    const options = {
        scales: {
            r: {
                pointLabels: {
                    color: 'black',
                },
            }
        }
    }
    return <Radar data={data} options={options}/>;
}
