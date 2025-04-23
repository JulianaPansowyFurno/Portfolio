import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudiante en Ingeniería en Sistemas de la Información en UTN",
          "Apasionada por la programación",
          "Estudiante de UX/Ui"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;