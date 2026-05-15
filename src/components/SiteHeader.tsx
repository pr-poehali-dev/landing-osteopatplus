import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SiteHeaderProps {
  onScrollToContact?: () => void;
  dark?: boolean;
}

const NAV_LINKS = [
  { label: "Обо мне", to: "/about" },
  { label: "Формат работы", to: "/format" },
  { label: "Стоимость", to: "/pricing" },
  { label: "Сопровождение", to: "/vip" },
  { label: "Наблюдения", to: "/observations" },
];

export default function SiteHeader({ onScrollToContact, dark = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const bg = dark ? "rgba(15,15,15,0.92)" : "rgba(250,249,247,0.92)";
  const border = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const logoText = dark ? "#C5B9A8" : "#3A3A3A";
  const navActive = dark ? "#F0ECE7" : "#1A1A1A";
  const navDefault = dark ? "#7A7A7A" : "#6A6A6A";
  const btnBorder = dark ? "rgba(232,228,223,0.25)" : "#2C2C2C";
  const btnColor = dark ? "#9A9A9A" : "#2C2C2C";
  const burgerColor = dark ? "#C5B9A8" : "#2C2C2C";
  const mobileBg = dark ? "rgba(15,15,15,0.98)" : "rgba(250,249,247,0.97)";
  const mobileBorder = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const mobileLinkColor = dark ? "#7A7A7A" : "#5A5A5A";
  const mobileActive = dark ? "#E8E4DF" : "#1A1A1A";

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
          background: bg,
          backdropFilter: "blur(12px)",
          borderBottom: menuOpen ? "none" : `1px solid ${border}`,
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
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: dark ? "#0F0F0F" : "#FAF9F7" }} />
            </div>
            <span style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: logoText, fontWeight: 500 }}>
              Остеопат Плюс
            </span>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "24px" }} className="site-nav-desktop">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  color: pathname === link.to ? navActive : navDefault,
                  textDecoration: "none",
                  fontWeight: pathname === link.to ? 500 : 400,
                  borderBottom: pathname === link.to ? `1px solid ${navActive}` : "none",
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
                letterSpacing: "0.06em",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: navDefault,
                fontFamily: "inherit",
                padding: 0,
                transition: "color 0.2s",
              }}
            >
              Контакты
            </button>
            <button
              onClick={handleBooking}
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                background: "none",
                border: `1px solid ${btnBorder}`,
                padding: "9px 18px",
                cursor: "pointer",
                color: btnColor,
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = dark ? "#E8E4DF" : "#2C2C2C";
                btn.style.color = dark ? "#0F0F0F" : "#FAF9F7";
                btn.style.borderColor = dark ? "#E8E4DF" : "#2C2C2C";
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.background = "none";
                btn.style.color = btnColor;
                btn.style.borderColor = btnBorder;
              }}
            >
              Записаться
            </button>
          </nav>

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
              display: "block", width: "22px", height: "1.5px",
              background: burgerColor, transition: "all 0.3s ease",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "16px", height: "1.5px",
              background: burgerColor, transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: burgerColor, transition: "all 0.3s ease",
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        <div
          className="site-nav-mobile"
          style={{
            maxHeight: menuOpen ? "520px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
            borderTop: menuOpen ? `1px solid ${mobileBorder}` : "none",
            background: mobileBg,
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
                  color: pathname === link.to ? mobileActive : mobileLinkColor,
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: `1px solid ${mobileBorder}`,
                  display: "block",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMenuOpen(false); handleBooking({ preventDefault: () => {} } as React.MouseEvent); }}
              style={{
                fontSize: "20px",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                color: mobileLinkColor,
                background: "none",
                border: "none",
                borderBottom: `1px solid ${mobileBorder}`,
                padding: "14px 0",
                textAlign: "left",
                width: "100%",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "color 0.2s",
              }}
            >
              Контакты
            </button>
            <button
              onClick={handleBooking}
              style={{
                marginTop: "20px",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: dark ? "#E8E4DF" : "#2C2C2C",
                border: "none",
                padding: "16px 0",
                cursor: "pointer",
                color: dark ? "#0F0F0F" : "#FAF9F7",
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