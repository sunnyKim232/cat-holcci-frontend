"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import LoginForm from "@/components/login/LoginForm";
import TextButton from "@/components/TextButton";
import useRequireAuth from "@/hooks/useRequireAuth";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

const Page = () => {
  useRequireAuth();
  const { t } = useTranslation();
  const router = useRouter();
  function handleSignUp() {
    router.push("/register");
  }
  return (
    <div className="flex justify-center align-center flex-wrap h-full flex-glow">
      <div className="w-full h-fit flex flex-row-reverse pt-4">
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col gap-2">
        <LoginForm />
        <TextButton
          text="Login.signup"
          onClickHandler={handleSignUp}
          bgColor="bg-white"
          textColor="text-slate-800"
        />
      </div>
    </div>
  );
};

export default Page;
