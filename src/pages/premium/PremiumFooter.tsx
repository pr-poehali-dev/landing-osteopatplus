export default function PremiumFooter({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#0A0A0A" : "transparent";
  const borderColor = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.07)";
  const logoInner = dark ? "#0A0A0A" : "#FAF9F7";
  const title = dark ? "#C5B9A8" : "#1A1A1A";
  const sub = dark ? "#3A3A3A" : "#9A9A9A";
  const label = dark ? "#2A2A2A" : "#B0B0B0";
  const link = dark ? "#3A3A3A" : "#5A5A5A";
  const meta = dark ? "#2A2A2A" : "#C0C0C0";
  const tgBorder = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.15)";

  return (
    <footer style={{ padding: "48px 24px", borderTop: `1px solid ${borderColor}`, background: bg }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="pm-footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: logoInner }} />
              </div>
              <span style={{ fontSize: "13px", fontWeight: 500, color: title, letterSpacing: "0.04em" }}>Остеопат Плюс</span>
            </div>
            <p style={{ fontSize: "13px", color: sub, lineHeight: 1.7 }}>Забота о вашем теле.</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: label, marginBottom: "16px" }}>Контакты</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="tel:+79029007474" style={{ fontSize: "13px", color: link, textDecoration: "none" }}>+7 (902) 900-74-74</a>
              <a href="mailto:svodopianoff@yandex.ru" style={{ fontSize: "13px", color: link, textDecoration: "none" }}>svodopianoff@yandex.ru</a>
              <span style={{ fontSize: "13px", color: link }}>Москва, ул. Новослободская, д. 14/19 стр. 1</span>
            </div>
          </div>
          <div className="pm-footer-right">

            <p style={{ fontSize: "12px", color: meta, marginBottom: "8px" }}>© 2026 Остеопат+. Все права защищены.</p>
            <a href="/politics" style={{ fontSize: "12px", color: meta, textDecoration: "none" }}>Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}