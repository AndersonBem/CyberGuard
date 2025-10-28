
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeviceMockup from './layout/DeviceMockup.jsx'
import Aprenda from './pages/Aprenda/Aprenda.jsx'
import VideoAula from './pages/VideoAula/VideoAula.jsx'
import MeusCertificados from './pages/MeusCertificados/MeusCertificados.jsx'
import Certificado from './pages/Certificado/Certificado.jsx'
import Home from './pages/Home/Home.jsx'

function AppRoutes() {
  return (
    
      <BrowserRouter>
        <DeviceMockup>

            <Routes>
              {/* rotas aqui */}
              <Route path ='/' element={<Home />} />
              <Route path ='/aprenda' element={<Aprenda />} />
              <Route path ='/videoaula/:id' element={<VideoAula />} />
              <Route path ='/meuscertificados' element={<MeusCertificados />} />
              <Route path ='/certificado/:id' element={<Certificado />} />
            </Routes>

        </DeviceMockup>
      </BrowserRouter>


  )
}

export default AppRoutes
