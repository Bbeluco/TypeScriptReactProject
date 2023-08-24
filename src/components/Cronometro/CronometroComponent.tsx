import Botao from "../Botao/buttonComponent";
import Relogio from "./Relogio/RelogioComponent";
import style from './Cronometro.module.scss';

function Cronometro(){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao text="Comecar"/>
        </div>
    )
}

export default Cronometro;