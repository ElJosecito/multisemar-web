import localFont from "next/font/local";
import "./globals.css";

const generalSansVariable = localFont({
  src: "./fonts/general-sans/GeneralSans-Variable.woff",
  variable: "--font-general-sans",
  weight: "100 900",
});
const generalSansVariableItalic = localFont({
  src: "./fonts/general-sans/GeneralSans-VariableItalic.woff",
  variable: "--font-general-sans-italic",
  weight: "100 900",
});

export const metadata = {
  title: "Multisemar",
  description: "Multisemar Website, Information and Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${generalSansVariable.variable} ${generalSansVariableItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
