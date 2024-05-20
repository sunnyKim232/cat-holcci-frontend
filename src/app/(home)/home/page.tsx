"use client";
import Navibar from "@/app/Navibar";
import TextButton from "@/components/TextButton";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  const { getItem, removeItem } = useLocalStorage();
  const router = useRouter();
  function logout() {
    removeItem("authorization");
    removeItem("theme");
    router.push("/");
  }
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
  return <div>page</div>;
};

export default Page;
