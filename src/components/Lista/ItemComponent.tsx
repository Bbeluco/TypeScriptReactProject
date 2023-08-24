import { Itarefa } from '../../types/Itarefas';
import style from './Lista.module.scss';

function Item({nome, tempo, selecionado, completado, id}: Itarefa) {
    console.log('item atual: ', { nome, tempo, selecionado, completado, id })
    return (<li className={style.item}>
        <h3>{nome}</h3>
        <span>{tempo}</span>
    </li>)
}

export default Item;