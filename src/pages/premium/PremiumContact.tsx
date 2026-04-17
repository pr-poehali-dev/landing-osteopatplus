import { useState } from "react";
import { FadeIn } from "./PremiumUtils";
import PremiumFooter from "./PremiumFooter";

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