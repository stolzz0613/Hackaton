import { useState } from 'react';
import headerImg from '../../assets/10.png'
import '../../styles/font.scss';
import {Link, useNavigate} from "react-router-dom";
import {BouncyButton, BouncyDiv, OutDiv} from './styles';

function Header() {
    const navigate = useNavigate();
    const [state, setstate] = useState(false);

    function delayAndGo(e) {
        e.preventDefault();
        setTimeout(() => navigate("/questions"), 2000);
    }

    return (
        <OutDiv state={state}>
            <div className="text">
                <h1>GUIA RAPIDA PARA LA IDENTIFICACIÓN DE VIOLENCIA CONTRA LA MUJER</h1>
                <Link to="/quetions" onClick={delayAndGo}>
                    <BouncyButton>
                        <button onClick={() => setstate(true)}>INICIA</button>
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
