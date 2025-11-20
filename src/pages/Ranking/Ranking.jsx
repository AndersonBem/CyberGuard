import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import "./styles.css";
import Rankinglists from "../../componentes/Rankinglist";

export default function Ranking() {
  return (

      <div className="app-shell">
        <Header />
        <div className="app-content">
            <Rankinglists></Rankinglists>
        </div>
        <Footer />
      </div>

  );
}
