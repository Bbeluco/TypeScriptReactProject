import React from 'react';
import Cronometro from '../components/Cronometro/CronometroComponent';
import Formulario from '../components/Formulario/formularioComponent';
import Lista from '../components/Lista/ListaComponent';
import style from './App.module.scss';
import { useState } from 'react';
import { Itarefa } from '../types/Itarefas';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
