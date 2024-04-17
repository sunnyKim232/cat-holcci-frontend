import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <p>{t("description")}</p>
    </div>
  );
};

export default Page;
