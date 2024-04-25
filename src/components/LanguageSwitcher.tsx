"use client";
import { useTranslation } from "react-i18next";

import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    i18n.changeLanguage(nextLocale);
  };
  return (
    <label className="border-2 rounded">
      <select className="bg-transparent py-2" onChange={onSelectChange}>
        <option value="en">English</option>
        <option value="ko">Korean</option>
      </select>
    </label>
  );
}
