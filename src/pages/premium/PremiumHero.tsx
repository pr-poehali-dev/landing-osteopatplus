import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/19c15364-5cdd-43bd-944e-558cd745cf69.jpg";

interface PremiumHeroProps {
  onScrollToContact: () => void;
}

export default function PremiumHero({ onScrollToContact }: PremiumHeroProps) {
  return (
    <>
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
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={onScrollToContact}
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
        </div>
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
              onClick={onScrollToContact}
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
    </>
  );
}