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
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
