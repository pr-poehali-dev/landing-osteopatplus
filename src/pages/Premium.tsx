import { useEffect } from "react";
import { PREMIUM_STYLES } from "./premium/PremiumUtils";
import PremiumHero from "./premium/PremiumHero";
import PremiumContent from "./premium/PremiumContent";
import PremiumContact from "./premium/PremiumContact";

export default function Premium() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Остеопат в Москве — частная практика Сергея Водопьянова";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Частная остеопатическая практика в Москве на Новослободской. Работаю с болями в спине, шее, головными болями, восстановлением после травм. Первичный приём от 10 000 ₽. Запись по предварительному согласованию.");
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        background: "#FAF9F7",
        color: "#2C2C2C",
        overflowX: "hidden",
      }}
    >
      <style>{PREMIUM_STYLES}</style>
      <PremiumHero onScrollToContact={scrollToContact} />
      <PremiumContent onScrollToContact={scrollToContact} />
      <PremiumContact />
    </div>
  );
}