import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import "./styles.css";

export default function MissoesDiarias(){
    return (

        <div className="app-shell">
            <Header />
            <div className="app-content">
                
               <div class="container-missoes">
        <h3 class="titulo-principal">Missões Diárias</h3>

        <ul class="lista-dias">
            <li class="item-dia">
                <p class="nome-dia">Segunda-feira</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>

            <li class="item-dia">
                <p class="nome-dia">Terça-feira</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>

            <li class="item-dia">
                <p class="nome-dia">Quarta-feira</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>

            <li class="item-dia">
                <p class="nome-dia">Quinta-feira</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>

            <li class="item-dia">
                <p class="nome-dia">Sexta-feira</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>

            <li class="item-dia">
                <p class="nome-dia">Sábado</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>

            <li class="item-dia">
                <p class="nome-dia">Domingo</p>
                <a href="#" class="link-visualizar">clique para visualizar suas missões</a>
            </li>
        </ul>
      </div>

            </div>
            <Footer />
        </div>
 

    )
}