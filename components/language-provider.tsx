"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  
  // Persist language preference in localStorage occasionally, but default to 'en'
  useEffect(() => {
    const savedParams = new URLSearchParams(window.location.search);
    const lang = savedParams.get('lang') as Language;
    if (lang === 'en' || lang === 'es') setLanguage(lang);
    else {
      const savedLang = localStorage.getItem("app_lang") as Language;
      if (savedLang) setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_lang", lang);
  };

  // Basic translation function placeholder (not heavily used if components just do lang==='en' ? '...' : '...')
  // But useful for common strings.
  const t = (key: string) => key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
