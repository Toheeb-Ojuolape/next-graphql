import React, { useState, useEffect } from "react";
import { textFormatter } from "@/utils/textFormatter";
import "./Header.css";
import { NextRouter } from "next/router";

function Header(props: { router: NextRouter }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "";
    if (storedTheme == null) {
      localStorage.setItem("theme", "light");
    }
    setTheme(storedTheme);
    applyThemeStyles(storedTheme);
  }, []);

  const applyThemeStyles = (selectedTheme: string) => {
    if (selectedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      applyThemeStyles("light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      applyThemeStyles("dark");
    }
  };

  return (
    <div className="nav-header">
      <div>
        <h1>
          Pubkey:{" "}
          {props.router.query.id && textFormatter(props.router.query.id)}
        </h1>
        <p className="my-2">
          Limit: {props.router.query.limit}, Offset: {props.router.query.offset}
        </p>
      </div>
      <button className="button" onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Header;
