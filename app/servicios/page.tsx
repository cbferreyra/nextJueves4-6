//No uses SSR, renderiza en el cliente
//los hooks necesitan client-side rendering
"use client";

import { useState } from "react";

export default function Servicios() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Estás en servicios</h1>
      <p>Por ahora vamos: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Sumar 1 al número
      </button>
    </>
  );
}
