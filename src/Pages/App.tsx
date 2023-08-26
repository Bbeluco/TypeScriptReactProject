import React from 'react';
import Cronometro from '../components/Cronometro/CronometroComponent';
import Formulario from '../components/Formulario/formularioComponent';
import Lista from '../components/Lista/ListaComponent';
import style from './App.module.scss';
import { useState } from 'react';
import { Itarefa } from '../types/Itarefas';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefa: Itarefa){
    setSelecionado(tarefa);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefaAtual => ({
      ...tarefaAtual,
      selecionado: tarefaAtual.id === tarefa.id
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefaAtual => {
        if(tarefaAtual.id === selecionado.id){
          return {
            ...tarefaAtual,
            selecionado: false,
            completado: true
          }
        }
        return tarefaAtual;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}/>
      <Cronometro tarefaSelecionada={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
