import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import DeviceMockup from "./layout/DeviceMockup.jsx";
import Aprenda from "./pages/Aprenda/Aprenda.jsx";
import VideoAula from "./pages/VideoAula/VideoAula.jsx";
import MeusCertificados from "./pages/MeusCertificados/MeusCertificados.jsx";
import Certificado from "./pages/Certificado/Certificado.jsx";
import Home from "./pages/Home/Home.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";
import QuizPerguntas from "./pages/QuizPerguntas/QuizPerguntas.jsx";
import BemVindoCom from "./pages/BemVindoCom/BemVindoCom.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Alerta from "./pages/Alerta/Alerta.jsx";
import Ranking from "./pages/Ranking/Ranking.jsx";
import FaleConosco from "./pages/FaleConosco/FaleConosco.jsx";
import MissoesDiarias from "./pages/MissoesDiarias/MissoesDiarias.jsx";
import DetectorQrcodes from "./pages/DetectorQrcode/DetectorQrCode.jsx";
import DetectorQRfalso from "./pages/DetectorQRfalso/DetectorQRfalso.jsx";
import DetectorQRverdadeiro from "./pages/DetectorQRverdadeiro/DetectorQRverdadeiro.jsx";
import RelatarGolpe from "./pages/RelatarGolpe/RelatarGolpe.jsx";
import DenunciaEnviada from "./pages/DenunciaEnviada/DenunciaEnviada.jsx";
import FimQuiz from "./pages/FimQuiz/FimQuiz.jsx";
import CentraldeAnalise from "./pages/CentraldeAnalises/CentraldeAnalises.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import Comunidade from "./pages/Comunidade/comunidade.jsx";
import DetectorLink from "./pages/DetectorLink/DetectorLink.jsx";
import DetectorLinkfalso from "./pages/DetectorLinkfalso/DetectorLinkfalso.jsx";
import DetectorLinkverdadeiro from "./pages/DetectorLinkverdadeiro/DetectorLinkverdadeiro.jsx";
import Login from "./pages/Login/Login.jsx";
import DetectorBoletos from "./pages/DetectorBoletos/DetectorBoletos.jsx";
import DetectorBoletosVerdadeiros from "./pages/DetectorBoletosVerdadeiros/DetectorBoletosVerdadeiros.jsx";
import DetectorBoletosFalso from "./pages/DetectorBoletosFalso/DetectorBoletosFalso.jsx";
import NovaPostagem from "./pages/NovaPostagem/NovaPostagem.jsx";
import PageTransition from "./componentes/PageTransition/PageTransition.jsx";
import AlertaDetalhe from "./pages/AlertaDetalhe";

function AnimatedRoutes() {
  const location = useLocation();
  const fromFooter = location.state?.fromFooter === true;

  return (
    <DeviceMockup>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/*"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/aprenda"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Aprenda />
              </PageTransition>
            }
          />
          <Route
            path="/videoaula/:id"
            element={
              <PageTransition fromFooter={fromFooter}>
                <VideoAula />
              </PageTransition>
            }
          />
          <Route
            path="/meuscertificados"
            element={
              <PageTransition fromFooter={fromFooter}>
                <MeusCertificados />
              </PageTransition>
            }
          />
          <Route
            path="/certificado/:id"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Certificado />
              </PageTransition>
            }
          />
          <Route
            path="/quiz"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Quiz />
              </PageTransition>
            }
          />
          <Route
            path="/quizperguntas"
            element={
              <PageTransition fromFooter={fromFooter}>
                <QuizPerguntas />
              </PageTransition>
            }
          />
          <Route
            path="/bemvindocom"
            element={
              <PageTransition fromFooter={fromFooter}>
                <BemVindoCom />
              </PageTransition>
            }
          />
          <Route
            path="/cadastro"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Cadastro />
              </PageTransition>
            }
          />
          <Route
            path="/Alerta"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Alerta />
              </PageTransition>
            }
          />
          <Route
            path="/Ranking"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Ranking />
              </PageTransition>
            }
          />
          <Route
            path="/faleconosco"
            element={
              <PageTransition fromFooter={fromFooter}>
                <FaleConosco />
              </PageTransition>
            }
          />
          <Route
            path="/MissoesDiarias"
            element={
              <PageTransition fromFooter={fromFooter}>
                <MissoesDiarias />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorQrcode"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorQrcodes />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorQRfalso"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorQRfalso />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorQRverdadeiro"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorQRverdadeiro />
              </PageTransition>
            }
          />
          <Route
            path="/relatarGolpe"
            element={
              <PageTransition fromFooter={fromFooter}>
                <RelatarGolpe />
              </PageTransition>
            }
          />
          <Route
            path="/DenunciaEnviada"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DenunciaEnviada />
              </PageTransition>
            }
          />
          <Route
            path="/FimQuiz"
            element={
              <PageTransition fromFooter={fromFooter}>
                <FimQuiz />
              </PageTransition>
            }
          />
          <Route
            path="/CentraldeAnalises"
            element={
              <PageTransition fromFooter={fromFooter}>
                <CentraldeAnalise />
              </PageTransition>
            }
          />
          <Route
            path="/Perfil"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Perfil />
              </PageTransition>
            }
          />
          <Route
            path="/Comunidade"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Comunidade />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorLink"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorLink />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorLinkfalso"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorLinkfalso />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorLinkverdadeiro"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorLinkverdadeiro />
              </PageTransition>
            }
          />
          <Route
            path="/login"
            element={
              <PageTransition fromFooter={fromFooter}>
                <Login />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorBoletos"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorBoletos />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorBoletosVerdadeiros"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorBoletosVerdadeiros />
              </PageTransition>
            }
          />
          <Route
            path="/DetectorBoletosFalso"
            element={
              <PageTransition fromFooter={fromFooter}>
                <DetectorBoletosFalso />
              </PageTransition>
            }
          />
          <Route
            path="/NovaPostagem"
            element={
              <PageTransition fromFooter={fromFooter}>
                <NovaPostagem />
              </PageTransition>
            }
          />
          <Route
            path="/alertas/:id"
            element={
              <PageTransition fromFooter={fromFooter}>
                {<AlertaDetalhe />}
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </DeviceMockup>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default AppRoutes;
