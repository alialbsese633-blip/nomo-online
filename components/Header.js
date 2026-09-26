"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageProvider";
import { LANGS, FONTS, HOME } from "@/lib/dictionaries";

const NAV = [
  { href: "/", key: "navHome" },
  { href: "/services", key: "navServices" },
  { href: "/about", key: "navAbout" },
  { href: "/contact", key: "navContact" },
];

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = HOME[lang];

  return (
    <header className="sticky top-0 z-20 bg-ink border-b border-white/10 py-3.5">
      <div className="mx-auto max-w-[1120px] px-6 md:px-16 flex items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo-mark.png"
            alt="Nomo Online"
            width={80}
            height={68}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden min-[620px]:inline disp text-[22px] font-semibold text-white whitespace-nowrap">
            {t.brand}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14.5px] font-medium py-1.5 border-b ${
                  active
                    ? "text-white border-yellow"
                    : "text-white/70 border-transparent hover:text-white"
                }`}
              >
                {t[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3.5">
          <div
            className="flex gap-0.5 border border-white/20 rounded-[3px] p-[3px]"
            role="group"
            aria-label={t.langAria}
          >
            {LANGS.map(([code, label]) => {
              const on = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={on}
                  style={{ fontFamily: FONTS[code][1] }}
                  className={`px-2.5 py-2 text-[12.5px] font-semibold rounded-[2px] min-h-[34px] ${
                    on ? "bg-yellow text-ink" : "bg-transparent text-white/75"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <Link
            href="/contact"
            className="hidden min-[620px]:inline-block bg-yellow text-ink font-bold text-[13.5px] px-5 py-[11px] rounded-[2px] whitespace-nowrap"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
