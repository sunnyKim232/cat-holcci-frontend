"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  function handleRegisterSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userid = formData.get("userid");
    const password = formData.get("password");
    const nickname = formData.get("nickname");
    const email = formData.get("email");
  }
  return (
    <form
      className="flex flex-col w-full p-2 md:w-[25rem] lg:w-[30rem] xl:w-[30rem] 2xl:w-[40rem] gap-2"
      onSubmit={handleRegisterSubmit}
    >
      <div className="flex flex-col border rounded-md">
        <input
          placeholder={t("Register.userid")}
          className="rounded-t-md p-2"
          name="userid"
        />
        <input
          placeholder={t("Register.password")}
          className="p-2"
          type="password"
          name="password"
        />

        <input
          placeholder={t("Register.nickname")}
          className="p-2"
          name="nickname"
        />
        <input
          placeholder={t("Register.email")}
          className="rounded-b-md p-2"
          name="email"
        />
      </div>
      <br />
      <div className="flex flex-col border rounded-md">
        <input
          placeholder={t("Register.currentHeight")}
          className="rounded-t-md p-2"
        />
        <input placeholder={t("Register.currentWeight")} className="p-2" />
        <input placeholder={t("Register.goalWeight")} className="p-2" />
        <input placeholder={t("Register.goalFat")} className="p-2" />
        <input placeholder={t("Register.goalMuscle")} className="p-2" />

        <input
          placeholder={t("Register.whatwantsay")}
          className="rounded-b-md p-2 h-14"
          aria-rowspan={3}
        />
      </div>
      <button
        type="submit"
        className="w-full h-10 rounded-md font-bold bg-slate-700 text-cyan-50"
      >
        {t("Register.submit")}
      </button>
    </form>
  );
};

export default RegisterForm;
