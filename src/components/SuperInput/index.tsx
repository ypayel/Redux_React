import { useRef } from "react";

export const SuperInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // I sposób
    // if (inputRef.current) inputRef.current.focus();

    // II sposób
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    inputRef.current?.blur();
  };

  return (
    <>
      <label htmlFor="super-input">
        <input
          type="text"
          id="super-input"
          placeholder="wpisz cos"
          ref={inputRef}
        />
      </label>
      <button onClick={handleFocus}>Focus input</button>
      <button onClick={handleBlur}>Blur Input</button>
    </>
  );
};