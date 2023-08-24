import React from 'react';
import Botao from '../Botao/buttonComponent';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    private placeholderTarefaText: string = 'O que voce deseja estudar?'

    render(): React.ReactNode {
        return <form className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>Adicione o novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder={this.placeholderTarefaText} required/>
            </div>
            <div className={style.inputContainer}>
                <label>Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required/>
            </div>
            <Botao text="Adicionar"/>
        </form>
    }
}

export default Formulario;