import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavbarSocial from "./Components/NavbarSocial";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Publicaciones from "./Pages/Publicaciones";
import PerfilConfiguracion from "./Pages/PerfilConfiguracion";
import ChatDirecto from './Components/ChatDirecto';
import Empleo from './Pages/Empleo';
import Certificados from './Pages/Certificado';

function App() {
  const [mostrarChat, setMostrarChat] = useState(false);

  const handleChatClick = () => {
    setMostrarChat(prev => !prev);
  };

  return (
    <BrowserRouter>
      <NavbarSocial onChatClick={handleChatClick} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/perfil" element={<PerfilConfiguracion />} />
        <Route path="/empleos" element={<Empleo/>} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {mostrarChat && <ChatDirecto onClose={() => setMostrarChat(false)} />}
    </BrowserRouter>
  );
}

export default App;
