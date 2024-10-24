import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import i18n from "../../configs/i18n";

const LanguageSelectButton = () => {
  const { lang } = useParams();

  const [language, setLanguage] = useState(lang || "en");
  const navigate = useNavigate();

  const handleLanguageSelect = selectedLanguage => {
    setLanguage(selectedLanguage);
    navigate(`/${selectedLanguage}`);
    i18n.changeLanguage(selectedLanguage);
  };

  const languages = [
    { label: "en", name: "English" },
    { label: "az", name: "Azerbaijani" },
  ];

  return (
    <div className="flex w-full bg-white border border-zinc-300 rounded-lg overflow-hidden">
      {languages.map(lang => (
        <button
          key={lang.label}
          className={`p-2 uppercase flex-1 text-sm font-medium focus-visible:outline-none transition-colors duration-150 ease-in-out ${
            language === lang.label
              ? "text-white bg-black"
              : "text-primary-black"
          }`}
          onClick={() => handleLanguageSelect(lang.label)}
          aria-pressed={language === lang.label}
          aria-label={`Select ${lang.name}`}>
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelectButton;
