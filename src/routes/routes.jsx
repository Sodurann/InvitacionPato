// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import InvitationCard from './InvitationCard';

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