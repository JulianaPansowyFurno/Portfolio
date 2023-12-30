import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudiante en Informatica ORT",
          "Experta en movile",
          "Estudiante de UX/Ui",
          "proximamente ingeniera en Sistemas en UTN",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;