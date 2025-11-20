import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import InvitationPage from "../pages/invitationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/invitacion" element={<InvitationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
