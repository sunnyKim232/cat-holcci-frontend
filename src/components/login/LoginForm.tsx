"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const LoginForm = () => {
  const { setItem } = useLocalStorage();
  const route = useRouter();
  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("userId") as string;
    const password = formData.get("current-password") as string;
    if (id === "root" && password === "1234") {
      setItem("authorization", "true");
      route.push("/");
    }
  }
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={(e) => handleLogin(e)} className="h-fit w-[500px]">
        <p className="w-full text-center text-2xl font-bold pb-7">로그인</p>
        <div className="pb-5">
          <label htmlFor="userId" className="w-full">
            ID
          </label>
          <input
            type="text"
            name="userId"
            required
            className="w-full h-10 rounded-shape-extra-small"
          />
        </div>
        <div className="pb-5">
          <label htmlFor="password" className="w-full">
            비밀번호
          </label>
          <input
            type="password"
            name="current-password"
            required
            className="w-full h-10 rounded-shape-extra-small"
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#262626" }}
          className=" w-full h-10 rounded-shape-extra-small text-sys-color-on-primary-light "
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
