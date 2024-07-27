import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";
import { useState } from "react";

// Definição das opções de idioma
const languageOptions = [
  {
    name: "PT",
    value: "pt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
  },
  {
    name: "EN",
    value: "en",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
];

function SwitchLang() {
  const { i18n } = useTranslation(); // Hook para usar a tradução
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se o dropdown está aberto
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Estado para o idioma selecionado

  // Função para alternar a visibilidade do dropdown
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Função para alterar o idioma
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
    setIsOpen(false); // Fecha o dropdown após a seleção
  };

  return (
    <div className="language-switcher-container">
      <div className="language-selected" onClick={handleToggleOpen}>
        <img
          src={
            languageOptions.find((option) => option.value === selectedLanguage)
              ?.flag
          }
          alt={
            languageOptions.find((option) => option.value === selectedLanguage)
              ?.name
          }
          className="language-flag"
        />
        <span>
          {
            languageOptions.find((option) => option.value === selectedLanguage)
              ?.name
          }
        </span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
      </div>
      <div className={`language-options ${isOpen ? "open" : ""}`}>
        {languageOptions.map((languageOption) => (
          <div
            key={languageOption.value}
            className={`language-option ${
              selectedLanguage === languageOption.value ? "selected" : ""
            }`}
            onClick={() => handleLanguageChange(languageOption.value)}
          >
            <img
              src={languageOption.flag}
              alt={languageOption.name}
              className="language-flag"
            />
            {languageOption.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwitchLang;
