
import AulasList from "../../componentes/AulaList";
import Footer from "../../componentes/footer";
import Header from "../../componentes/Header";
import DeviceMockup from "../../layout/DeviceMockup";

import "./styles.css"

export default function Aprenda(){
    return (
    <DeviceMockup>
        <div className="app-shell">
            <Header />
            <div className="app-content">
                <section className="aprenda" aria-labelledby="aprenda-title">
                    <h2 id="aprenda-title">Aprenda</h2>
                    <AulasList />
                </section>
            </div>
            <Footer />
        </div>
 
    </DeviceMockup>
    )
}