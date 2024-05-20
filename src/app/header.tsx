import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DarkModeButton from "../components/DarkModeButton";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="">
      <nav className="flex items-center justify-between">
        <Link href="/">{t("Navigation.home")}</Link>
        <div className="flex gap-2 flex-row justify-center items-center">
          <LanguageSwitcher />
          <DarkModeButton />
        </div>
      </nav>
    </header>
  );
}
