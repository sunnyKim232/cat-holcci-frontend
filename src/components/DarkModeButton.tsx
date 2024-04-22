"use client";

import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

const DarkModeButton = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.add(localTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={toggleTheme} className="w-8 h-8">
      {theme === "light" ? (
        <div className="text-black bg-white rounded-full p-1">
          <MoonIcon />
        </div>
      ) : (
        <div className="text-black bg-white rounded-full p-1">
          <SunIcon />
        </div>
      )}
    </button>
  );
};
export default DarkModeButton;
