import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToPolicy) {
      toast({
        title: 'Требуется согласие',
        description: 'Пожалуйста, примите политику конфиденциальности',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/955b4e10-ed02-4e78-8fb5-77bffbe148cb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время',
        });
        setFormData({ name: '', phone: '', comment: '' });
        setAgreedToPolicy(false);
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить заявку',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Проблема с подключением. Попробуйте позже.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="reviews" className="py-12 sm:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              💙 Отзывы
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-3 sm:mb-4 text-primary">
              Отзывы клиентов
            </h2>
            <div className="flex justify-center mt-6 sm:mt-8">
              <a 
                href="https://yandex.ru/maps/org/osteopat_plyus/99582120415/?indoorLevel=1&ll=37.599911%2C55.781054&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=17" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="premium-card inline-flex items-center gap-3 sm:gap-4 hover:shadow-xl transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-4xl font-bold text-primary">5.0</span>
                    <div className="flex flex-col">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={16} />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground mt-1">Яндекс.Карты</span>
                    </div>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-gray-200"></div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-bold text-foreground">35+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">отзывов</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/01432468-6f5d-4d2e-b058-0d32fc2ff86a.jpg"
                    alt="Юля Р."
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-lg">Юля Р.</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Стилист</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Сергей, благодарю вас 🙏 долгое время мучали боли, никто не мог найти решение. И только вы смогли вернуть к жизни без боли. Золотые руки ❣️
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/9761f5f9-e3a7-422f-bee1-983732a5b5bf.jpg"
                    alt="Игорь"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-lg">Игорь</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Стилист</div>
                  </div>
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Лучший специалист, отнималась рука, уже обошел пол Москвы, и отчаялся. Но тут чудо — после первой процедуры почувствовал себя как новый! Рекомендую от души
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/003958fd-5fbc-4812-8876-0d63c529c5b8.jpg"
                    alt="Yulia Lukyanenko"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-lg">Yulia Lukyanenko</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Маркетолог</div>
                  </div>
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Была не раз у Сергея, и даже беременную меня он спасал от болей и спазмов! Очень рекомендую его как специалиста своего дела. Сергей ставит на ноги прям 👍🏼
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <a 
              href="https://yandex.ru/maps/org/osteopat_plyus/99582120415/reviews/?indoorLevel=1&ll=37.599911%2C55.781054&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-base sm:text-lg font-semibold group"
            >
              Читать все отзывы
              <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-accent font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                  🎓 Образование
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 sm:mb-6 text-primary">
                  Онлайн-курсы<br/>
                  <span className="text-accent">Док диалог</span>
                </h2>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Экосистема для специалистов в области остеопатии, мануальной терапии и реабилитации. 
                  Обучающие курсы, инструменты для работы и профессиональное сообщество.
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-lg flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <Icon name="CheckCircle" className="text-white" size={14} />
                    </div>
                    <span className="text-sm sm:text-lg">Профессиональные обучающие курсы</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-lg flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <Icon name="CheckCircle" className="text-white" size={14} />
                    </div>
                    <span className="text-sm sm:text-lg">Инструменты для специалистов</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-lg flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <Icon name="CheckCircle" className="text-white" size={14} />
                    </div>
                    <span className="text-sm sm:text-lg">Сообщество практиков</span>
                  </li>
                </ul>
                <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-semibold w-full sm:w-auto">
                  Узнать больше о курсах
                </Button>
              </div>
              <div className="relative mt-8 md:mt-0">
                <img 
                  src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/83e06056-2243-48bd-820e-a86a722b53a5.jpg" 
                  alt="Обучение остеопатии"
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full relative premium-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking-form" className="py-12 sm:py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                📞 Запись
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-3 sm:mb-4">Записаться на приём</h2>
              <p className="text-center text-white/90 text-base sm:text-xl px-4">
                Оставьте заявку, и мы свяжемся с вами для подбора удобного времени
              </p>
            </div>
            <Card className="premium-card">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (900) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">Комментарий (необязательно)</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или вопрос"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={3}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <Checkbox 
                      id="policy"
                      checked={agreedToPolicy}
                      onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
                      className="mt-0.5 sm:mt-1"
                    />
                    <label htmlFor="policy" className="text-xs sm:text-sm text-foreground leading-relaxed cursor-pointer">
                      Я согласен с{' '}
                      <a href="/politics" target="_blank" className="text-primary hover:text-accent underline font-medium">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !agreedToPolicy}
                    className="w-full bg-accent hover:bg-accent/90 transition-all duration-300 text-base sm:text-lg py-5 sm:py-7 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Отправка...' : 'Записаться онлайн'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                ❓ FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-3 sm:mb-4 text-primary">
                Частые вопросы
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
              <AccordionItem value="item-1" className="premium-card border-0">
                <AccordionTrigger className="text-base sm:text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left px-4 sm:px-6">
                  Сколько длится сеанс остеопатии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left text-sm sm:text-base px-4 sm:px-6">
                  Стандартный сеанс длится 30 минут. Первичная консультация может занять до 45 минут, так как включает детальную диагностику и сбор анамнеза.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="premium-card border-0">
                <AccordionTrigger className="text-base sm:text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left px-4 sm:px-6">
                  Безопасно ли для беременных?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left text-sm sm:text-base px-4 sm:px-6">
                  Да, остеопатия абсолютно безопасна для беременных на любом сроке. Применяются специальные 
                  мягкие техники, которые помогают снять напряжение и подготовить тело к родам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="premium-card border-0">
                <AccordionTrigger className="text-base sm:text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left px-4 sm:px-6">
                  Можно ли получить онлайн-консультацию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left text-sm sm:text-base px-4 sm:px-6">
                  Да, доступны онлайн-консультации для первичной диагностики, разбора проблемы и получения 
                  рекомендаций. Для практической работы необходим очный приём.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="premium-card border-0">
                <AccordionTrigger className="text-base sm:text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left px-4 sm:px-6">
                  Как попасть на курсы «Док диалог»?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left text-sm sm:text-base px-4 sm:px-6">
                  Курсы доступны для специалистов в области остеопатии и мануальной терапии. Свяжитесь с нами через форму записи для получения подробной информации о программах обучения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="premium-card border-0">
                <AccordionTrigger className="text-base sm:text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left px-4 sm:px-6">
                  Сколько сеансов потребуется?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left text-sm sm:text-base px-4 sm:px-6">
                  Количество сеансов индивидуально и зависит от задач. В среднем курс составляет 3-5 сеансов. 
                  После первой консультации составляется персональный план работы.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4 C14 4 8 10 8 18 C8 24 12 28 16 32 L18 34 C20 36 22 38 24 40 C26 38 28 36 30 34 L32 32 C36 28 40 24 40 18 C40 10 34 4 24 4 Z" className="fill-accent"/>
                  <circle cx="24" cy="18" r="4" fill="white"/>
                  <path d="M18 18 L24 24 L30 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold">Остеопат<span className="text-accent">+</span></h3>
              </div>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-lg">
                Остеопатия с 17-летним опытом. Забота о вашем здоровье.
              </p>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://t.me/osteomanual" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg sm:text-xl mb-4 sm:mb-6">Контакты</h4>
              <div className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-lg">
                <div className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors">
                  <Icon name="Phone" size={18} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                  <a href="tel:+79029007474" className="break-all">+7 (902) 900-74-74</a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors">
                  <Icon name="Mail" size={18} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                  <a href="mailto:svodopianoff@yandex.ru" className="break-all">svodopianoff@yandex.ru</a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors">
                  <Icon name="MapPin" size={18} className="mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span>Москва, ул. Новослободская, д. 14/19 стр. 1</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg sm:text-xl mb-4 sm:mb-6">Навигация</h4>
              <nav className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-lg">
                <a href="#about" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">О специалисте</a>
                <a href="#services" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">Услуги</a>
                <a href="#reviews" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">Отзывы</a>
                <a href="#booking-form" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">Записаться</a>
              </nav>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white/70">
            <p className="text-xs sm:text-base px-4">© 2026 Остеопат+. Все права защищены. | <a href="/politics" className="hover:text-white transition-colors">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ReviewsSection;