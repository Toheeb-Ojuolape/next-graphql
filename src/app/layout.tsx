import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Graphql Project",
  description: "Displays channel lists as a table and graph",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container">{children}</div>;
}
