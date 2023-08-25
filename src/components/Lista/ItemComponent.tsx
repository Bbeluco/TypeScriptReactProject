import { Itarefa } from '../../types/Itarefas';
import style from './Lista.module.scss';

interface Props extends Itarefa {
    selecionaTarefa: (setTarefas: Itarefa) => void
}

function Item({nome, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    console.log('item atual: ', { nome, tempo, selecionado, completado, id })
    return (<li className={style.item} onClick={() => selecionaTarefa({nome, tempo, selecionado, completado, id})}>
        <h3>{nome}</h3>
        <span>{tempo}</span>
    </li>)
}

export default Item;