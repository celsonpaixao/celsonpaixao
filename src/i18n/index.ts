import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptPt from "./locales/pt/pt-us.json";
import enUs from "./locales/en/en-us.json";

// Inicialização do i18next com o adaptador para React
i18n
  .use(initReactI18next) // Conecta o i18next com o React
  .init({
    resources: {
      pt: ptPt, // Carrega as traduções para português
      en: enUs // Carrega as traduções para inglês
    },
    lng: "pt", // Define o idioma inicial como português
    fallbackLng: "pt", // Define o idioma de fallback como português
    debug: true, // Ativa o modo de depuração para ver mais informações no console
    interpolation: {
      escapeValue: false, // Desativa a necessidade de escapar valores na interpolação
    },
  });

export default i18n; // Exporta a instância configurada do i18next
