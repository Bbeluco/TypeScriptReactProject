import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{ 
    text: String, 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
    }> {
    render(): React.ReactNode {
        const { text, type = "button", onClick } = this.props;
        return <button onClick={onClick} type={type} className={style.botao}>{text}</button>
    }
}

export default Botao;