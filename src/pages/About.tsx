import { useState } from "react";
import { useSeo } from "@/hooks/useSeo";
import { Link } from "react-router-dom";
import { FadeIn, PREMIUM_STYLES } from "./premium/PremiumUtils";
import PremiumFooter from "./premium/PremiumFooter";
import SiteHeader from "@/components/SiteHeader";

const APPROACH_ITEMS = [
  "Индивидуальная оценка состояния каждого человека",
  "Работа с причиной напряжения, а не только с проявлениями",
  "Внимательное отношение к телесным реакциям",
  "Спокойный и последовательный формат работы",
  "Ограниченное количество клиентов для сохранения качества",
];

const FOR_WHOM = [
  "Живут в высоком темпе и испытывают перегрузку",
  "Чувствуют хроническое напряжение в теле",
  "Хотят восстановить ресурс и внутреннюю опору",
  "Ценят индивидуальный подход и опыт специалиста",
];

const ACCORDION_ITEMS = [
  {
    id: "path",
    label: "Опыт и путь",
    content: (
      <>
        <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "20px" }}>
          Более 17 лет я работаю с телесными состояниями человека, наблюдая, как хроническое напряжение
          влияет на качество жизни, энергию и внутреннее ощущение опоры.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
          За это время сформировался собственный подход, основанный не на шаблонных протоколах,
          а на глубокой индивидуальной оценке каждого человека.
        </p>
      </>
    ),
  },
  {
    id: "philosophy",
    label: "Философия работы",
    content: (
      <>
        <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "20px" }}>
          Я рассматриваю тело человека как систему, которая отражает его образ жизни, внутренние состояния
          и накопленное напряжение.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "20px" }}>
          Моя задача — не «исправить симптом», а помочь телу выйти из хронического напряжения
          и восстановить естественное состояние баланса.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
          Каждый человек — это отдельная система, требующая внимательного и индивидуального подхода.
          Я не работаю в формате массового приёма или стандартизированных протоколов.
        </p>
      </>
    ),
  },
  {
    id: "values",
    label: "Что важно для меня в работе",
    content: (
      <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
        Для меня важны глубина работы, качество результата и состояние человека после взаимодействия.
        Я не работаю в условиях потока и не стремлюсь к максимальному количеству приёмов.
        Главный критерий — изменения состояния человека и долгосрочный эффект.
      </p>
    ),
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: typeof ACCORDION_ITEMS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
          gap: "16px",
        }}
      >
        <span style={{ fontSize: "17px", fontWeight: 400, color: "#1A1A1A", letterSpacing: "-0.01em" }}>
          {item.label}
        </span>
        <span
          style={{
            fontSize: "20px",
            color: "#C5B9A8",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div style={{ paddingBottom: "28px" }}>
          {item.content}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useSeo({
    title: "Обо мне — Сергей Водопьянов, частная практика",
    description: "Водопьянов Сергей Геннадьевич — специалист по работе с состоянием тела. Более 17 лет в мануальной терапии и остеопатическом подходе. Частная практика в Москве.",
    ogTitle: "Сергей Водопьянов — остеопат, частная практика",
    ogDescription: "17 лет в остеопатии и мануальной терапии. Индивидуальная работа с состоянием тела. Москва, Новослободская.",
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => (prev === id ? null : id));
  };

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

      <SiteHeader />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <div style={{ paddingTop: "120px", paddingBottom: "80px", maxWidth: "1100px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
            Специалист
          </p>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
            marginBottom: "20px",
          }}>
            Водопьянов
            <br />
            Сергей Геннадьевич
          </h1>
          <p style={{ fontSize: "clamp(15px, 1.6vw, 18px)", color: "#7A7A7A", lineHeight: 1.6, marginBottom: "48px", maxWidth: "560px" }}>
            Специалист по работе с состоянием тела.
            Опыт более 17 лет в мануальной терапии и остеопатическом подходе.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#4A4A4A", maxWidth: "640px" }}>
            Я работаю с людьми через индивидуальную оценку состояния тела, помогая снизить
            хроническое напряжение и восстановить внутренний ресурс организма.
          </p>
        </FadeIn>
      </div>

      <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "0 24px" }} />

      {/* ─── ОСНОВНЫЕ РАЗДЕЛЫ: АККОРДЕОН НА МОБИЛЕ, СТАТИКА НА ДЕСКТОПЕ ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Мобильный аккордеон */}
        <div className="about-accordion" style={{ padding: "20px 0 60px" }}>
          {ACCORDION_ITEMS.map(item => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openAccordion === item.id}
              onToggle={() => toggleAccordion(item.id)}
            />
          ))}
        </div>

        {/* Десктопная версия — статичные блоки */}
        <div className="about-desktop">
          {/* Опыт и путь */}
          <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="pm-result-grid">
              <FadeIn>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                  Опыт и путь
                </p>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                  17 лет наблюдения<br />за состоянием тела
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="pm-result-pad">
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "24px" }}>
                    Более 17 лет я работаю с телесными состояниями человека, наблюдая, как хроническое напряжение
                    влияет на качество жизни, энергию и внутреннее ощущение опоры.
                  </p>
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
                    За это время сформировался собственный подход, основанный не на шаблонных протоколах,
                    а на глубокой индивидуальной оценке каждого человека.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Философия */}
          <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
                Философия работы
              </p>
            </FadeIn>
            <div style={{ maxWidth: "760px" }}>
              {[
                "Я рассматриваю тело человека как систему, которая отражает его образ жизни, внутренние состояния и накопленное напряжение.",
                "Моя задача — не «исправить симптом», а помочь телу выйти из хронического напряжения и восстановить естественное состояние баланса.",
                "Каждый человек — это отдельная система, требующая внимательного и индивидуального подхода. Я не работаю в формате массового приёма или стандартизированных протоколов.",
              ].map((text, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <p style={{
                    fontSize: "clamp(17px, 2vw, 22px)",
                    lineHeight: 1.75,
                    color: i === 1 ? "#1A1A1A" : "#5A5A5A",
                    fontWeight: i === 1 ? 400 : 300,
                    marginBottom: "32px",
                    paddingLeft: i === 1 ? "24px" : "0",
                    borderLeft: i === 1 ? "2px solid #C5B9A8" : "none",
                    margin: `0 0 32px ${i === 1 ? "0" : "0"}`,
                    paddingLeft: i === 1 ? "24px" : "0",
                  }}>
                    {text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Что важно */}
          <section style={{ padding: "80px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="pm-result-grid">
              <FadeIn>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                  Что важно для меня
                </p>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                  Глубина работы,<br />а не количество
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="pm-result-pad">
                  <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", margin: 0 }}>
                    Для меня важны глубина работы, качество результата и состояние человека
                    после взаимодействия. Я не работаю в условиях потока и не стремлюсь
                    к максимальному количеству приёмов.
                    <br /><br />
                    Главный критерий — изменения состояния человека и долгосрочный эффект.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>

      {/* ─── ПОДХОД К ПРАКТИКЕ ───────────────────────────────── */}
      <section style={{ background: "#F4F2EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                Подход к практике
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Как я строю<br />работу
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {APPROACH_ITEMS.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#3A3A3A",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: "#C5B9A8", minWidth: "24px", paddingTop: "3px" }}>
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

      {/* ─── С КЕМ Я РАБОТАЮ ─────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "24px" }}>
                С кем я работаю
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
                Чаще всего<br />ко мне обращаются:
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {FOR_WHOM.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "20px",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "#3A3A3A",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: "#C5B9A8", minWidth: "24px", paddingTop: "3px" }}>
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
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.02em", color: "#FAF9F7", marginBottom: "20px" }}>
              Работа ведётся в ограниченном формате
            </h2>
            <p style={{ fontSize: "16px", color: "#6A6A6A", lineHeight: 1.75, marginBottom: "48px" }}>
              Приём по предварительной записи. Приоритет отдаётся качеству
              взаимодействия и глубине работы с каждым человеком.
            </p>
            <Link
              to="/"
              onClick={e => {
                e.preventDefault();
                window.location.href = "/";
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              style={{
                display: "inline-block",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#FAF9F7",
                border: "none",
                padding: "20px 56px",
                cursor: "pointer",
                color: "#2C2C2C",
                textDecoration: "none",
                transition: "opacity 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Записаться на приём
            </Link>
          </FadeIn>
        </div>
      </section>

      <PremiumFooter />

      <style>{`
        .about-accordion { display: block; }
        .about-desktop { display: none; }
        @media (min-width: 768px) {
          .about-accordion { display: none; }
          .about-desktop { display: block; }
        }
      `}</style>
    </div>
  );
}