import Botao from "../../Componentes/Botao/botao";
import FotoPerfil from "../../assets/FotoPerfil.png"
import style from "./style.module.scss";
import Cabecalho from "../../Componentes/Cabecalho";
import Rodape from "../../Componentes/Rodape";



export default function PaginaInicial() {
    return (
        <>
            <Cabecalho/>            
            <main>
                <img src={FotoPerfil} alt="Foto Perfil" className={style.fotoPerfil} />
                <div className={style.sobreMin}>
                    <h2 className={style.titulo}>Olá, meu nome é Talles Crhistian Arriel</h2>
                    <p className={style.paragrafo}>Sou Desenvolvedor <em>Front-End</em> com experiência em HTML, CSS, JavaScript, UI, SQL, Git/GitHub.
                        Técnico em informática e manutenção de hardware. Possuo grande experiência em atendimento ao cliente e funções administrativa (fluxo de caixa e controle).
                        Atualmente atuo como Cabo do Exército brasileiro, exercendo funções de treinamento em campo, liderança, direção de veiculos pesados, com experiência em soluções de problemas sobre pressão. </p>
                </div>
                
            </main>
            <Rodape/>
            </>
    )
}