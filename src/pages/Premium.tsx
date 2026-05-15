import { PREMIUM_STYLES } from "./premium/PremiumUtils";
import PremiumHero from "./premium/PremiumHero";
import PremiumContent from "./premium/PremiumContent";
import PremiumContact from "./premium/PremiumContact";
import { useSeo } from "@/hooks/useSeo";

export default function Premium() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useSeo({
    title: "Остеопат в Москве — частная практика Сергея Водопьянова",
    description: "Частная остеопатическая практика в Москве на Новослободской. Работаю с болями в спине, шее, головными болями, восстановлением после травм. Первичный приём от 10 000 ₽. Запись по предварительному согласованию.",
    ogTitle: "Остеопат Сергей Водопьянов — частная практика в Москве",
    ogDescription: "Индивидуальный подход. Ограниченный формат. Приём по предварительной записи на Новослободской.",
  });

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