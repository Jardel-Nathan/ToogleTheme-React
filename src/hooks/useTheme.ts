import React, { useCallback, useState } from "react";

const useToggle = (initialState = "light") => {
  let themeStorage = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(() =>
    themeStorage ? themeStorage : initialState
  );

  const toggle = () => {
    const newtheme = theme === "light" ? "night" : "light";
    setTheme(newtheme);
    window.localStorage.setItem("theme", newtheme);
  };

  return [theme, toggle];
};

export default useToggle;
