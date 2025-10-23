
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeviceMockup from './layout/DeviceMockup.jsx'
import BasePage from './pages/_Starter/BasePage.jsx'

function App() {
  return (
    
      <BrowserRouter>
        <DeviceMockup>

            <Routes>
              {/* rotas aqui */}
              <Route path ='/' element={<BasePage />} />
            </Routes>

        </DeviceMockup>
      </BrowserRouter>


  )
}

export default App
