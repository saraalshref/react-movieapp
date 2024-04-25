import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const getDirection = () => {
    return language === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, getDirection }}>
      {children}
    </LanguageContext.Provider>
  );
};
