import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PremiumFooter from "./premium/PremiumFooter";

const NotFoundCustom = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Страница не найдена — Остеопат Сергей Водопьянов";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Запрошенная страница не найдена. Вернитесь на главную страницу частной практики остеопата Сергея Водопьянова.");
    return () => {
      document.title = "Остеопат в Москве — частная практика Сергея Водопьянова";
      if (desc) desc.setAttribute("content", "Частная остеопатическая практика в Москве на Новослободской. Работаю с болями в спине, шее, головными болями, восстановлением после травм. Запись на приём.");
    };
  }, [location.pathname]);

  return (
    <div style={{ minHeight: "100vh", background: "#FAF9F7", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", display: "flex", flexDirection: "column" }}>
      <header style={{
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
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
        </Link>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <p style={{
            fontSize: "clamp(80px, 15vw, 140px)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            color: "#E8E4DE",
            lineHeight: 1,
            margin: "0 0 24px",
          }}>
            404
          </p>
          <h1 style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#1A1A1A",
            marginBottom: "16px",
          }}>
            Страница не найдена
          </h1>
          <p style={{ fontSize: "15px", color: "#8A8A8A", lineHeight: 1.75, marginBottom: "48px" }}>
            Возможно, адрес изменился или страница была удалена.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "#1A1A1A",
              color: "#FAF9F7",
              padding: "18px 48px",
              textDecoration: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            На главную
          </Link>
        </div>
      </div>

      <PremiumFooter />
    </div>
  );
};

export default NotFoundCustom;