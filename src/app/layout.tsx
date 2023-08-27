import type { Metadata } from "next";
import "./globals.css";
import { useState, useEffect } from "react";

export const metadata: Metadata = {
  title: "Next Graphql Project",
  description: "Displays channel lists as a table and graph",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== null) {
      setTheme(storedTheme);
    }
  }, []);

  return <div className={"container"}>{children}</div>;
}
