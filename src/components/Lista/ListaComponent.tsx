function Lista(){
    const tarefas = [{
        nome: "React",
        tempo: "02:00:00"
    },
    {
        nome: "Typescript",
        tempo: "01:00:00"
    }]
    return (
        <aside>
            <label>Lista de estudos</label>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.nome}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;