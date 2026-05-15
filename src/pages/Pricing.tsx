import { useEffect } from "react";
import { FadeIn, PREMIUM_STYLES } from "./premium/PremiumUtils";
import PremiumFooter from "./premium/PremiumFooter";
import SiteHeader from "@/components/SiteHeader";

const TIERS = [
  {
    label: "Вход",
    title: "Первичный приём",
    desc: "Первичная встреча включает оценку состояния тела и определение дальнейшего формата работы.",
    duration: "60–75 минут",
    price: "от 10 000 ₽",
    accent: false,
  },
  {
    label: "Основной",
    title: "Работа с телом",
    desc: "Формат регулярной работы, направленный на восстановление состояния, снижение напряжения и улучшение общего самочувствия.",
    duration: "40–60 минут",
    price: "от 12 000 ₽",
    accent: false,
  },
  {
    label: "Расширенный",
    title: "Глубокая работа",
    desc: "Формат для более сложных или длительных состояний, требующих расширенного времени взаимодействия.",
    duration: "75–90 минут",
    price: "от 18 000 ₽",
    accent: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  useEffect(() => {
    document.title = "Форматы работы и стоимость — частная практика Сергея Водопьянова";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Форматы работы и стоимость приёма в частной практике Сергея Водопьянова. Первичный приём от 10 000 ₽. Индивидуальный подход, ограниченный формат, Москва.");
    return () => {
      document.title = "Остеопат в Москве — частная практика Сергея Водопьянова";
      if (desc) desc.setAttribute("content", "Частная остеопатическая практика в Москве на Новослободской. Работаю с болями в спине, шее, головными болями, восстановлением после травм. Запись на приём.");
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF9F7",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        color: "#2C2C2C",
      }}
    >
      <style>{PREMIUM_STYLES}</style>
      <SiteHeader onScrollToContact={scrollToContact} />

      {/* ─── ВСТУПЛЕНИЕ ──────────────────────────────────────── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
            Уровни взаимодействия
          </p>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
            marginBottom: "40px",
          }}>
            Форматы работы<br />и стоимость
          </h1>
        </FadeIn>
        <div className="pm-result-grid">
          <FadeIn delay={80}>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "20px" }}>
              Работа ведётся в индивидуальном формате по предварительной записи.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
              Каждый клиент проходит первичный приём, после которого определяется
              дальнейший формат взаимодействия.
            </p>
          </FadeIn>
          <div />
        </div>
      </div>

      <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "0 24px" }} />

      {/* ─── ФОРМАТЫ ПРИЁМА ──────────────────────────────────── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6A6A6A", marginBottom: "48px" }}>
              Форматы приёма
            </p>
          </FadeIn>
          <div className="pm-prices-grid">
            {TIERS.map((tier, i) => (
              <FadeIn key={tier.title} delay={i * 80}>
                <div
                  style={{
                    padding: "48px 36px",
                    background: "#222222",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A4A4A", margin: 0 }}>
                    {tier.label}
                  </p>
                  <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#FAF9F7", margin: 0, lineHeight: 1.2 }}>
                    {tier.title}
                  </h2>
                  <p style={{ fontSize: "13px", lineHeight: 1.75, color: "#6A6A6A", margin: 0, flex: 1 }}>
                    {tier.desc}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontSize: "12px", color: "#4A4A4A", letterSpacing: "0.06em" }}>Длительность</span>
                      <span style={{ fontSize: "13px", color: "#8A8A8A" }}>{tier.duration}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ fontSize: "12px", color: "#4A4A4A", letterSpacing: "0.06em" }}>Стоимость</span>
                      <span style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 200, color: "#FAF9F7", letterSpacing: "-0.02em" }}>{tier.price}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIP: ИНДИВИДУАЛЬНОЕ СОПРОВОЖДЕНИЕ ───────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                Высший уровень
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Индивидуальное<br />сопровождение
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                <div style={{
                  padding: "36px",
                  border: "1px solid rgba(197,185,168,0.4)",
                  background: "#FDFCFA",
                }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5B9A8", marginBottom: "24px" }}>
                    Формат по запросу
                  </p>
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#3A3A3A", marginBottom: "20px" }}>
                    Формат длительного взаимодействия с клиентом, включающий регулярные приёмы
                    и приоритетную запись.
                  </p>
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "32px" }}>
                    Формируется индивидуально после первичной работы.
                  </p>
                  {[
                    "Приоритетная запись вне общего расписания",
                    "Регулярное сопровождение в согласованном формате",
                    "Индивидуальный темп и глубина работы",
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "#4A4A4A",
                    }}>
                      <span style={{ color: "#C5B9A8", fontSize: "11px", paddingTop: "3px", flexShrink: 0 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </div>
                  ))}
                  <p style={{ fontSize: "22px", fontWeight: 200, color: "#1A1A1A", letterSpacing: "-0.02em", marginTop: "28px", marginBottom: 0 }}>
                    Стоимость — по запросу
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "0 24px" }} />

      {/* ─── ПОЧЕМУ ТАКОЙ ФОРМАТ ─────────────────────────────── */}
      <section style={{ background: "#F4F2EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
              Принцип ценообразования
            </p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: "32px" }}>
              Почему формат именно такой
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.9, color: "#5A5A5A", marginBottom: "32px" }}>
              Стоимость отражает не только длительность приёма, но и уровень индивидуальной
              работы, опыт специалиста и ограниченное количество клиентов в практике.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.9, color: "#5A5A5A", margin: 0 }}>
              Это не сервис с потоковым приёмом. Это частная практика, в которой каждое
              взаимодействие требует полного внимания и времени.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── ВАЖНАЯ ИНФОРМАЦИЯ ───────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                Важная информация
              </p>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Об ограничениях<br />приёма
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {[
                  { title: "Количество приёмов ограничено", desc: "Я веду фиксированное число клиентов, чтобы сохранять качество работы с каждым." },
                  { title: "Запись по согласованию", desc: "Приём осуществляется только по предварительному согласованию, без walk-in." },
                  { title: "Возможны периоды ожидания", desc: "В периоды высокой загрузки свободные окна могут отсутствовать." },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}>
                    <span style={{ fontSize: "11px", color: "#C5B9A8", minWidth: "24px", paddingTop: "4px", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", marginBottom: "6px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "14px", lineHeight: 1.7, color: "#7A7A7A" }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6A6A6A", marginBottom: "32px" }}>
              Запись
            </p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.02em", color: "#FAF9F7", marginBottom: "20px" }}>
              Для записи и уточнения<br />доступных слотов
            </h2>
            <p style={{ fontSize: "15px", color: "#6A6A6A", lineHeight: 1.75, marginBottom: "48px" }}>
              Свяжитесь удобным способом — уточним наличие окон
              и формат первого приёма.
            </p>
            <button
              onClick={scrollToContact}
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#FAF9F7",
                border: "none",
                padding: "20px 56px",
                cursor: "pointer",
                color: "#2C2C2C",
                transition: "opacity 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Уточнить запись
            </button>
          </FadeIn>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}
