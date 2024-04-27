// 5. Utwórz komponent Form który zawiera input oraz button.
// Po wpisaniu w input tekstu powinien zostać wyświetlony podgląd wpisanego tekstu.
// Po kliknięciu w button powinien wyskakować alert z wpisanym w input tekstem.

import { ChangeEvent, FormEvent, useState } from "react";

export const Form = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nasza wartosc wpisana w formularz: ${firstName}`);
  };

  return (
    <div>
      <h2>Form oraz podgląd</h2>
      <p>Form input value: </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            id="firstName"
            placeholder="Wpisz imie"
            value={firstName}
            onChange={handleFirstName}
          />
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};