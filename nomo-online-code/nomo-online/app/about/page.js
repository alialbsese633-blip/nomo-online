"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { useLanguage } from "@/lib/LanguageProvider";
import { ABOUT } from "@/lib/dictionaries";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = ABOUT[lang];

  return (
    <>
      <Header />

      <section className="bg-ink pt-[120px] pb-[110px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <p className="text-yellow text-[15px] mb-6">{t.eyebrow}</p>
          <h1 className="text-white font-semibold leading-[1.22] max-w-[900px] m-0 text-[clamp(38px,5.5vw,68px)]">
            {t.h1}
          </h1>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="mx-auto max-w-[800px] px-6 md:px-16">
          <div className="disp text-[22px] text-violet mb-5">{t.k1}</div>
          <h2 className="font-semibold mb-6 text-[clamp(28px,3.6vw,40px)]">{t.whyTitle}</h2>
          <p className="text-muted text-[16.5px] leading-[1.85] max-w-[62ch] mb-5">{t.why1}</p>
          <p className="text-muted text-[16.5px] leading-[1.85] max-w-[62ch] m-0">{t.why2}</p>
        </div>
      </section>

      <section className="bg-ink py-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <div className="disp text-[22px] text-yellow mb-5">{t.k2}</div>
          <h2 className="text-white font-semibold mb-6 text-[clamp(28px,3.6vw,40px)]">
            {t.teamTitle}
          </h2>
          <p className="text-white/68 text-[17px] leading-[1.85] max-w-[62ch] m-0">{t.team}</p>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <div className="disp text-[22px] text-violet mb-5">{t.k3}</div>
          <h2 className="font-semibold mb-14 text-[clamp(28px,3.6vw,40px)]">{t.beliefsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.beliefs.map((b, i) => (
              <div key={i} className="border-t-2 border-hairline pt-5.5">
                <h3 className="text-2xl font-semibold leading-[1.35] mb-2.5">{b.h}</h3>
                <p className="text-muted text-[15px] leading-[1.8] m-0">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner t={t} />
      <Footer t={t} />
    </>
  );
}
