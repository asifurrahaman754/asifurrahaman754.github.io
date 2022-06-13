import { createContext, useState } from "react";

export const BackContextProvider = createContext();

export default function BackContext({ children }) {
  const [preivouspath, setpreivouspath] = useState("/");

  return (
    <BackContextProvider.Provider value={{ preivouspath, setpreivouspath }}>
      {children}
    </BackContextProvider.Provider>
  );
}
