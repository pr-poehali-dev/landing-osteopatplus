import { useState } from "react";
import { FadeIn } from "./PremiumUtils";

export default function PremiumContact() {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                      marginBottom: "48px",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "#1A1A1A",
                    border: "none",
                    padding: "20px 56px",
                    cursor: "pointer",
                    color: "#FAF9F7",
                    fontFamily: "inherit",
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.8")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
                >
                  Отправить
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

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ padding: "48px 24px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FAF9F7" }} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", letterSpacing: "0.04em" }}>Private Practice</span>
              </div>
              <p style={{ fontSize: "13px", color: "#9A9A9A", lineHeight: 1.7 }}>Забота о вашем теле.</p>
            </div>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "16px" }}>Контакты</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="tel:+79029007474" style={{ fontSize: "13px", color: "#5A5A5A", textDecoration: "none" }}>+7 (902) 900-74-74</a>
                <a href="mailto:svodopianoff@yandex.ru" style={{ fontSize: "13px", color: "#5A5A5A", textDecoration: "none" }}>svodopianoff@yandex.ru</a>
                <span style={{ fontSize: "13px", color: "#5A5A5A" }}>Москва, ул. Новослободская, д. 14/19 стр. 1</span>
                <a href="https://t.me/osteomanual" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#5A5A5A", textDecoration: "none" }}>Telegram: @osteomanual</a>
              </div>
            </div>
            <div className="pm-footer-right">
              <p style={{ fontSize: "12px", color: "#C0C0C0", marginBottom: "8px" }}>© 2026 Остеопат+. Все права защищены.</p>
              <a href="/politics" style={{ fontSize: "12px", color: "#C0C0C0", textDecoration: "none" }}>Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}