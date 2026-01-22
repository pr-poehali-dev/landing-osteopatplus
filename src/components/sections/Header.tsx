import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header = ({ onBookingClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 C14 4 8 10 8 18 C8 24 12 28 16 32 L18 34 C20 36 22 38 24 40 C26 38 28 36 30 34 L32 32 C36 28 40 24 40 18 C40 10 34 4 24 4 Z" className="fill-primary"/>
              <circle cx="24" cy="18" r="4" fill="white"/>
              <path d="M18 18 L24 24 L30 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-lg sm:text-2xl font-heading font-extrabold text-primary">Остеопат<span className="text-accent">+</span></h1>
          </div>

          <nav className="hidden lg:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium">О специалисте</a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Контакты</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button onClick={onBookingClick} className="bg-accent hover:bg-accent/90 transition-all duration-300 font-semibold text-sm sm:text-base px-3 sm:px-4 py-2">
              Записаться
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                О специалисте
              </a>
              <a 
                href="#services" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                Услуги
              </a>
              <a 
                href="#reviews" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                Отзывы
              </a>
              <a 
                href="#contacts" 
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;