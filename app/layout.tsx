import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Messenger",
  description: "Simple messenger app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="night">
      <body>{children}</body>
    </html>
  );
}
