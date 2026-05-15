import { useEffect } from "react";
import { FadeIn, PREMIUM_STYLES } from "./premium/PremiumUtils";
import PremiumFooter from "./premium/PremiumFooter";
import SiteHeader from "@/components/SiteHeader";

const BENEFITS = [
  "Приоритетная запись вне общего расписания",
  "Стабильное ведение состояния в динамике",
  "Индивидуальный темп и глубина работы",
  "Гибкий график встреч под ритм жизни",
  "Ограниченное число клиентов в сопровождении",
];

const FOR_WHO = [
  "Высокий уровень стресса и хронической нагрузки",
  "Ощущение напряжения в теле, которое не уходит",
  "Потребность в регулярной поддержке состояния",
  "Ценность индивидуального подхода и стабильности",
];

export default function Vip() {
  const goHome = () => {
    window.location.href = "/";
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  const goPricing = () => {
    window.location.href = "/pricing";
  };

  useEffect(() => {
    document.title = "Индивидуальное сопровождение — частная практика Сергея Водопьянова";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Закрытый формат длительного индивидуального сопровождения в остеопатической практике Сергея Водопьянова. Приоритетный доступ, регулярная работа с состоянием.");
    return () => {
      document.title = "Остеопат в Москве — частная практика Сергея Водопьянова";
      if (desc) desc.setAttribute("content", "Частная остеопатическая практика в Москве на Новослободской. Работаю с болями в спине, шее, головными болями, восстановлением после травм. Запись на приём.");
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0F0F0F", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", color: "#E8E4DF" }}>
      <style>{PREMIUM_STYLES + VIP_STYLES}</style>
      <SiteHeader dark onScrollToContact={goHome} />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section style={{ padding: "140px 24px 100px", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p className="vip-eyebrow">Закрытый формат</p>
        </FadeIn>
        <FadeIn delay={80}>
          <h1 className="vip-h1">
            Индивидуальное<br />сопровождение<br />состояния
          </h1>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="vip-hero-sub">
            Формат длительной работы с клиентами, которым необходима<br className="vip-br" />
            регулярная поддержка состояния тела и снижение хронического напряжения.
          </p>
        </FadeIn>
        <FadeIn delay={220}>
          <div className="vip-tag">
            Не разовая услуга — постоянное взаимодействие
          </div>
        </FadeIn>
      </section>

      {/* тонкий разделитель */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", margin: "0 24px" }} />

      {/* ─── СУТЬ ФОРМАТА ────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="pm-result-grid">
          <FadeIn>
            <p className="vip-label">Что это за формат</p>
            <h2 className="vip-h2">Работа<br />с динамикой,<br />а не с приёмами</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="pm-result-pad">
              <p className="vip-body" style={{ marginBottom: "28px" }}>
                Это формат индивидуального сопровождения, при котором работа с состоянием
                человека ведётся регулярно и последовательно.
              </p>
              <p className="vip-body" style={{ color: "#6A6A6A" }}>
                Фокус — не на отдельных приёмах, а на динамике состояния
                и долгосрочных изменениях в теле.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── КОМУ ПОДХОДИТ ───────────────────────────────────── */}
      <section style={{ background: "#161616", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p className="vip-label">Кому подходит</p>
              <h2 className="vip-h2">Формат<br />для тех, кто<br />уже понимает</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                {FOR_WHO.map((item, i) => (
                  <div key={i} className="vip-list-row">
                    <span className="vip-list-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="vip-list-text">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── КАК УСТРОЕНО ────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <p className="vip-label">Как устроена работа</p>
        </FadeIn>
        <div className="vip-how-grid">
          {[
            { n: "01", title: "Первичный приём", text: "Любое взаимодействие начинается со стандартного первичного приёма. Оценка состояния и знакомство." },
            { n: "02", title: "Согласование формата", text: "После первой работы обсуждаем целесообразность и формат длительного сопровождения." },
            { n: "03", title: "Индивидуальный план", text: "Частота, глубина, ритм встреч — формируются под конкретного человека, без шаблонных пакетов." },
          ].map((s, i) => (
            <FadeIn key={s.n} delay={i * 80}>
              <div className="vip-how-card">
                <span className="vip-list-num" style={{ fontSize: "22px", display: "block", marginBottom: "24px" }}>{s.n}</span>
                <h3 className="vip-h3">{s.title}</h3>
                <p className="vip-body-sm">{s.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── ПРЕИМУЩЕСТВА ────────────────────────────────────── */}
      <section style={{ background: "#161616", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p className="vip-label">Преимущества</p>
            <h2 className="vip-h2" style={{ marginBottom: "56px" }}>Что входит<br />в формат</h2>
          </FadeIn>
          <div className="vip-benefits-grid">
            {BENEFITS.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="vip-benefit-item">
                  <div className="vip-benefit-dot" />
                  <span className="vip-list-text">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ДОСТУП ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FadeIn>
            <p className="vip-label">Доступ к формату</p>
            <h2 className="vip-h2" style={{ marginBottom: "40px" }}>
              Ограниченное<br />число мест
            </h2>
            <p className="vip-body" style={{ marginBottom: "24px" }}>
              Формат сопровождения доступен ограниченному количеству клиентов — это часть условия,
              а не маркетинговый приём.
            </p>
            <p className="vip-body" style={{ color: "#5A5A5A" }}>
              Решение о подключении принимается после первичной работы и оценки состояния.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── СТОИМОСТЬ ───────────────────────────────────────── */}
      <section style={{ background: "#161616", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="pm-result-grid">
            <FadeIn>
              <p className="vip-label">Стоимость</p>
              <h2 className="vip-h2">Формируется<br />индивидуально</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="pm-result-pad">
                <div className="vip-price-block">
                  <div style={{ marginBottom: "32px" }}>
                    <p className="vip-label" style={{ marginBottom: "12px" }}>Ориентир</p>
                    <p style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 200, color: "#E8E4DF", letterSpacing: "-0.04em", margin: 0, lineHeight: 1 }}>
                      от 60 000 ₽
                    </p>
                    <p style={{ fontSize: "12px", color: "#4A4A4A", letterSpacing: "0.08em", marginTop: "10px" }}>/ месяц, финальная сумма — по согласованию</p>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "28px" }}>
                    <p className="vip-body-sm" style={{ color: "#5A5A5A", marginBottom: "6px" }}>
                      Стоимость не определяется количеством часов.
                    </p>
                    <p className="vip-body-sm" style={{ color: "#4A4A4A" }}>
                      Она отражает уровень индивидуальной работы, приоритетный доступ
                      и ограниченный ресурс специалиста.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── КАК ПОПАСТЬ ─────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FadeIn>
            <p className="vip-label">Как попасть в сопровождение</p>
            <h2 className="vip-h2" style={{ marginBottom: "40px" }}>
              Не покупается<br />напрямую
            </h2>
            <p className="vip-body" style={{ marginBottom: "24px" }}>
              Формат доступен только после первичного приёма и личного согласования.
              Это обеспечивает правильный подбор и устойчивый результат.
            </p>
            <p className="vip-body" style={{ color: "#5A5A5A" }}>
              Начните с первичного приёма — дальнейшее обсудим при встрече.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "100px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p className="vip-label" style={{ textAlign: "center", marginBottom: "32px" }}>Запись</p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.02em", color: "#E8E4DF", marginBottom: "20px" }}>
              Для обсуждения формата —<br />начните с первичного приёма
            </h2>
            <p style={{ fontSize: "15px", color: "#4A4A4A", lineHeight: 1.75, marginBottom: "48px" }}>
              Свяжитесь для уточнения доступных слотов и записи.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={goPricing}
                className="vip-btn-outline"
              >
                Стоимость приёма
              </button>
              <button
                onClick={goHome}
                className="vip-btn-primary"
              >
                Начать с первичного приёма
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <PremiumFooter dark />
    </div>
  );
}

const VIP_STYLES = `
  .vip-eyebrow {
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #C5B9A8;
    margin-bottom: 36px;
  }
  .vip-h1 {
    font-size: clamp(36px, 6vw, 80px);
    font-weight: 200;
    line-height: 1.05;
    letter-spacing: -0.04em;
    color: #F0ECE7;
    margin-bottom: 40px;
  }
  .vip-h2 {
    font-size: clamp(24px, 3.5vw, 44px);
    font-weight: 300;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: #E8E4DF;
    margin-bottom: 0;
  }
  .vip-h3 {
    font-size: 16px;
    font-weight: 400;
    color: #D0CBBF;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }
  .vip-hero-sub {
    font-size: clamp(15px, 1.8vw, 18px);
    line-height: 1.8;
    color: #5A5A5A;
    margin-bottom: 36px;
    max-width: 600px;
  }
  .vip-br { display: none; }
  @media (min-width: 640px) { .vip-br { display: inline; } }
  .vip-tag {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid rgba(197,185,168,0.2);
    font-size: 12px;
    letter-spacing: 0.08em;
    color: #C5B9A8;
    text-transform: uppercase;
  }
  .vip-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3A3A3A;
    margin-bottom: 20px;
  }
  .vip-body {
    font-size: 17px;
    line-height: 1.85;
    color: #6A6A6A;
    margin: 0;
  }
  .vip-body-sm {
    font-size: 14px;
    line-height: 1.75;
    color: #5A5A5A;
    margin: 0;
  }
  .vip-list-row {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .vip-list-num {
    font-size: 11px;
    color: #C5B9A8;
    min-width: 24px;
    padding-top: 3px;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }
  .vip-list-text {
    font-size: 15px;
    line-height: 1.6;
    color: #7A7A7A;
  }
  .vip-how-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    margin-top: 48px;
  }
  @media (min-width: 640px) {
    .vip-how-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .vip-how-card {
    padding: 40px 32px;
    background: #161616;
    display: flex;
    flex-direction: column;
  }
  .vip-benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.04);
  }
  @media (min-width: 640px) {
    .vip-benefits-grid { grid-template-columns: 1fr 1fr; }
  }
  .vip-benefit-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 22px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .vip-benefit-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #C5B9A8;
    flex-shrink: 0;
  }
  .vip-price-block {
    padding: 36px;
    border: 1px solid rgba(197,185,168,0.12);
    background: #0F0F0F;
  }
  .vip-btn-primary {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: #E8E4DF;
    border: none;
    padding: 18px 40px;
    cursor: pointer;
    color: #0F0F0F;
    transition: opacity 0.3s;
    font-family: inherit;
  }
  .vip-btn-primary:hover { opacity: 0.88; }
  .vip-btn-outline {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid rgba(232,228,223,0.2);
    padding: 18px 32px;
    cursor: pointer;
    color: #6A6A6A;
    transition: border-color 0.3s, color 0.3s;
    font-family: inherit;
  }
  .vip-btn-outline:hover { border-color: rgba(232,228,223,0.5); color: #A0A0A0; }
`;
