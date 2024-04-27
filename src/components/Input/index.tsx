// 4. Utwórz komponent Input który zawiera stan "value",
// po wpisaniu w input tekstu powinien zostać wyświetlony podgląd wpisanego tekstu

import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h2>Podgląd co jest w inpucie:</h2>
      <p>{value}</p>
    </div>
  );
};