import style from './Lista.module.scss';

function Item(props: { nome: String, tempo: String }) {
    const {nome, tempo} = props;
    return (<li className={style.item}>
        <h3>{nome}</h3>
        <span>{tempo}</span>
    </li>)
}

export default Item;