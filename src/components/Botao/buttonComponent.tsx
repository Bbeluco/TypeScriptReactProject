import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{ text: String, type?: "button" | "submit" | "reset" | undefined }> {
    render(): React.ReactNode {
        const { type = "button" } = this.props;
        return <button type={this.props.type} className={style.botao}>{this.props.text}</button>
    }
}

export default Botao;