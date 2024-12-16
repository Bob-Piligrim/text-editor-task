import React, { ChangeEvent } from "react";

interface LanguageSelecrotProps {
  selectedLanguage: string;
  setLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelecrotProps> = ({
  selectedLanguage,
  setLanguage,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };
  return (
    <select
      value={selectedLanguage}
      onChange={handleChange}
    >
      <option value="python">Python</option>
      <option value="go">Go</option>
    </select>
  );
};

export default LanguageSelector;
