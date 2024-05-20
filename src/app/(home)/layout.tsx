"use client";

import "@/app/globals.css";
import Header from "@/app/header";
import Navibar from "../Navibar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full justify-between p-5">
      <Header />
      <div>{children}</div>
      <Navibar />
    </div>
  );
}
