import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <Link href="/">{t("home")}</Link>
        <div className="flex gap-2 flex-row justify-center items-center">
          <LanguageSwitcher />
          <DarkModeButton />
        </div>
      </nav>
    </header>
  );
}
