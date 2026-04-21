import { FadeIn } from "./PremiumUtils";

export default function PremiumContent() {
  return (
    <>
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
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#8A8A8A", marginTop: "24px" }}>
              Член{" "}
              <a href="https://assotsiatsiya-osteopatov.ru/user/svodopianoff/" target="_blank" rel="noopener noreferrer" style={{ color: "#8A8A8A", textDecoration: "underline" }}>
                Ассоциации остеопатов
              </a>{" "}
              и мануальных практиков
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="pm-photo-block">
              <div style={{ position: "relative" }}>

                <div
                  className="pm-photo-img"
                  style={{
                    borderRadius: "50%",
                    display: "block",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/c40d2ccf-ac94-475b-bb1b-8a52fa8ab6de.jpg"
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/25414d0b-888a-4344-88e4-b7e28ca9520d.png"
                    alt="Специалист"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", paddingTop: "10px", fontSize: "13px", letterSpacing: "0.06em", color: "#4A4A4A" }}>
                  Сергей Водопьянов
                </div>
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
    </>
  );
}