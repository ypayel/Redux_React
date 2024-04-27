import { useState } from "react";

type Data = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeContext = (): Data => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // mozliwa inna opcja ustalania theme
  // const [theme, setTheme] = useState("dark | light | gray");

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return {
    isDarkMode,
    toggleTheme,
  };
};