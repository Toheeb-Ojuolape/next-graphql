import React, { useState, useEffect } from "react";
import { textFormatter } from "@/utils/textFormatter";
import "./Header.css";
import { Pagination } from "@/interfaces/Channel";

function Header(props: { id:string,pagination:Pagination }) {
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
          {props.id && textFormatter(props.id)}
        </h1>
        <p className="my-2">Limit: {props.pagination.limit}, Offset: {props.pagination.offset}</p>
      </div>
      <button className="button" onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Header;
