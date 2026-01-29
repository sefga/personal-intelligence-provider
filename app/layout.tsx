import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Intelligence Provider | Ваш Цифровой Штат",
  description: "Агентство искусственного интеллекта. SaaS боты и приватные облачные агенты для бизнеса и жизни.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
