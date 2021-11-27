import React from 'react';
import headerImg from '../../assets/6.png';
import '../../styles/font.scss';
import {BouncyDiv} from './styles';
import Question from '../Question/Question';

export default function Questions() {
    return (
        <BouncyDiv>
            <Question />
            <img src={headerImg} />
        </BouncyDiv>
    )
}
