import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import InvitationCard from "./components/invitationcard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/invitacion" element={<InvitationCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
