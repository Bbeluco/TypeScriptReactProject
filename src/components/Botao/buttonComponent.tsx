import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{ text: String }> {

    render(): React.ReactNode {
        return <button className={style.botao}>{this.props.text}</button>
    }
}

export default Botao;