let mensaje = "Hola, quiero confirmar mi asistencia al evento.";

const ConfirmButton = ({ nombre }) => {
  const handleClick = async () => {
    await fetch("/api/asistentes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre }),
    });

    window.open(
      `https://wa.me/${import.meta.env.VITE_TELEFONO}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <button onClick={handleClick}>
      Confirmar asistencia
    </button>
  );
};

export default ConfirmButton;
