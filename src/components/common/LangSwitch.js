import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <button
        onClick={() => handleLanguageChange("ja")}
        style={{
          color: selectedLang === "ja" ? "#000000" : "#B0B0B0",
          backgroundColor: "transparent",
          border: "none",
          marginRight: "8px",
          fontSize: "1rem",
        }}
      >
        JA
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        style={{
          color: selectedLang === "en" ? "#000000" : "#B0B0B0",
          backgroundColor: "transparent",
          border: "none",
          marginLeft: "8px",
          fontSize: "1rem",
        }}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
