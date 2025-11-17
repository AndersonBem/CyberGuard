
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
import DetectorQrcodes from './pages/DetectorQrcode/DetectorQrCode.jsx'
import DetectorQRfalso from './pages/DetectorQRfalso/DetectorQRfalso.jsx'
import DetectorQRverdadeiro from './pages/DetectorQRverdadeiro/DetectorQRverdadeiro.jsx'
import RelatarGolpe from './pages/RelatarGolpe/RelatarGolpe.jsx'
import DenunciaEnviada from './pages/DenunciaEnviada/DenunciaEnviada.jsx'
import FimQuiz from './pages/FimQuiz/FimQuiz.jsx'
import CentraldeAnalise from './pages/CentraldeAnalises/CentraldeAnalises.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'
import Comunidade from './pages/Comunidade/comunidade.jsx'
import DetectorLink from './pages/DetectorLink/DetectorLink.jsx'
import DetectorLinkfalso from './pages/DetectorLinkfalso/DetectorLinkfalso.jsx'
import DetectorLinkverdadeiro from './pages/DetectorLinkverdadeiro/DetectorLinkverdadeiro.jsx'
import Login from './pages/Login/Login.jsx'
import DetectorBoletos from './pages/DetectorBoletos/DetectorBoletos.jsx'
import DetectorBoletosVerdadeiros from './pages/DetectorBoletosVerdadeiros/DetectorBoletosVerdadeiros.jsx'
import DetectorBoletosFalso from './pages/DetectorBoletosFalso/DetectorBoletosFalso.jsx'

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
              <Route path ='/DetectorQrcode' element={<DetectorQrcodes />} />
              <Route path ='/DetectorQRfalso' element={<DetectorQRfalso />} />
              <Route path ='/DetectorQRverdadeiro' element={<DetectorQRverdadeiro />} />
              <Route path ='/relatarGolpe' element={<RelatarGolpe />} />
              <Route path ='/DenunciaEnviada' element={<DenunciaEnviada />} />
              <Route path ='/FimQuiz' element={<FimQuiz />} />
              <Route path ='/CentraldeAnalises' element={<CentraldeAnalise />}/>
              <Route path ='/Perfil' element={<Perfil />}/>
              <Route path ='/Comunidade' element={<Comunidade />}/>
              <Route path ='/DetectorLink' element={<DetectorLink />}/>       
              <Route path ='/DetectorLinkfalso' element={<DetectorLinkfalso />}/>   
              <Route path ='/DetectorLinkverdadeiro' element={<DetectorLinkverdadeiro/>}/>
              <Route path ='/login' element={<Login />}/>
              <Route path ='/DetectorBoletos' element={<DetectorBoletos />} />
              <Route path ='/DetectorBoletosVerdadeiros' element={<DetectorBoletosVerdadeiros />} />
              <Route path ='/DetectorBoletosFalso' element={<DetectorBoletosFalso />} />                  
            </Routes>

        </DeviceMockup>
      </BrowserRouter>


  )
}

export default AppRoutes
