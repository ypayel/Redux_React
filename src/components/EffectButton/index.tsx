// 7. Utwórz komponent EffectButton który zawiera swój stan,
// po wcisnięciu przycisk powinien stan zwiekszyć się o 1 oraz powinno wyswietlac po kazdej zmianie stanu log w konsoli

import { useState } from "react";

export const EffectButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log("zwiększono o 1 po kliknieciu");
  };

  return (
    <>
      <button onClick={handleClick}>Klik raz</button>
      <p>Klikniecia: {count}</p>
    </>
  );
};