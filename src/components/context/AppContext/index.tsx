import { createContext, useState } from "react";

type AppContextType = {
  count: number;
  handleCount: (value: number) => void;
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: Props) => {
  // Mozemy tutaj wydzielić całą logike do useAppContextProvider
  const [count, setCount] = useState(0);

  const handleCount = (value: number) => setCount(value);

  return (
    // Value jest obiektem typu AppContextType
    // Wszystko co chcemy żeby było współdzielone musi być zawarte w value oraz w typie AppContextType
    <AppContext.Provider
      value={{
        count,
        handleCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};