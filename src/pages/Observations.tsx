import { FadeIn } from "./premium/PremiumUtils";
import PremiumFooter from "./premium/PremiumFooter";
import SiteHeader from "@/components/SiteHeader";
import { useSeo } from "@/hooks/useSeo";

const notes = [
  "Большинство работает с симптомами. Я работаю с причиной состояния.",
  "Тело не врёт. Оно точно показывает, в каком напряжении вы живёте.",
  "Вопрос не в том, где болит. Вопрос — почему это стало нормой.",
  "Разовое облегчение — это не результат. Результат — когда состояние не откатывается.",
  "Если постоянно «нужно расслабляться» — значит система изначально работает неправильно.",
  "Я не исправляю тело. Я возвращаю ему состояние, в котором оно работает без перегрузки.",
  "Сильное состояние — это не усилие. Это отсутствие лишнего напряжения.",
  "Боль — это не враг. Это сигнал, который тело посылает, когда его давно не слышали.",
  "Хроническое напряжение не уходит само. Его нужно распознать и снять осознанно.",
];

const rotations = ["-1.2deg", "1.5deg", "-0.7deg", "1.1deg", "-1.8deg", "0.9deg", "-1.3deg", "1.0deg", "-0.6deg"];
const offsets = ["-2px", "3px", "-1px", "2px", "-3px", "1px", "-2px", "3px", "-1px"];

export default function Observations() {
  useSeo({
    title: "Наблюдения из практики — Остеопат Сергей Водопьянов",
    description: "Наблюдения остеопата из многолетней практики: о теле, напряжении, состоянии и причинах дискомфорта. Частная практика Сергея Водопьянова в Москве.",
    ogTitle: "Наблюдения из практики — Сергей Водопьянов",
    ogDescription: "О теле, напряжении и причинах дискомфорта — из многолетней частной практики остеопата в Москве.",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF9F7",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <SiteHeader />

      {/* CONTENT */}
      <div style={{ paddingTop: "100px", paddingBottom: "80px", maxWidth: "1100px", margin: "0 auto", padding: "100px 24px 80px" }}>
        <FadeIn>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0A0A0", marginBottom: "16px" }}>
            Из практики
          </p>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#1A1A1A",
            marginBottom: "64px",
          }}>
            Наблюдения
          </h1>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "32px",
        }}>
          {notes.map((text, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                style={{
                  background: i % 3 === 0 ? "#FFFEF5" : i % 3 === 1 ? "#F5FAF5" : "#FFF8F5",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "2px 4px 18px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)",
                  padding: "36px 32px 40px",
                  transform: `rotate(${rotations[i]}) translateY(${offsets[i]})`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  position: "relative",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 12px 32px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = `rotate(${rotations[i]}) translateY(${offsets[i]})`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "2px 4px 18px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                {/* Имитация скрепки/линий тетради */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(135deg, #C5B9A8 0%, #8A7D6B 100%)",
                }} />
                <div style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#C5B9A8",
                  marginBottom: "20px",
                  fontWeight: 500,
                }}>
                  0{i + 1}
                </div>
                <p style={{
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "#2C2C2C",
                  margin: 0,
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}>
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
}