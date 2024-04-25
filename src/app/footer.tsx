import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="my-10 text-center">
      <p>{t("Footer.copyright")}</p>
    </div>
  );
}
