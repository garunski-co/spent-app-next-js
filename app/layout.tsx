import "./globals.css";

import Nav from "./nav";
import { Suspense } from "react";

export const metadata = {
  title: "Spent",
  description: "Application for tracking spending."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback={<div>loading...</div>}>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
