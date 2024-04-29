"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.mjs";
import "@/app/globals.css";
import Footer from "@/app/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col h-screen max-w-4xl mx-auto ">
          <I18nextProvider i18n={i18n} defaultNS={"translation"}>
            <div className="flex-grow h-full">{children}</div>
            <Footer />
          </I18nextProvider>
        </div>
      </body>
    </html>
  );
}
