import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  if (reduced) return <span className="Typewriter__wrapper">Estudiante de Ingeniería en Sistemas de la Información en UTN</span>;
  return (
    <Typewriter
      options={{
        strings: [
          "Estudiante en Ingeniería en Sistemas de la Información en UTN",
          "Apasionada por la programación",
          "Estudiante de UX/UI",
          "Explorando la inteligencia artificial aplicada"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
