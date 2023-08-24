import React from 'react';
import Item from './ItemComponent';
import style from './Lista.module.scss';

function Lista(){
    const tarefas = [{
        nome: "React",
        tempo: "02:00:00"
    },
    {
        nome: "Typescript",
        tempo: "01:00:00"
    }]
    return (
        <aside className={style.listaTarefas}>
            <label>Lista de estudos</label>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;