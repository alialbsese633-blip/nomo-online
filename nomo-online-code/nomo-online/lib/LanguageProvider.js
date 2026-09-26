"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { FONTS } from "./dictionaries";

const LanguageContext = createContext({
  lang: "ar",
  dir: "rtl",
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("ar");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("nomo_lang");
      if (saved && FONTS[saved]) {
        setLangState(saved);
      }
    } catch (e) {
      // localStorage unavailable — fall back to default language
    }
  }, []);

  useEffect(() => {
    const [, , dir] = FONTS[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  function setLang(code) {
    setLangState(code);
    try {
      window.localStorage.setItem("nomo_lang", code);
    } catch (e) {
      // localStorage unavailable — language choice will not persist
    }
  }

  const [displayFont, bodyFont, dir] = FONTS[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, displayFont, bodyFont }}>
      <div dir={dir} style={{ fontFamily: bodyFont, "--font-display": displayFont }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
