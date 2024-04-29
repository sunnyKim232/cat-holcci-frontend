"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import TextButton from "../TextButton";

const LoginForm = () => {
  const { t } = useTranslation();
  const { setItem, removeItem } = useLocalStorage();
  const route = useRouter();
  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("userId") as string;
    const password = formData.get("current-password") as string;
    if (id === "root" && password === "1234") {
      setItem("authorization", "true");
      route.push("/home");
    }
  }

  function handleSignUp() {
    route.push("/register");
  }
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={(e) => handleLogin(e)} className="h-fit w-[400px]">
        <p className="w-full text-center text-2xl font-bold pb-7">
          {t("Login.intro")}
        </p>
        <div className="pb-5">
          <label htmlFor="userId" className="w-full">
            {t("Login.id")}
          </label>
          <input
            type="text"
            name="userId"
            required
            className="w-full h-10 border rounded-md p-2"
          />
        </div>
        <div className="pb-5">
          <label htmlFor="password" className="w-full">
            {t("Login.password")}
          </label>
          <input
            type="password"
            name="current-password"
            required
            className="w-full h-10 border rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className=" w-full h-10  border rounded-md  bg-slate-700 text-cyan-50 font-bold"
        >
          {t("Login.login")}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
