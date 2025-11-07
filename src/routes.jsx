
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeviceMockup from './layout/DeviceMockup.jsx'
import Aprenda from './pages/Aprenda/Aprenda.jsx'
import VideoAula from './pages/VideoAula/VideoAula.jsx'
import MeusCertificados from './pages/MeusCertificados/MeusCertificados.jsx'
import Certificado from './pages/Certificado/Certificado.jsx'
import Home from './pages/Home/Home.jsx'
import Quiz from './pages/Quiz/Quiz.jsx'
import QuizPerguntas from './pages/QuizPerguntas/QuizPerguntas.jsx'
import BemVindoCom from './pages/BemVindoCom/BemVindoCom.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Alerta from './pages/Alerta/Alerta.jsx'
import Ranking from './pages/Ranking/Ranking.jsx'
import FaleConosco from './pages/FaleConosco/FaleConosco.jsx'
import MissoesDiarias from './pages/MissoesDiarias/MissoesDiarias.jsx'

function AppRoutes() {
  return (
    
      <BrowserRouter>
        <DeviceMockup>

            <Routes>
              {/* rotas aqui */}
              <Route path ='/' element={<Home />} />
              <Route path ='/*' element={<Home />} />
              <Route path ='/aprenda' element={<Aprenda />} />
              <Route path ='/videoaula/:id' element={<VideoAula />} />
              <Route path ='/meuscertificados' element={<MeusCertificados />} />
              <Route path ='/certificado/:id' element={<Certificado />} />
              <Route path ='/quiz' element={<Quiz />} />
              <Route path ='/quizperguntas' element={<QuizPerguntas />} />
              <Route path = '/bemvindocom' element={<BemVindoCom />} />
              <Route path ='/cadastro' element={<Cadastro />} />
              <Route path ='/Alerta' element={<Alerta />} />
              <Route path ='/Ranking' element={<Ranking />} />
              <Route path ='/faleconosco' element={<FaleConosco />} />
              <Route path ='/MissoesDiarias' element={<MissoesDiarias />} />

            </Routes>

        </DeviceMockup>
      </BrowserRouter>


  )
}

export default AppRoutes
