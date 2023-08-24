import React from 'react';
import Item from './ItemComponent';
import style from './Lista.module.scss';
import { Itarefa } from '../../types/Itarefas';

function Lista(props: { tarefas: Itarefa[] }){
    const { tarefas } = props;
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Lista de estudos</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;