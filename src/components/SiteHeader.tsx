import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SiteHeaderProps {
  onScrollToContact?: () => void;
}

const NAV_LINKS = [
  { label: "Обо мне", to: "/about" },
  { label: "Формат работы", to: "/format" },
  { label: "Наблюдения", to: "/observations" },
];

export default function SiteHeader({ onScrollToContact }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === "/") {
      onScrollToContact?.();
    } else {
      window.location.href = "/";
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: "rgba(250,249,247,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: menuOpen ? "none" : "1px solid rgba(0,0,0,0.06)",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px",
          }}
        >
          {/* Логотип */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FAF9F7" }} />
            </div>
            <span style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3A3A3A", fontWeight: 500 }}>
              Остеопат Плюс
            </span>
          </Link>

          {/* Десктоп-меню */}
          <nav style={{ display: "flex", alignItems: "center", gap: "24px" }} className="site-nav-desktop">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  color: pathname === link.to ? "#1A1A1A" : "#6A6A6A",
                  textDecoration: "none",
                  fontWeight: pathname === link.to ? 500 : 400,
                  borderBottom: pathname === link.to ? "1px solid #1A1A1A" : "none",
                  paddingBottom: pathname === link.to ? "1px" : "0",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleBooking}
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
                fontFamily: "inherit",
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
              Записаться
            </button>
          </nav>

          {/* Гамбургер (мобиль) */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="site-nav-burger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
            }}
            aria-label="Меню"
          >
            <span style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#2C2C2C",
              transition: "all 0.3s ease",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block",
              width: "16px",
              height: "1.5px",
              background: "#2C2C2C",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#2C2C2C",
              transition: "all 0.3s ease",
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        {/* Мобильное меню-аккордеон */}
        <div
          className="site-nav-mobile"
          style={{
            maxHeight: menuOpen ? "320px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
            borderTop: menuOpen ? "1px solid rgba(0,0,0,0.06)" : "none",
            background: "rgba(250,249,247,0.97)",
          }}
        >
          <div style={{ padding: "8px 24px 28px", display: "flex", flexDirection: "column", gap: "2px" }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  color: pathname === link.to ? "#1A1A1A" : "#5A5A5A",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  display: "block",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleBooking}
              style={{
                marginTop: "20px",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "#2C2C2C",
                border: "none",
                padding: "16px 0",
                cursor: "pointer",
                color: "#FAF9F7",
                fontFamily: "inherit",
                width: "100%",
              }}
            >
              Записаться на приём
            </button>
          </div>
        </div>
      </header>

      <style>{`
        .site-nav-desktop { display: none !important; }
        .site-nav-burger { display: flex !important; }
        .site-nav-mobile { display: block; }
        @media (min-width: 640px) {
          .site-nav-desktop { display: flex !important; }
          .site-nav-burger { display: none !important; }
          .site-nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}