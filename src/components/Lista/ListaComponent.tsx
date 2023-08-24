import React from 'react';
import Item from './ItemComponent';
import style from './Lista.module.scss';
import { useState } from 'react';

function Lista(){
    const [tarefas, setTarefas] = useState([{
        nome: "React",
        tempo: "02:00:00"
    },
    {
        nome: "Typescript",
        tempo: "01:00:00"
    }])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {nome: "Estudo de estados", tempo: "05:00:00"}])
            }}>Lista de estudos</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;