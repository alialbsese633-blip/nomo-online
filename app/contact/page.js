"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageProvider";
import { CONTACT } from "@/lib/dictionaries";

const WHATSAPP = "https://wa.me/96877260789";

const EMPTY = {
  name: "",
  company: "",
  location: "",
  type: "",
  units: "",
  whatsapp: "",
  email: "",
  website: "",
  booking_url: "",
  service: "",
  problem: "",
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = CONTACT[lang];
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />

      <section className="bg-ink pt-[110px] pb-[90px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16">
          <p className="text-yellow text-[15px] mb-6">{t.eyebrow}</p>
          <h1 className="text-white font-semibold leading-[1.22] mb-6 text-[clamp(38px,5.5vw,64px)]">
            {t.h1}
          </h1>
          <p className="text-white/68 text-[17px] leading-[1.85] max-w-[580px] m-0">{t.sub}</p>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-16 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-9 md:gap-[72px]">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[13.5px] text-muted mb-1.5">{t.wa}</p>
              <a href={WHATSAPP} dir="ltr" className="disp text-[28px] font-semibold inline-block">
                +968 7726 0789
              </a>
            </div>
            <div>
              <p className="text-[13.5px] text-muted mb-1.5">{t.phone}</p>
              <a href="tel:+96877260789" dir="ltr" className="disp text-[28px] font-semibold inline-block">
                +968 7726 0789
              </a>
            </div>
            <div>
              <p className="text-[13.5px] text-muted mb-1.5">{t.lEmail}</p>
              <a href="mailto:hello@nomo.om" className="disp text-[28px] font-semibold inline-block">
                hello@nomo.om
              </a>
            </div>
            <div>
              <p className="text-[13.5px] text-muted mb-1.5">{t.lLoc}</p>
              <p className="disp text-[28px] font-semibold m-0">{t.loc}</p>
            </div>
            <a
              href={WHATSAPP}
              className="inline-block bg-[#1FA855] text-white font-bold text-[15px] px-[30px] py-4 rounded-[2px] self-start"
            >
              {t.waBtn}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="field">
                <label htmlFor="f-name">{t.fName}</label>
                <input id="f-name" required value={form.name} onChange={update("name")} placeholder={t.pName} />
              </div>
              <div className="field">
                <label htmlFor="f-company">{t.fCompany}</label>
                <input id="f-company" required value={form.company} onChange={update("company")} placeholder={t.pCompany} />
              </div>
              <div className="field">
                <label htmlFor="f-location">{t.fLoc}</label>
                <input id="f-location" value={form.location} onChange={update("location")} placeholder={t.pLoc} />
              </div>
              <div className="field">
                <label htmlFor="f-type">{t.fType}</label>
                <select id="f-type" value={form.type} onChange={update("type")}>
                  <option value="" disabled>
                    —
                  </option>
                  {t.types.map((o, i) => (
                    <option key={i} value={o.x}>
                      {o.x}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-units">{t.fUnits}</label>
                <input id="f-units" value={form.units} onChange={update("units")} placeholder={t.pUnits} />
              </div>
              <div className="field">
                <label htmlFor="f-wa">{t.fWa}</label>
                <input id="f-wa" dir="ltr" value={form.whatsapp} onChange={update("whatsapp")} placeholder="+968" />
              </div>
              <div className="field">
                <label htmlFor="f-email">{t.fEmail}</label>
                <input
                  id="f-email"
                  type="email"
                  dir="ltr"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="name@company.com"
                />
              </div>
              <div className="field">
                <label htmlFor="f-web">{t.fWeb}</label>
                <input id="f-web" dir="ltr" value={form.website} onChange={update("website")} placeholder="www.example.com" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-booking">{t.fBooking}</label>
              <input id="f-booking" value={form.booking_url} onChange={update("booking_url")} placeholder={t.pBooking} />
            </div>

            <div className="field">
              <label htmlFor="f-service">{t.fService}</label>
              <select id="f-service" value={form.service} onChange={update("service")}>
                <option value="" disabled>
                  —
                </option>
                {t.svc.map((o, i) => (
                  <option key={i} value={o.x}>
                    {o.x}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="f-problem">{t.fProblem}</label>
              <textarea
                id="f-problem"
                rows={4}
                value={form.problem}
                onChange={update("problem")}
                placeholder={t.pProblem}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start bg-yellow text-ink font-bold text-[15px] px-[30px] py-4 rounded-[2px] disabled:opacity-60"
            >
              {status === "sending" ? "…" : t.submit}
            </button>

            {status === "sent" && (
              <p className="text-[#1FA855] text-sm font-semibold m-0">
                {lang === "ar" ? "تم إرسال طلبك بنجاح." : lang === "ur" ? "آپ کی درخواست کامیابی سے بھیج دی گئی۔" : lang === "hi" ? "आपका अनुरोध सफलतापूर्वक भेज दिया गया।" : "Your request was sent successfully."}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm font-semibold m-0">
                {lang === "ar" ? "تعذر الإرسال، حاول عبر واتساب." : lang === "ur" ? "بھیجنا ناکام ہوا، براہ کرم واٹس ایپ آزمائیں۔" : lang === "hi" ? "भेजना विफल रहा, कृपया व्हाट्सऐप आज़माएँ।" : "Something went wrong — please try WhatsApp instead."}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer t={t} />
    </>
  );
}
