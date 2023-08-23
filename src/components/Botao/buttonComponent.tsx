import React from "react";

class Botao extends React.Component {

    render(): React.ReactNode {
        const backgroundColor = "red";
        const styles = {
            backgroundColor
        }
        return <button style={styles}>BOTAO</button>
    }
}

export default Botao;