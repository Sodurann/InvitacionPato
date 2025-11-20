import React, { useState } from 'react'; // ¡Importar useState!
import { useNavigate } from 'react-router-dom';
import '../css/welcomePage.css'; 

const WelcomePage = () => {
  const [guestName, setGuestName] = useState('');
  const navigate = useNavigate();

  const handleOpenInvitation = (e) => {
    e.preventDefault(); 
    
    if (guestName.trim() === '') {
      alert('¡Por favor, ingresa tu nombre!');
      return;
    }

    navigate(`/invitacion?nombre=${encodeURIComponent(guestName.trim())}`);
  };

  return (
    <div className="welcome-container">
      <h1>¡Tenemos algo para ti!</h1>
      <p>Ingresa tu nombre para abrir los detalles de la fiesta.</p>
      
      {/* 3. El Formulario */}
      <form onSubmit={handleOpenInvitation}>
          <input
            type="text"
            placeholder="Tu Nombre"
            value={guestName}
            // 4. Actualiza el estado con cada cambio
            onChange={(e) => setGuestName(e.target.value)}
            className="name-input"
            required
          />
          <button 
            type="submit" // Usar type="submit" para que funcione con la tecla Enter
            className="open-button" 
          >
            Abrir Invitación 💌
          </button>
      </form>
    </div>
  );
};

export default WelcomePage;