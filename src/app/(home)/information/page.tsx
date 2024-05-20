"use client";

import Navibar from "@/app/Navibar";
import RegisterForm from "@/components/register/RegisterForm";
import TextButton from "@/components/TextButton";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
  const router = useRouter();
  const { getItem } = useLocalStorage();
  useEffect(() => {
    if (!getItem("authorization")) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [getItem, router]);
  if (!getItem("authorization")) {
    return (
      <p className="text-center">
        로그인 후 사용해주세요. 로그인 화면으로 돌아갑니다.
      </p>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <div className="w-[30rem] flex flex-col">
        <p className="w-full font-semibold text-md text-center">
          사용자 정보 수정
        </p>
        <RegisterForm />
        <div className="p-2">
          <Logout />
        </div>
      </div>
    </div>
  );
};

const Logout = () => {
  const { t } = useTranslation();
  const { getItem, removeItem } = useLocalStorage();
  const router = useRouter();
  function logout() {
    removeItem("authorization");
    removeItem("theme");
    router.push("/");
  }

  return <TextButton onClickHandler={logout} text="Login.logout" />;
};

export default Page;
