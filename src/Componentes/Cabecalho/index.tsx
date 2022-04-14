import Botao from "../Botao/botao"
import style from "../Cabecalho/style.module.scss";

export default function Cabecalho() {
    return (
        <header className={style.cabecalho}>
            <Botao type="submit"><a className={style.link} href="#">Sobre Min</a></Botao>
            <Botao type="submit"><a className={style.link} href="#">Projetos</a></Botao>
            <Botao type="submit"><a className={style.link} href="#">Contatos</a></Botao>
        </header>
    )
}