import React from 'react';
import Item from './ItemComponent';
import style from './Lista.module.scss';
import { Itarefa } from '../../types/Itarefas';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (setTarefas: Itarefa) => void
}

function Lista(props: Props){
    const { tarefas, selecionaTarefa } = props;
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Lista de estudos</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item selecionaTarefa={selecionaTarefa} key={index} {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;