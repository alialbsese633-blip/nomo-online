"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";

const WHATSAPP = "https://wa.me/96877260789";

export default function Footer({ t }) {
  const { lang } = useLanguage();

  return (
    <footer className="bg-ink pt-20 pb-8">
      <div className="mx-auto max-w-[1120px] px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12 pb-14 mb-7 border-b border-white/10">
          <div>
            <Image
              src="/images/logo-full.png"
              alt="Nomo Online"
              width={524}
              height={442}
              className="h-24 w-auto mb-5"
            />
            <p className="text-white/60 text-sm leading-[1.85] max-w-[330px]">
              {t.footerTag}
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4.5">{t.fPages}</h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-white/65 text-sm">{t.navHome}</Link>
              <Link href="/services" className="text-white/65 text-sm">{t.navServices}</Link>
              <Link href="/about" className="text-white/65 text-sm">{t.navAbout}</Link>
              <Link href="/contact" className="text-white/65 text-sm">{t.navContact}</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4.5">{t.fContact}</h3>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP} className="text-white/65 text-sm">
                {t.wa}: <span dir="ltr">+968 7726 0789</span>
              </a>
              <a href="tel:+96877260789" className="text-white/65 text-sm">
                {t.phone}: <span dir="ltr">+968 7726 0789</span>
              </a>
              <a href="mailto:hello@nomo.om" className="text-white/65 text-sm">
                hello@nomo.om
              </a>
              <span className="text-white/65 text-sm">{t.loc}</span>
            </div>
          </div>
        </div>
        <p className="text-white/40 text-[13px] m-0">
          {t.rights} <span dir="ltr">nomo.om</span>
        </p>
      </div>

      <a
        href={WHATSAPP}
        aria-label={t.waAria}
        className="fixed z-50 flex items-center justify-center w-[58px] h-[58px] rounded-full bg-[#1FA855] shadow-[0_8px_24px_rgba(18,9,31,0.28)]"
        style={{ bottom: 24, [lang === "en" || lang === "hi" ? "right" : "left"]: 24 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20L5.3 16.2C4.5 14.9 4 13.5 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C10.5 20 9.1 19.6 7.9 18.8L4 20Z"
            stroke="#ffffff"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 8.6C9.4 8.2 9.8 8.2 10 8.6L10.6 10C10.7 10.3 10.6 10.6 10.4 10.8L10 11.2C10.5 12.3 11.5 13.3 12.7 13.9L13.1 13.5C13.3 13.3 13.6 13.2 13.9 13.3L15.3 13.9C15.7 14.1 15.7 14.5 15.4 14.8C14.8 15.5 14 15.8 13.2 15.6C11 15 8.9 12.9 8.3 10.7C8.1 9.9 8.5 9.2 9.2 8.6Z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </footer>
  );
}
