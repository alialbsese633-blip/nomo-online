"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { useLanguage } from "@/lib/LanguageProvider";
import { HOME } from "@/lib/dictionaries";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = HOME[lang];

  return (
    <>
      <Header />

      <section className="bg-ink pt-[130px] min-h-[86vh] flex flex-col justify-between">
        <div className="mx-auto max-w-[1120px] w-full px-6 md:px-16">
          <p className="text-yellow text-[15px] mb-7">{t.eyebrow}</p>
          <h1 className="text-white font-semibold leading-[1.18] mb-8 max-w-[960px] text-[clamp(42px,7vw,88px)]">
            {t.h1a}
            <br />
            {t.h1b}
          </h1>
          <p className="text-white/68 text-lg leading-[1.8] max-w-[580px] mb-11">
            {t.sub}
          </p>
          <div className="flex items-center gap-7 flex-wrap mb-[72px]">
            <Link
              href="/contact"
              className="inline-block bg-yellow text-ink font-bold text-[15px] px-[30px] py-4 rounded-[2px]"
            >
              {t.cta}
            </Link>
            <Link
              href="/services"
              className="text-white text-[15px] font-semibold border-b border-white/40 pb-[3px]"
            >
              {t.btn2}
            </Link>
          </div>
        </div>
        <svg
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
          className="block w-full h-[140px]"
        >
          <line x1="0" y1="120" x2="1200" y2="120" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <polyline
            points="0,105 150,95 300,100 450,70 600,80 750,45 900,55 1050,20 1200,28"
            fill="none"
            stroke="#F5C518"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <circle cx="1050" cy="20" r="4.5" fill="#F5C518" />
        </svg>
      </section>

      <section className="py-[120px]">
        <div className="mx-auto max-w-[800px] px-6 md:px-16">
          <div className="disp text-[22px] text-violet mb-5">{t.k1}</div>
          <h2 className="font-semibold leading-[1.45] mb-6 text-[clamp(28px,3.6vw,40px)]">
            {t.pTitle}
          </h2>
          <p className="text-muted text-[16.5px] leading-[1.85] max-w-[62ch] mb-5">
            {t.p1}
          </p>
          <p className="text-[18px] leading-[1.85] font-bold m-0">{t.p2}</p>
        </div>
      </section>

      <section className="bg-ink py-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <div className="disp text-[22px] text-yellow mb-5">{t.k2}</div>
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-12">
            <h2 className="text-white font-semibold m-0 text-[clamp(28px,3.6vw,40px)]">
              {t.servTitle}
            </h2>
            <Link
              href="/services"
              className="text-yellow text-[15px] font-semibold border-b border-yellow/50 pb-[3px]"
            >
              {t.servLink}
            </Link>
          </div>
          <div className="border-t border-white/[0.14]">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-baseline justify-between gap-2.5 md:gap-10 py-[30px] border-b border-white/[0.14]"
              >
                <h3 className="text-white text-[29px] font-semibold m-0 shrink-0 min-w-[250px] max-w-[380px] leading-[1.3]">
                  {s.n}
                </h3>
                <p className="text-white/60 text-[15px] leading-[1.85] m-0 max-w-[480px]">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <div className="disp text-[22px] text-violet mb-5">{t.k3}</div>
          <h2 className="font-semibold mb-3 text-[clamp(28px,3.6vw,40px)]">{t.workTitle}</h2>
          <p className="text-muted text-[16.5px] leading-[1.85] mb-12">{t.workSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] gap-5">
            <Image
              src="/images/building.jpg"
              alt={t.ph1}
              width={262}
              height={221}
              className="w-full h-[320px] md:h-[440px] object-cover rounded-[4px]"
            />
            <Image
              src="/images/reception.jpg"
              alt={t.ph2}
              width={252}
              height={336}
              className="w-full h-[320px] md:h-[440px] object-cover rounded-[4px]"
            />
            <Image
              src="/images/room.jpg"
              alt={t.ph3}
              width={252}
              height={168}
              className="w-full h-[320px] md:h-[440px] object-cover rounded-[4px]"
            />
          </div>
        </div>
      </section>

      <section className="pb-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <div className="disp text-[22px] text-violet mb-5">{t.k4}</div>
          <h2 className="font-semibold mb-14 text-[clamp(28px,3.6vw,40px)]">{t.howTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-5">
            {t.steps.map((s, i) => (
              <div key={i} className="border-t-2 border-hairline pt-5">
                <div className="text-[13px] font-bold text-violet mb-3.5">{s.k}</div>
                <h3 className="text-[21px] font-semibold mb-2" style={{ fontFamily: "Newsreader, serif" }}>
                  {s.n}
                </h3>
                <p className="text-muted text-[13.5px] leading-[1.8] m-0">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner t={t} kicker={t.k5} />
      <Footer t={t} />
    </>
  );
}
