import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

enum Navigation {
  "feed" = "feed",
  "graph" = "graph",
  "bookmark" = "bookmark",
  "my" = "my",
}

const Navibar = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Navigation>(Navigation.feed);

  useEffect(() => {
    const selectedElement = document.getElementsByClassName("navOption");
    if (!selectedElement) return;
    Array.from(selectedElement).forEach((element) => {
      if (`${t(`Navibar.${selected}`)}` === element.textContent) {
        if (element instanceof HTMLElement) {
          element.style.opacity = "1";
        }
      } else {
        if (element instanceof HTMLElement) {
          element.style.opacity = "0.5";
        }
      }
    });
  }, [selected, t]);
  return (
    <div className="w-full flex justify-center">
      <div className=" w-fit flex flex-row justify-around rounded-xl border-cyan-800 dark:border-slate-100">
        <div
          className="pr-10 pl-10 pt-2 pb-2 border-cyan-950 dark:border-slate-100 flex flex-col items-center opacity-50 navOption"
          onClick={() => {
            setSelected(Navigation.feed);
            router.push("/home");
          }}
        >
          <div className="w-8 h-8 text-cyan-950 dark:text-slate-100 text-center">
            <CalendarIcon />
          </div>
          <p className="text-center">{t(`Navibar.${Navigation.feed}`)}</p>
        </div>
        <div
          className="pr-10 pl-10 pt-2 pb-2  border-cyan-950 dark:border-slate-100 flex flex-col items-center opacity-50 navOption"
          onClick={() => {
            setSelected(Navigation.graph);
            router.push("/home");
          }}
        >
          <div className="w-8 h-8 text-cyan-950 dark:text-slate-100 text-center">
            <ChartBarIcon />
          </div>
          <p className="text-center">{t(`Navibar.${Navigation.graph}`)}</p>
        </div>
        <div
          className="pr-10 pl-10 pt-2 pb-2  border-cyan-950 dark:border-slate-100 flex flex-col items-center opacity-50 navOption"
          onClick={() => {
            setSelected(Navigation.bookmark);
            router.push("/home");
          }}
        >
          <div className="w-8 h-8 text-cyan-950 dark:text-slate-100 text-center">
            <HeartIcon />
          </div>
          <p className="text-center">{t(`Navibar.${Navigation.bookmark}`)}</p>
        </div>
        <div
          className="pr-10 pl-10 pt-2 pb-2 border-cyan-950 dark:border-slate-50 flex flex-col items-center opacity-50 navOption"
          onClick={() => {
            setSelected(Navigation.my);
            router.push("/information");
          }}
        >
          <div className="w-8 h-8 text-cyan-950 dark:text-slate-100 text-center">
            <UserCircleIcon />
          </div>
          <p className="text-center">{t(`Navibar.${Navigation.my}`)}</p>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
