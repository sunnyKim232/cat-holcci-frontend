"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import RegisterForm from "@/components/register/RegisterForm";
import React from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="w-full h-fit flex flex-row-reverse pt-4">
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col justify-center content-center items-center gap-6 w-full">
        <p className="font-bold text-xl">{t("Register.signup")}</p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Page;
