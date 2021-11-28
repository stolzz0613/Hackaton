import React, { useEffect, useState } from 'react'
import {Button, Card, Header, Questions, Answers} from './styles';
import {useParams, useNavigate} from "react-router-dom";
import Results from '../Results/Results';
import {useDispatch, useSelector} from 'react-redux';
import {
    addPoints,
    backPoints,
    resetPoints,
    addIncidence,
    removeIncidence,
    resetIncidence
} from '../../globalState';
import data from './data.json';

export default function Question() {
    const {id} = useParams();
    const pointsState = useSelector(state => state.points);
    const incidences = useSelector(state => state.incidence);
    const navigate = useNavigate();
    const renderQuestion = data[id];
    const [state, setstate] = useState(false);
    const dispatch = useDispatch();
    let noValue = {
        psicologica: 0,
        fisica: 0,
        fisicaSev: 0,
        sexual: 0
    };

    function delayAndGo(e, q) {
        e.preventDefault();
        dispatch(addIncidence(q.points ? true : false))
        dispatch(addPoints(q.points || noValue));
        setstate(true, setTimeout(() => navigate(`/quiz/${parseInt(id)+1}`), 1000));
    };

    useEffect(() => {
        if (parseInt(id) !== pointsState.length && parseInt(id) <= data.length - 1) {
            dispatch(resetIncidence());
            dispatch(resetPoints());
            navigate('/');
        }
    }, [id]);

    useEffect(() => {
        console.log(incidences)
    }, [incidences])

    useEffect(() => {
        setstate(false);
    }, [id]);

    return (
        <>
            {
                id > 0 && <Button
                    style={{
                        top: '20px',
                        left: '20px',
                        position: 'absolute',
                        zIndex: '100'
                    }}
                    onClick={(e) => {
                        dispatch(backPoints());
                        dispatch(removeIncidence());
                        setstate(true, setTimeout(() => navigate(`/quiz/${parseInt(id)-1}`), 1000));
                    }}
                >ATRAS</Button>
            }
            {
                id <= data.length - 1
                    ? <Card state={state}>
                        <Header>
                            <h1><span>{renderQuestion?.number} </span>de {data?.length}</h1>
                        </Header>
                        <Questions>
                            <h1>{renderQuestion?.title}</h1>
                            <p>{renderQuestion?.description}</p>
                        </Questions>
                        <Answers>
                            {
                                renderQuestion?.answer?.map((q) => {
                                    return <Button key={q?.title} onClick={(e) => delayAndGo(e, q)}>{q?.title}</Button>
                                })
                            }
                        </Answers>
                    </Card>
                    : <Results />
            }
        </>
    )
}
