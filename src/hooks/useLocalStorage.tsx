"use client";

function useLocalStorage() {
  return { getItem, setItem, removeItem };
}

function getItem(key: string) {
  return window.localStorage.getItem(key);
}

function setItem(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

function removeItem(key: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
}

export default useLocalStorage;
