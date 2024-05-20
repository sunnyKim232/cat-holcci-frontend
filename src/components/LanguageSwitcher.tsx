"use client";
import { useTranslation } from "react-i18next";

import { ChangeEvent, useEffect } from "react";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    i18n.changeLanguage(nextLocale);
  };

  useEffect(() => {
    const selectOptions = document.getElementsByClassName("selectOption");
    if (!selectOptions) return;
    Array.from(selectOptions).forEach(function (element) {
      const optionValue = element.getAttribute("value");
      if (i18n.language === optionValue) {
        element.setAttribute("selected", "true");
      }
    });
  }, [i18n.language]);
  return (
    <label className="border-2 rounded">
      <select className="bg-transparent py-2" onChange={onSelectChange}>
        <option value="ko" className="selectOption">
          Korean
        </option>
        <option value="en" className="selectOption">
          English
        </option>
      </select>
    </label>
  );
}
