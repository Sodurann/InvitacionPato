import React from "react";
import ConfirmButton from "./ConfirmButton";
import { useSearchParams } from "react-router-dom";
import "../css/invitationcard.css";

const InvitationCard = () => {
  const [searchParams] = useSearchParams();
  const nombreInvitado = searchParams.get("nombre") || "Invitado";
  const saludo = `HOLA, ${nombreInvitado.toUpperCase()}! ESTAS INVITAD@ A LOS 20 DE PATO`;
  return (
    <div className="invitation-bg">

      <div className="invitation-receipt-card">
        <p className="greeting-text">{saludo}</p>

        <div className="detail-section">
          <div className="detail-header">FECHA</div>
          <p className="detail-content">28 NOVIEMBRE 2025</p>
          <br />
        </div>
        <div className="detail-section">
          <div className="detail-header">HORA</div>
          <p className="detail-content">22 A 5 HS</p>
          <br />
        </div>

        <div className="detail-section">
          <div className="detail-header">DIRECCION</div>
          <br />
          <a href="https://maps.app.goo.gl/xtX7GXYDEYptEvzw9" className="detail-content">CASA DE PATO</a>
          <br />
          <br />
        </div>

        <div className="detail-section">
            <br />
          <div className="detail-header">DRESS CODE</div>
          <p className="detail-content">CASUAL SHIRT OR DRESS</p>
          <br />
        </div>

        <div className="confirm-button">
          <ConfirmButton></ConfirmButton>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
