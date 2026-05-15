import SiteHeader from "@/components/SiteHeader";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/19c15364-5cdd-43bd-944e-558cd745cf69.jpg";

interface PremiumHeroProps {
  onScrollToContact: () => void;
}

export default function PremiumHero({ onScrollToContact }: PremiumHeroProps) {
  return (
    <>
      <SiteHeader onScrollToContact={onScrollToContact} />

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
              Частная практика · Ограниченный формат
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
              Частная практика
              восстановления
              состояния тела
            </h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "32px" }}>
            <div>
              <p
                style={{
                  fontSize: "clamp(15px, 1.6vw, 19px)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  margin: "0 0 12px",
                }}
              >
                Работа с хроническим напряжением, перегрузкой и восстановлением ресурса.
                Приём ведётся в ограниченном формате по предварительной записи.
              </p>
              <p
                style={{
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.6,
                  margin: 0,
                  letterSpacing: "0.02em",
                }}
              >
                Новые клиенты принимаются на обновлённых условиях работы.
              </p>
            </div>
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
              Уточнить возможность записи
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
