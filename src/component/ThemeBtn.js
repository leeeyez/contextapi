import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLocale } from "../context/LocaleContext";

const dict = {
  ko: {
    "switch to dark": "다크모드",
    "switch to light": "라이트모드",
  },
  en: {
    "switch to dark": "dark",
    "switch to light": "light",
  },
};

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light"
          ? translate("switch to dark")
          : translate("switch to light")}
      </button>
    </div>
  );
};

export default ThemeBtn;
