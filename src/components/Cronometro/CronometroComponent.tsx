import Botao from "../Botao/buttonComponent";
import Relogio from "./Relogio/RelogioComponent";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../commons/utils/date";
import { Itarefa } from "../../types/Itarefas";
import { useEffect, useState } from "react";

interface Props {
    tarefaSelecionada: Itarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({tarefaSelecionada, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(tarefaSelecionada?.tempo){
            setTempo(tempoParaSegundos(tarefaSelecionada.tempo))
        }
    }, [tarefaSelecionada]);
    

    function contagemRegressiva(contador: number = 0): void{
            setTimeout(() => {
                if(contador > 0){
                    setTempo(contador - 1);
                    return contagemRegressiva(contador - 1);
                }
                finalizarTarefa();
            }, 1000);
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