"use client";

import LoginForm from "@/components/login/LoginForm";
import useRequireAuth from "@/hooks/useRequireAuth";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useLayoutEffect } from "react";

const Page = () => {
  useRequireAuth();
  const { t } = useTranslation();
  const router = useRouter();
  return <LoginForm />;
};

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
