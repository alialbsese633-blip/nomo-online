import Link from "next/link";

export default function CtaBanner({ t, kicker }) {
  return (
    <section className="relative overflow-hidden bg-ink py-[130px]">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-[0.07]"
      >
        <path
          d="M0 320L200 260L400 300L600 180L800 220L1000 90L1200 130"
          fill="none"
          stroke="#F5C518"
          strokeWidth="3"
        />
      </svg>
      <div className="relative mx-auto max-w-[1120px] px-6 md:px-16 text-center">
        {kicker && <div className="disp text-[22px] text-yellow mb-5">{kicker}</div>}
        <h2 className="text-white font-semibold leading-[1.35] mx-auto mb-6 max-w-[680px] text-[clamp(30px,4vw,48px)]">
          {t.ctaTitle}
        </h2>
        <p className="text-white/68 text-[16.5px] leading-[1.85] mx-auto mb-11 max-w-[540px]">
          {t.ctaText}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow text-ink font-bold text-[15px] px-[34px] py-[17px] rounded-[2px]"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
