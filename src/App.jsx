
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeviceMockup from './layout/DeviceMockup.jsx'
import BasePage from './pages/_Starter/BasePage.jsx'
import Aprenda from './pages/Aprenda/Aprenda.jsx'
import VideoAula from './pages/VideoAula/VideoAula.jsx'

function App() {
  return (
    
      <BrowserRouter>
        <DeviceMockup>

            <Routes>
              {/* rotas aqui */}
              <Route path ='/' element={<BasePage />} />
              <Route path ='/aprenda' element={<Aprenda />} />
              <Route path ='/videoaula/:id' element={<VideoAula />} />
            </Routes>

        </DeviceMockup>
      </BrowserRouter>


  )
}

export default App
