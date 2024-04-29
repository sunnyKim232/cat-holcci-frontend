import { useTranslation } from "next-i18next";
import React from "react";

interface TextButtonProps {
  onClickHandler: () => void;
  text: string;
  bgColor?: string;
  textColor?: string;
}
const TextButton = ({
  onClickHandler,
  text,
  bgColor = "bg-slate-700",
  textColor = "text-cyan-50",
}: TextButtonProps) => {
  const { t } = useTranslation();
  return (
    <button
      className={`${bgColor} ${textColor} w-full h-10  border rounded-md font-bold`}
      onClick={onClickHandler}
      type="button"
    >
      {t(`${text}`)}
    </button>
  );
};

export default TextButton;
