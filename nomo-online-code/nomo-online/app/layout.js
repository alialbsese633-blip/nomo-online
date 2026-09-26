import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";

export const metadata = {
  title: "Nomo Online — نمو أونلاين",
  description:
    "شريك نمو متخصص لمنشآت الضيافة. A growth partner built for hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
