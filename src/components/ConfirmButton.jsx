import { useSearchParams } from "react-router-dom";
import "../css/confirmbutton.css";


let telefono = 5493816155782;

const ConfirmButton = ({ nombre }) => {
  const [searchParams] = useSearchParams();
  const nombreInvitado = searchParams.get("nombre") || "Invitado";
  let mensaje = `
                Hola Pato. Confirmo mi asistencia para la fiesta.

                Mi Nombre: ${nombreInvitado}

                ¡Nos vemos el 26/11!`;
  const handleClick = async () => {
    await fetch("/api/asistentes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <button className="invitation-button" onClick={handleClick}>
      Confirmo asistencia
    </button>
  );
};

export default ConfirmButton;
