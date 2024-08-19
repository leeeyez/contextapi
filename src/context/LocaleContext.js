import { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("ko");

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const { locale } = useContext(LocaleContext);
  return locale;
}

export function useSetLocale() {
  const { setLocale } = useContext(LocaleContext);
  return setLocale;
}
