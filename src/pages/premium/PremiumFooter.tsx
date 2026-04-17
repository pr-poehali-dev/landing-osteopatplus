export default function PremiumFooter() {
  return (
    <footer style={{ padding: "48px 24px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
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
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FAF9F7" }} />
              </div>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", letterSpacing: "0.04em" }}>Private Practice</span>
            </div>
            <p style={{ fontSize: "13px", color: "#9A9A9A", lineHeight: 1.7 }}>Забота о вашем теле.</p>
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
  );
}
