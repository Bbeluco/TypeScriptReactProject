import React from 'react';
import Cronometro from '../components/Cronometro/CronometroComponent';
import Formulario from '../components/Formulario/formularioComponent';
import Lista from '../components/Lista/ListaComponent';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
