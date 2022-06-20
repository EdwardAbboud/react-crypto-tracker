import React, { useEffect, useState } from "react";
import "../css/Theme.css";
import { setTheme } from "../utils/Themes";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

export default function ThemeToggle() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      {togClass === "light" ? (
        <img
          src={moon}
          alt="moon icon"
          type="checkbox"
          className="toggle--checkbox moon-icon"
          onClick={handleOnClick}
          checked
        />
      ) : (
        <img
          src={sun}
          alt="sun icon"
          type="checkbox"
          className="toggle--checkbox sun-icon"
          onClick={handleOnClick}
        />
      )}
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}
