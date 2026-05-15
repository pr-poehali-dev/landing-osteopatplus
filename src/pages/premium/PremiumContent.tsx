import { FadeIn } from "./PremiumUtils";

const REVIEWS = [
  {
    text: "Лучший специалист, с которым я работал. Впервые за несколько лет ощутил, что тело снова моё.",
    author: "Андрей К.",
  },
  {
    text: "Пришла с хроническим напряжением в плечах и постоянной усталостью. После нескольких встреч — совсем другое состояние.",
    author: "Мария В.",
  },
  {
    text: "Порекомендовал всей семье. Работает глубоко и точно, никакой лишней суеты.",
    author: "Дмитрий Л.",
  },
  {
    text: "Впервые смогла по-настоящему расслабиться. Сергей чувствует тело лучше, чем я сама.",
    author: "Елена С.",
  },
];

interface PremiumContentProps {
  onScrollToContact: () => void;
}

export default function PremiumContent({ onScrollToContact }: PremiumContentProps) {
  return (
    <>
      {/* ─── О СПЕЦИАЛИСТЕ ───────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="pm-about-grid">
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
              О специалисте
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "40px", color: "#1A1A1A" }}>
              Я веду ограниченное количество клиентов,
              чтобы сохранять качество и глубину работы
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "24px" }}>
              Каждый новый клиент проходит первичную сессию, после которой формируется
              индивидуальный формат дальнейшего взаимодействия.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A" }}>
              Работа строится не на стандартизированных протоколах, а на индивидуальной
              оценке состояния человека.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#8A8A8A", marginTop: "24px" }}>
              Член{" "}
              <a href="https://assotsiatsiya-osteopatov.ru/user/svodopianoff/" target="_blank" rel="noopener noreferrer" style={{ color: "#8A8A8A", textDecoration: "underline" }}>
                Ассоциации остеопатов
              </a>{" "}
              и мануальных практиков · 17 лет практики
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="pm-photo-block">
              <div style={{ position: "relative" }}>
                <div
                  className="pm-photo-img"
                  style={{
                    borderRadius: "50%",
                    display: "block",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/c40d2ccf-ac94-475b-bb1b-8a52fa8ab6de.jpg"
                    alt=""
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <img
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/25414d0b-888a-4344-88e4-b7e28ca9520d.png"
                    alt="Специалист"
                    style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </div>
                <div style={{ textAlign: "center", paddingTop: "10px", fontSize: "13px", letterSpacing: "0.06em", color: "#4A4A4A" }}>
                  Сергей Водопьянов
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", width: "100%" }}>
                {[
                  { num: "17", label: "лет практики" },
                  { num: "100%", label: "индивидуальный подход" },
                  { num: "Exclusive", label: "формат работы" },
                ].map(item => (
                  <div
                    key={item.num}
                    style={{
                      padding: "28px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "24px",
                    }}
                  >
                    <span style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 200, letterSpacing: "-0.03em", color: "#1A1A1A" }}>
                      {item.num}
                    </span>
                    <span style={{ fontSize: "14px", color: "#8A8A8A", textAlign: "right", maxWidth: "160px" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://yandex.ru/navi/org/osteopat_plyus/99582120415?si=q0pkkjhuxpnz1pg2wrzu7wyc8g"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "24px",
                  padding: "14px 20px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  background: "#FAFAF8",
                  transition: "background 0.2s",
                }}
              >
                <span style={{ display: "flex", gap: "3px" }}>
                  {[1,2,3,4,5].map(i => (
                    <span key={i} style={{ color: "#F5A623", fontSize: "18px" }}>★</span>
                  ))}
                </span>
                <span style={{ fontSize: "13px", color: "#4A4A4A", fontWeight: 500 }}>Отзывы на Яндекс Картах</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="pm-divider" />

      {/* ─── ДЛЯ КОГО ────────────────────────────────────────── */}
      <section className="pm-section-pad" style={{ background: "#F4F2EE" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
                Для кого
              </p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Со мной работают<br />
                люди, которые:
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {[
                  "Живут в высоком темпе и испытывают перегрузку",
                  "Чувствуют хроническое напряжение в теле",
                  "Хотят восстановить ресурс и ясность состояния",
                  "Ценят индивидуальный подход и опыт специалиста",
                  "Приходят по личной рекомендации или осознанному выбору",
                ].map((item, i) => (
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

      <div className="pm-divider" />

      {/* ─── ПОЧЕМУ ПО РЕКОМЕНДАЦИЯМ ─────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
            Почему по рекомендациям
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3.5vw, 38px)", fontWeight: 300, lineHeight: 1.55, color: "#1A1A1A", marginBottom: "40px" }}>
            Основная часть клиентов приходит по личным рекомендациям.
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "0" }}>
            Это связано с тем, что работа основана не на стандартизированных протоколах,
            а на индивидуальной оценке состояния человека. Такой формат требует доверия
            с обеих сторон — и строится через личный контакт.
          </p>
        </FadeIn>
      </section>

      {/* ─── ФОРМАТ ПРИЁМА ───────────────────────────────────── */}
      <section className="pm-section-pad" style={{ background: "#F4F2EE" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
              Формат приёма
            </p>
          </FadeIn>
          <div className="pm-steps-grid">
            {[
              {
                step: "I",
                title: "По предварительной записи",
                desc: "Приём ведётся только по записи. Без предварительного контакта — попасть на приём невозможно.",
              },
              {
                step: "II",
                title: "Количество мест ограничено",
                desc: "Я сознательно ограничиваю число клиентов, чтобы сохранять глубину и качество каждой работы.",
              },
              {
                step: "III",
                title: "Приоритет — постоянным",
                desc: "Приоритет сохраняется за постоянными клиентами и теми, кто пришёл по личной рекомендации.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 100}>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#C5B9A8", marginBottom: "32px", fontStyle: "italic" }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 400, marginBottom: "20px", color: "#1A1A1A" }}>{item.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6A6A6A" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── С ЧЕМ Я РАБОТАЮ ─────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
            С чем я работаю
          </p>
        </FadeIn>
        <div className="pm-works-grid">
          {[
            { title: "Хроническое напряжение", desc: "Состояние, которое накапливается годами и мешает жить в полную силу" },
            { title: "Перегрузка", desc: "Высокий темп без восстановления — тело накапливает напряжение" },
            { title: "Снижение ресурса", desc: "Когда отдых перестаёт восстанавливать и сил становится всё меньше" },
            { title: "Восстановление после стресса", desc: "Системная работа для возврата в устойчивое и спокойное состояние" },
            { title: "Телесный баланс", desc: "Когда тело и состояние работают как единая, слаженная система" },
            { title: "Тревога и беспокойство", desc: "Работа с фоновой тревогой, которая не отпускает даже в спокойные моменты" },
            { title: "Нарушения сна", desc: "Когда тело не умеет расслабляться и отдых не приходит сам по себе" },
            { title: "Эмоциональное выгорание", desc: "Апатия и ощущение опустошённости после длительного напряжения" },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <div
                style={{
                  padding: "36px 28px",
                  background: i % 2 === 0 ? "#F4F2EE" : "#FAF9F7",
                  border: "1px solid rgba(0,0,0,0.05)",
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 200, color: "#C5B9A8", marginBottom: "16px" }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "12px", lineHeight: 1.3, color: "#1A1A1A" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#7A7A7A" }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── СТОИМОСТЬ ───────────────────────────────────────── */}
      <section className="pm-section-pad" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6A6A6A", marginBottom: "48px" }}>
              Стоимость
            </p>
          </FadeIn>
          <div className="pm-prices-grid">
            {[
              {
                title: "Первичный приём",
                price: "от 10 000 ₽",
                desc: "Знакомство, оценка состояния тела и первичная работа",
              },
              {
                title: "Дальнейший формат",
                price: "Индивидуально",
                desc: "Формат и стоимость дальнейшей работы определяются после первичного приёма",
              },
              {
                title: "Персональный формат",
                price: "По запросу",
                desc: "Длительное сопровождение и системная работа — обсуждается отдельно",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div
                  style={{
                    padding: "48px 36px",
                    background: i === 1 ? "#2A2A2A" : "#222222",
                    borderTop: i === 1 ? "1px solid rgba(197,185,168,0.4)" : "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <p style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A6A6A", marginBottom: "32px" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 200, color: "#FAF9F7", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                    {item.price}
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#7A7A7A" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ОТЗЫВЫ ──────────────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
            Отзывы клиентов
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2px" }}>
          {REVIEWS.map((review, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                style={{
                  padding: "36px 32px",
                  background: i % 2 === 0 ? "#FAF9F7" : "#F4F2EE",
                  border: "1px solid rgba(0,0,0,0.05)",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "3px" }}>
                  {[1,2,3,4,5].map(s => (
                    <span key={s} style={{ color: "#C5B9A8", fontSize: "14px" }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3A3A3A", fontWeight: 300, margin: 0, flex: 1 }}>
                  «{review.text}»
                </p>
                <p style={{ fontSize: "12px", color: "#A0A0A0", letterSpacing: "0.08em", margin: 0 }}>
                  — {review.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={200}>
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a
              href="https://yandex.ru/navi/org/osteopat_plyus/99582120415?si=q0pkkjhuxpnz1pg2wrzu7wyc8g"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "12px",
                textDecoration: "none",
                background: "#FAFAF8",
                fontSize: "13px",
                color: "#4A4A4A",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              <span style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#F5A623", fontSize: "16px" }}>★</span>)}
              </span>
              Все отзывы на Яндекс Картах
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="pm-section-pad" style={{ background: "#F4F2EE" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: "24px" }}>
              Уточнить возможность записи
            </h2>
            <p style={{ fontSize: "16px", color: "#7A7A7A", lineHeight: 1.75, marginBottom: "48px" }}>
              Приём ведётся по предварительной записи.<br />
              Количество мест <span style={{ color: "#1A1A1A", fontWeight: 500 }}>ограничено</span>.
            </p>
            <button
              onClick={onScrollToContact}
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#2C2C2C",
                border: "none",
                padding: "20px 56px",
                cursor: "pointer",
                color: "#FAF9F7",
                transition: "opacity 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.8")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Записаться на приём
            </button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
