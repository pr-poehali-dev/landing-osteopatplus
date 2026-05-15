import { FadeIn, PREMIUM_STYLES } from "./premium/PremiumUtils";
import { useSeo } from "@/hooks/useSeo";
import PremiumFooter from "./premium/PremiumFooter";
import SiteHeader from "@/components/SiteHeader";

const RESULTS = [
  "Снижение хронического напряжения",
  "Ощущение расслабления и облегчения",
  "Восстановление внутреннего ресурса",
  "Улучшение общего самочувствия",
];

const STEPS = [
  {
    num: "I",
    title: "Первичный приём",
    desc: "Оценка состояния тела и понимание запроса. Определяется дальнейший формат взаимодействия.",
  },
  {
    num: "II",
    title: "Работа с телом",
    desc: "Индивидуальный формат восстановления, выстроенный под состояние конкретного человека.",
  },
  {
    num: "III",
    title: "Динамическое сопровождение",
    desc: "При необходимости — дальнейшие встречи, исходя из динамики изменений.",
  },
];

const PRINCIPLES = [
  "Без шаблонных протоколов — каждый случай рассматривается индивидуально",
  "Фокус не на симптоме, а на общем состоянии человека",
  "Точная настройка работы под телесные реакции",
  "Спокойный, последовательный темп без давления",
];

export default function Format() {
  const scrollToContact = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  useSeo({
    title: "Формат работы — частная практика Сергея Водопьянова",
    description: "Как устроена частная практика: ограниченный формат, индивидуальный подход, приём по предварительной записи. Сергей Водопьянов, Москва.",
    ogTitle: "Формат работы — остеопат Сергей Водопьянов",
    ogDescription: "Ограниченный формат. Индивидуальный подход. Приём по предварительной записи в Москве.",
  });

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
            Как устроена работа
          </p>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
            marginBottom: "40px",
          }}>
            Формат работы
          </h1>
        </FadeIn>
        <div className="pm-result-grid">
          <FadeIn delay={80}>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "20px" }}>
              Я веду ограниченное количество клиентов в индивидуальном формате, чтобы сохранять
              качество, внимание и глубину работы.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
              Каждый человек рассматривается как отдельный случай, требующий индивидуального
              подхода и оценки состояния.
            </p>
          </FadeIn>
          <div />
        </div>
      </div>

      <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "0 24px" }} />

      {/* ─── КАК ПРОХОДИТ РАБОТА — 3 ШАГА ───────────────────── */}
      <section style={{ background: "#F4F2EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
              Как проходит работа
            </p>
          </FadeIn>
          <div className="pm-steps-grid">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#C5B9A8", marginBottom: "32px", fontStyle: "italic" }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 400, marginBottom: "20px", color: "#1A1A1A", lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6A6A6A", margin: 0 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ОГРАНИЧЕННОСТЬ — КЛЮЧЕВОЙ БЛОК ─────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                Доступность записи
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Ограниченный<br />формат работы
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                <div style={{
                  padding: "32px 36px",
                  border: "1px solid rgba(197,185,168,0.5)",
                  background: "#FDFCFA",
                  marginBottom: "32px",
                }}>
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#3A3A3A", margin: "0 0 16px" }}>
                    Я не веду потоковый приём.
                  </p>
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", margin: "0 0 16px" }}>
                    Количество клиентов в работе{" "}
                    <span style={{ color: "#1A1A1A", fontWeight: 500 }}>ограничено</span>,
                    чтобы сохранять качество и глубину взаимодействия.
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#7A7A7A", margin: 0 }}>
                    По этой причине запись может быть недоступна на ближайшие даты.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "0 24px" }} />

      {/* ─── ПРИОРИТЕТ ЗАПИСИ ────────────────────────────────── */}
      <section style={{ background: "#F4F2EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                Приоритет записи
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Кто получает<br />доступ первым
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {[
                  { label: "Постоянные клиенты", desc: "Сохраняют приоритет и могут записываться вне общего расписания" },
                  { label: "По личной рекомендации", desc: "Люди, пришедшие через доверие и личный контакт" },
                  { label: "Новые клиенты", desc: "Принимаются по мере доступных окон в расписании" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "24px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: "#C5B9A8", minWidth: "24px", paddingTop: "4px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", marginBottom: "6px" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "14px", lineHeight: 1.65, color: "#7A7A7A" }}>
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

      {/* ─── ПРИНЦИП РАБОТЫ ──────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
              Принцип работы
            </p>
          </FadeIn>
          <div style={{ maxWidth: "760px" }}>
            <FadeIn delay={80}>
              <p style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 300, lineHeight: 1.65, color: "#1A1A1A", marginBottom: "48px", letterSpacing: "-0.01em" }}>
                Я не работаю по шаблонным протоколам. Каждое тело и каждое состояние требуют
                индивидуального внимания, наблюдения и точной настройки работы.
              </p>
            </FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {PRINCIPLES.map((item, i) => (
                <FadeIn key={i} delay={i * 70}>
                  <div style={{
                    padding: "20px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "#4A4A4A",
                  }}>
                    <span style={{ fontSize: "11px", color: "#C5B9A8", minWidth: "24px", paddingTop: "3px", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── РЕЗУЛЬТАТ РАБОТЫ ────────────────────────────────── */}
      <section style={{ background: "#F4F2EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                Что меняется
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                В процессе работы<br />чаще всего отмечают:
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {RESULTS.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: "24px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      fontSize: "16px",
                      color: "#3A3A3A",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: "#C5B9A8", minWidth: "24px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
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
              Приём ведётся по предварительной записи
            </h2>
            <p style={{ fontSize: "15px", color: "#6A6A6A", lineHeight: 1.75, marginBottom: "48px" }}>
              Количество мест{" "}
              <span style={{ color: "#C5B9A8" }}>ограничено</span>.
              Уточните доступность до оформления.
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
              Уточнить возможность записи
            </button>
          </FadeIn>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}