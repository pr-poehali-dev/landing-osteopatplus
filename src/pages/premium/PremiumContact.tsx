import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./PremiumUtils";
import PremiumFooter from "./PremiumFooter";

const PREVIEW_NOTES = [
  "Тело не врёт. Оно точно показывает, в каком напряжении вы живёте.",
  "Разовое облегчение — это не результат. Результат — когда состояние не откатывается.",
];

const SEND_BOOKING_URL = "https://functions.poehali.dev/955b4e10-ed02-4e78-8fb5-77bffbe148cb";

export default function PremiumContact() {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { setError("Необходимо согласие с политикой конфиденциальности"); return; }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(SEND_BOOKING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка отправки");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ─── МОИ НАБЛЮДЕНИЯ ──────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "40px" }}>
            Мои наблюдения
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {PREVIEW_NOTES.map((text, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={{
                background: i === 0 ? "#FFFEF5" : "#F5FAF5",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "2px 4px 18px rgba(0,0,0,0.06)",
                padding: "32px 28px 36px",
                position: "relative",
                transform: i === 0 ? "rotate(-0.8deg)" : "rotate(0.9deg)",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)" }} />
                <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5B9A8", marginBottom: "16px", fontWeight: 500 }}>
                  0{i + 1}
                </div>
                <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#2C2C2C", margin: 0, fontWeight: 300, letterSpacing: "-0.01em" }}>
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={200}>
          <Link
            to="/observations"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6A6A6A",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              paddingBottom: "2px",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1A1A1A";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#6A6A6A";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.2)";
            }}
          >
            Все наблюдения →
          </Link>
        </FadeIn>
      </section>

      <div className="pm-divider" />

      {/* ─── КОНТАКТ ─────────────────────────────────────────── */}
      <section id="contact" className="pm-section-pad" style={{ background: "#F4F2EE" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
              Обратная связь
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: "20px" }}>
              Обсудить запрос
            </h2>
            <p style={{ fontSize: "16px", color: "#7A7A7A", lineHeight: 1.75, marginBottom: "48px" }}>
              Напишите коротко, с чем вы обращаетесь — я предложу формат работы.
            </p>
          </FadeIn>

          {!submitted ? (
            <FadeIn delay={100}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {[
                  { id: "name", label: "Имя", type: "text", placeholder: "Как к вам обращаться" },
                  { id: "contact", label: "Телефон или Telegram", type: "text", placeholder: "+7 или @username" },
                ].map(field => (
                  <div key={field.id} style={{ display: "flex", flexDirection: "column" }}>
                    <label
                      htmlFor={field.id}
                      style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "10px" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={e => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                      style={{
                        fontSize: "16px",
                        padding: "18px 0",
                        background: "none",
                        border: "none",
                        borderBottom: "1px solid rgba(0,0,0,0.15)",
                        outline: "none",
                        color: "#1A1A1A",
                        marginBottom: "32px",
                        fontFamily: "inherit",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    htmlFor="message"
                    style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "10px" }}
                  >
                    Коротко о запросе
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Опишите в нескольких словах, что вас беспокоит или что хотите изменить"
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    style={{
                      fontSize: "16px",
                      padding: "18px 0",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid rgba(0,0,0,0.15)",
                      outline: "none",
                      color: "#1A1A1A",
                      resize: "none",
                      fontFamily: "inherit",
                      lineHeight: 1.7,
                      marginBottom: "32px",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "32px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    style={{ marginTop: "2px", width: "16px", height: "16px", flexShrink: 0, cursor: "pointer", accentColor: "#1A1A1A" }}
                  />
                  <span style={{ fontSize: "13px", color: "#7A7A7A", lineHeight: 1.6 }}>
                    Я согласен(а) с{" "}
                    <a href="/politics" style={{ color: "#1A1A1A", textDecoration: "underline" }}>
                      политикой конфиденциальности
                    </a>{" "}
                    и даю согласие на обработку персональных данных
                  </span>
                </label>

                {error && (
                  <p style={{ fontSize: "13px", color: "#C0392B", marginBottom: "20px" }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "#1A1A1A",
                    border: "none",
                    padding: "20px 56px",
                    cursor: loading ? "not-allowed" : "pointer",
                    color: "#FAF9F7",
                    fontFamily: "inherit",
                    transition: "opacity 0.3s",
                    opacity: loading ? 0.6 : 1,
                  }}
                  onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = "0.8"; }}
                  onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                >
                  {loading ? "Отправка..." : "Отправить"}
                </button>
              </form>
            </FadeIn>
          ) : (
            <FadeIn>
              <div style={{ padding: "64px 0" }}>
                <p style={{ fontSize: "22px", fontWeight: 300, color: "#1A1A1A", marginBottom: "16px" }}>
                  Благодарю за обращение
                </p>
                <p style={{ fontSize: "16px", color: "#7A7A7A", lineHeight: 1.75 }}>
                  Я свяжусь с вами в течение одного рабочего дня, чтобы обсудить ваш запрос.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <PremiumFooter />
    </>
  );
}