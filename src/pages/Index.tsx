import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

const Index = () => {
  const scrollToForm = () => {
    window.open('https://t.me/SergeuVodopianov', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onBookingClick={scrollToForm} />
      <HeroSection onBookingClick={scrollToForm} />
      <AboutSection onBookingClick={scrollToForm} />
      <ReviewsSection />
    </div>
  );
};

export default Index;
