import { useState, useEffect, useRef } from "react";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/19c15364-5cdd-43bd-944e-558cd745cf69.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Premium() {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        background: "#FAF9F7",
        color: "#2C2C2C",
        overflowX: "hidden",
      }}
    >
      <style>{`
        .pm-header { padding: 20px 24px; }
        @media (min-width: 640px) { .pm-header { padding: 24px 48px; } }

        .pm-hero-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 100px 24px 64px;
        }
        @media (min-width: 768px) {
          .pm-hero-content {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            padding: 96px 48px;
            align-items: flex-end;
          }
        }

        .pm-hero-btn { align-self: flex-start; }

        .pm-section-pad {
          padding: 80px 24px;
        }
        @media (min-width: 768px) { .pm-section-pad { padding: 128px 48px; } }

        .pm-about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
        }
        @media (min-width: 768px) {
          .pm-about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 96px;
            align-items: center;
          }
        }

        .pm-divider { height: 1px; background: rgba(0,0,0,0.07); margin: 0 24px; }
        @media (min-width: 768px) { .pm-divider { margin: 0 48px; } }

        .pm-works-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        @media (min-width: 1024px) {
          .pm-works-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .pm-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 640px) {
          .pm-steps-grid { grid-template-columns: repeat(3, 1fr); gap: 48px; }
        }

        .pm-prices-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
        }
        @media (min-width: 640px) {
          .pm-prices-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .pm-result-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .pm-result-grid {
            grid-template-columns: 1fr 1fr;
            gap: 96px;
            align-items: start;
          }
        }

        .pm-result-pad { padding-top: 0; }
        @media (min-width: 768px) { .pm-result-pad { padding-top: 56px; } }

        .pm-footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 640px) {
          .pm-footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 48px;
            align-items: start;
          }
        }

        .pm-footer-right { text-align: left; }
        @media (min-width: 640px) { .pm-footer-right { text-align: right; } }

        .pm-approach-tags {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }
        @media (min-width: 640px) {
          .pm-approach-tags {
            flex-direction: row;
            justify-content: center;
            gap: 56px;
            flex-wrap: wrap;
            align-items: center;
          }
        }

        .pm-photo-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .pm-photo-img {
          width: 180px !important;
          height: 180px !important;
        }
        @media (min-width: 640px) {
          .pm-photo-img { width: 220px !important; height: 220px !important; }
        }
      `}</style>

      {/* ─── HEADER ─────────────────────────────────────────── */}
      <header
        className="pm-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(250,249,247,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "50%",
            background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FAF9F7" }} />
          </div>
          <span style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3A3A3A", fontWeight: 500 }}>
            Private Practice
          </span>
        </div>
        <button
          onClick={scrollToContact}
          style={{
            fontSize: "12px",
            letterSpacing: "0.08em",
            background: "none",
            border: "1px solid #2C2C2C",
            padding: "9px 18px",
            cursor: "pointer",
            color: "#2C2C2C",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#2C2C2C";
            (e.currentTarget as HTMLButtonElement).style.color = "#FAF9F7";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "none";
            (e.currentTarget as HTMLButtonElement).style.color = "#2C2C2C";
          }}
        >
          Обсудить запрос
        </button>
      </header>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(44,44,44,0.65) 0%, transparent 60%)",
          }}
        />
        <div className="pm-hero-content" style={{ position: "relative", zIndex: 2, width: "100%", boxSizing: "border-box" }}>
          <div>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "24px",
              }}
            >
              Индивидуальная работа
            </p>
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 68px)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Персональная работа
              с телом и состоянием
            </h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "32px" }}>
            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 19px)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Помогаю восстановить баланс, устойчивость и ресурс
              через индивидуальную работу с телом
            </p>
            <button
              onClick={scrollToContact}
              className="pm-hero-btn"
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#FAF9F7",
                border: "none",
                padding: "18px 48px",
                cursor: "pointer",
                color: "#2C2C2C",
                transition: "opacity 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Обсудить запрос
            </button>
          </div>
        </div>
      </section>

      {/* ─── О СПЕЦИАЛИСТЕ ───────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="pm-about-grid">
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
              О специалисте
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "40px", color: "#1A1A1A" }}>
              Работаю с людьми,<br />
              а не с симптомами
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A", marginBottom: "24px" }}>
              Я работаю с людьми, для которых важно не просто убрать дискомфорт,
              а вернуть устойчивость, ресурс и ощущение контроля над своим состоянием.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#5A5A5A" }}>
              Каждая работа — индивидуальна и строится вокруг конкретного человека и его состояния.
              Никаких шаблонных протоколов.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="pm-photo-block">
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute",
                  inset: "-8px",
                  borderRadius: "50%",
                  border: "1px solid rgba(197,185,168,0.6)",
                }} />
                <div style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  border: "1px solid rgba(197,185,168,0.2)",
                }} />
                <img
                  src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/2291e50a-e4f9-49ca-908b-8a23aef3bb4f.png"
                  alt="Специалист"
                  className="pm-photo-img"
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  }}
                />
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
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── РАЗДЕЛИТЕЛЬ ─────────────────────────────────────── */}
      <div className="pm-divider" />

      {/* ─── С ЧЕМ Я РАБОТАЮ ─────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
            С чем я работаю
          </p>
        </FadeIn>
        <div className="pm-works-grid">
          {[
            { title: "Внутреннее напряжение", desc: "Хроническое состояние, которое мешает работать и жить в полную силу" },
            { title: "Усталость и снижение ресурса", desc: "Когда отдых перестаёт восстанавливать и сил становится всё меньше" },
            { title: "Перегрузка", desc: "Высокая нагрузка без восстановления — тело накапливает напряжение" },
            { title: "Восстановление после стресса", desc: "Системная работа для возврата в устойчивое и спокойное состояние" },
            { title: "Телесный баланс", desc: "Когда тело и состояние работают как единая, слаженная система" },
            { title: "Тревога и беспокойство", desc: "Работа с фоновой тревогой, которая не отпускает даже в спокойные моменты" },
            { title: "Нарушения сна", desc: "Когда тело не умеет расслабляться и отдых не приходит сам по себе" },
            { title: "Эмоциональное выгорание", desc: "Потеря интереса, апатия и ощущение опустошённости после длительного напряжения" },
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

      {/* ─── КАК ПРОХОДИТ РАБОТА ─────────────────────────────── */}
      <section className="pm-section-pad" style={{ background: "#F4F2EE" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
              Как проходит работа
            </p>
          </FadeIn>
          <div className="pm-steps-grid">
            {[
              { step: "I", title: "Первая встреча", desc: "Оценка состояния и первичная работа с телом. Понимаю, с чем именно нужно работать." },
              { step: "II", title: "Персональная работа", desc: "Индивидуальная работа, выстроенная под ваше состояние. Без шаблонов и универсальных протоколов." },
              { step: "III", title: "Сопровождение", desc: "При необходимости — системная работа для устойчивого и долгосрочного результата." },
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

      {/* ─── ПОДХОД ──────────────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "48px" }}>
            Мой подход
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3.5vw, 38px)", fontWeight: 300, lineHeight: 1.5, color: "#1A1A1A", marginBottom: "48px" }}>
            Я не работаю с симптомами отдельно от человека.
            Моя задача — привести тело в состояние устойчивости и баланса.
          </h2>
          <div className="pm-approach-tags">
            {["Без давления", "Без шаблонных протоколов", "Только индивидуальная работа"].map(text => (
              <span key={text} style={{ fontSize: "14px", color: "#9A9A9A", letterSpacing: "0.04em" }}>
                — {text}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─── ФОРМАТЫ И СТОИМОСТЬ ─────────────────────────────── */}
      <section className="pm-section-pad" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6A6A6A", marginBottom: "48px" }}>
              Форматы работы
            </p>
          </FadeIn>
          <div className="pm-prices-grid">
            {[
              { title: "Первая встреча", price: "15 000 ₽", desc: "Знакомство, оценка состояния и первичная работа с телом" },
              { title: "Сопровождение", price: "от 70 000 ₽", desc: "5–10 встреч. Системная работа для устойчивого результата" },
              { title: "Персональный формат", price: "По запросу", desc: "Формат и стоимость обсуждаются индивидуально под ваш запрос" },
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

      {/* ─── РЕЗУЛЬТАТ ───────────────────────────────────────── */}
      <section className="pm-section-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="pm-result-grid">
          <FadeIn>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "32px" }}>
              Что вы получаете
            </p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.02em", color: "#1A1A1A" }}>
              Результат, который<br />
              ощущается
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="pm-result-pad">
              {[
                "Ощущение лёгкости в теле",
                "Снижение накопленного напряжения",
                "Восстановление ресурса",
                "Устойчивость и баланс",
                "Улучшение общего состояния",
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
      </section>

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
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", marginBottom: "8px", letterSpacing: "0.04em" }}>Остеопат+</p>
              <p style={{ fontSize: "13px", color: "#9A9A9A", lineHeight: 1.7 }}>Остеопатия с 17-летним опытом.<br />Забота о вашем здоровье.</p>
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
    </div>
  );
}
