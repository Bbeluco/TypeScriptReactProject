import React from 'react';
import { Itarefa } from '../../types/Itarefas';
import Botao from '../Botao/buttonComponent';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
  }> {
    private placeholderTarefaText: string = 'O que voce deseja estudar?'
    state = {
        nome: "",
        tempo: "00:00"
    }

    verificarAdicaoLista(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();

        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
            
        ])
    }

    render(): React.ReactNode {
        return (
        <form className={style.novaTarefa} onSubmit={this.verificarAdicaoLista.bind(this)}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>Adicione o novo estudo</label>
                <input type="text" value={this.state.nome} onChange={evento => this.setState({...this.state, nome: evento.target.value})} name="tarefa" id="tarefa" placeholder={this.placeholderTarefaText} required/>
            </div>
            <div className={style.inputContainer}>
                <label>Tempo</label>
                <input type="time" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required/>
            </div>
            <Botao text="Adicionar"/>
        </form>
        )
    }
}

export default Formulario;