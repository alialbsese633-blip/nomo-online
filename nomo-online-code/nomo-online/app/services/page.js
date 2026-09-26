"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { useLanguage } from "@/lib/LanguageProvider";
import { SERVICES } from "@/lib/dictionaries";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = SERVICES[lang];

  return (
    <>
      <Header />

      <section className="bg-ink pt-[120px] pb-[100px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <p className="text-yellow text-[15px] mb-6">{t.eyebrow}</p>
          <h1 className="text-white font-semibold leading-[1.22] mb-7 max-w-[860px] text-[clamp(38px,5.5vw,68px)]">
            {t.h1}
          </h1>
          <p className="text-white/68 text-[17px] leading-[1.85] max-w-[600px] m-0">
            {t.sub}
          </p>
        </div>
      </section>

      <section className="pt-10 pb-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          {t.blocks.map((b, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-14 py-16 border-t border-hairline"
            >
              <div>
                <h2 className="text-[32px] font-semibold leading-[1.3] mb-3.5">{b.n}</h2>
                <p className="text-violet text-sm font-semibold leading-[1.7] m-0">{b.o}</p>
              </div>
              <div>
                <p className="text-[17px] leading-[1.85] mb-6 max-w-[58ch]">{b.d}</p>
                <ul className="m-0 ps-[18px] flex flex-col gap-2.5 text-[#3E3555] text-[15px] leading-[1.7]">
                  {b.b.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner t={t} />
      <Footer t={t} />
    </>
  );
}
