import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const themeInitScript = `
  (function () {
    function getPreferredTheme() {
      var saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', getPreferredTheme());

    window.toggleTheme = function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    };
  })();
`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike Furr | Technical Product Manager",
  description:
    "Portfolio of Mike Furr — Technical Product Manager specializing in healthcare AI, data engineering, and digital health products.",
  keywords: [
    "product manager",
    "healthcare AI",
    "portfolio",
    "Mike Furr",
    "technical product manager",
  ],
  openGraph: {
    title: "Mike Furr | Technical Product Manager",
    description:
      "Healthcare AI product leader building data-driven digital health solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
