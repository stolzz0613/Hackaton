import React, {useState} from 'react'
import {Button, Card, Header, Questions, Answers} from './styles';
import data from './data.json';

export default function Question() {
    const [activeQuestion, setactiveQuestion] = useState(0);
    const renderQuestion = data[activeQuestion];
    return (
        <>
            <Button
                style={{
                    top: '20px',
                    left: '20px',
                    position: 'absolute',
                    zIndex: '100'
                }}
                onClick={() => setactiveQuestion(0)}
            >ATRAS</Button>
            {
                <Card>
                    <Header>
                        <h1><span>{renderQuestion.number} </span>de {data?.length}</h1>
                    </Header>
                    <Questions>
                        <h1>{renderQuestion?.title}</h1>
                        <p>{renderQuestion?.description}</p>
                    </Questions>
                    <Answers>
                        {
                            renderQuestion?.answer?.map((q) => {
                                return <Button onClick={() => setactiveQuestion(q.to)}>{q.title}</Button>
                            })
                        }
                    </Answers>
                </Card>
            }
        </>
    )
}
