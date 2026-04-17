import { PREMIUM_STYLES } from "./premium/PremiumUtils";
import PremiumHero from "./premium/PremiumHero";
import PremiumContent from "./premium/PremiumContent";
import PremiumContact from "./premium/PremiumContact";

export default function Premium() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
      <PremiumContent />
      <PremiumContact />
    </div>
  );
}
