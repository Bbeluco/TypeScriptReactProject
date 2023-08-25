import { Itarefa } from '../../types/Itarefas';
import style from './Lista.module.scss';

interface Props extends Itarefa {
    selecionaTarefa: (setTarefas: Itarefa) => void
}

function Item({nome, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    return (<li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({nome, tempo, selecionado, completado, id})}>
        <h3>{nome}</h3>
        <span>{tempo}</span>
    </li>)
}

export default Item;