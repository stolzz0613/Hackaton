import { useEffect, useState } from 'react';
import headerImg from '../../assets/10.png'
import '../../styles/font.scss';
import {Link, useNavigate} from "react-router-dom";
import {BouncyButton, BouncyDiv, OutDiv} from './styles';
import {useDispatch} from 'react-redux';
import {addGenre} from '../../globalState';
function Header() {
    const navigate = useNavigate();
    const [state, setstate] = useState(false);
    const [genre, setGenre] = useState('mujer');
    const dispatch = useDispatch();

    function delayAndGo(e) {
        e.preventDefault();
        dispatch(addGenre(genre));
        setstate(true);
        setTimeout(() => navigate('/quiz/0'), 2000);
    }
    useEffect(() => {
        console.log(genre)
    }, [genre])
    return (
        <OutDiv state={state}>
            <div className="text">
                <h1>GUIA RAPIDA PARA LA IDENTIFICACIÓN DE VIOLENCIA CONTRA LA MUJER</h1>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value='mujer'>Mujer</option>
                    <option value='hombre'>Hombre</option>
                    <option value='otro'>Otro</option>
                </select>
                <Link to="/quiz" onClick={delayAndGo}>
                    <BouncyButton>
                        <button>INICIA</button>
                    </BouncyButton>
                </Link>
            </div>
            <BouncyDiv>
                <img src={headerImg} />
            </BouncyDiv>
        </OutDiv>
    );
}

export default Header;
