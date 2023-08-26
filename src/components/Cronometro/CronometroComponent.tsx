import Botao from "../Botao/buttonComponent";
import Relogio from "./Relogio/RelogioComponent";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../commons/utils/date";
import { Itarefa } from "../../types/Itarefas";
import { useEffect, useState } from "react";

interface Props {
    tarefaSelecionada: Itarefa | undefined
}

function Cronometro({tarefaSelecionada}: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(tarefaSelecionada?.tempo){
            setTempo(tempoParaSegundos(tarefaSelecionada.tempo))
        }
    }, [tarefaSelecionada]);
    

    function contagemRegressiva(contador: number = 0): void{
        if(contador > 0){
            setTimeout(() => {
                setTempo(contador - 1);
                return contagemRegressiva(contador - 1);
            }, 1000);
        }
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => contagemRegressiva(tempo)} text="Comecar"/>
        </div>
    )
}

export default Cronometro;