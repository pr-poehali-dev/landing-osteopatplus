import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Activity" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-heading font-bold text-primary">Остеопат<span className="text-accent">+</span></h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О специалисте</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90">
            Записаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Остеопат с 17-летним опытом
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Забота о вашем здоровье и самочувствии. Принимаю офисных сотрудников, спортсменов и беременных. 
                Индивидуальный подход, безопасные методики, видимый результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Записаться на консультацию
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/79000000000', '_blank')}
                  className="text-lg px-8"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/7b36ae29-bc2c-4161-aaa0-9f84036d4d20.jpg" 
                alt="Остеопат Сергей"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/30d320a6-478a-4f52-a1d7-f8e146460f1f.jpg" 
                alt="Кабинет остеопата"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">О специалисте</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Сергей Иванович</strong> — врач-остеопат с 17-летним опытом работы. 
                  Член Российской остеопатической ассоциации.
                </p>
                <p>
                  За годы практики помог тысячам пациентов избавиться от болей в спине, шее, улучшить осанку 
                  и общее самочувствие. Специализируется на работе с офисными сотрудниками, спортсменами 
                  и беременными женщинами.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">17 лет</div>
                      <div className="text-sm">практики</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">3000+</div>
                      <div className="text-sm">пациентов</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">Автор курсов</div>
                      <div className="text-sm">Док диалог</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-foreground">Сертификат</div>
                      <div className="text-sm">РОА</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-4">Для кого</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Остеопатия помогает разным категориям пациентов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Офисные сотрудники</h3>
                <p className="text-muted-foreground">
                  Снимаем боли в спине, шее и мышечное напряжение от сидячей работы. 
                  Восстанавливаем правильную осанку.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Dumbbell" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Спортсмены</h3>
                <p className="text-muted-foreground">
                  Восстанавливаем мышцы и суставы после тренировок. 
                  Улучшаем спортивные результаты и предотвращаем травмы.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">Беременные</h3>
                <p className="text-muted-foreground">
                  Безопасные методики для поддержки здоровья мамы и малыша. 
                  Помогаем подготовиться к родам.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-4">Методы работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Эффективные техники остеопатии
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground text-sm">
                Каждый пациент уникален, подбираем методику под ваши задачи
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Комплексная диагностика</h3>
              <p className="text-muted-foreground text-sm">
                Находим истинную причину проблемы, а не только симптомы
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Эффективные техники</h3>
              <p className="text-muted-foreground text-sm">
                Применяем проверенные мягкие методы мануальной терапии
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Video" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Онлайн-консультации</h3>
              <p className="text-muted-foreground text-sm">
                Удобный формат для первичной консультации и рекомендаций
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">Отзывы пациентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Анна К.</div>
                    <div className="text-sm text-muted-foreground">Офисный сотрудник</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Обратилась с болями в шее после работы за компьютером. После трёх сеансов боль полностью ушла. 
                  Сергей Иванович — настоящий профессионал!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий М.</div>
                    <div className="text-sm text-muted-foreground">Спортсмен</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Занимаюсь кроссфитом, постоянно были проблемы со спиной. После курса остеопатии восстановился 
                  быстрее обычного и улучшил результаты.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Елена С.</div>
                    <div className="text-sm text-muted-foreground">Беременная</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Во время беременности появились боли в пояснице. Сергей помог безопасными методами, 
                  самочувствие значительно улучшилось. Рекомендую!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold text-primary mb-4">Онлайн-курсы и Док диалог</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Экосистема для специалистов в области остеопатии, мануальной терапии и реабилитации. 
                  Обучающие курсы, инструменты для работы и профессиональное сообщество.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Профессиональные обучающие курсы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Инструменты для специалистов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Сообщество практиков</span>
                  </li>
                </ul>
                <Button className="bg-primary hover:bg-primary/90">
                  Узнать больше о курсах
                </Button>
              </div>
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/83e06056-2243-48bd-820e-a86a722b53a5.jpg" 
                  alt="Обучение остеопатии"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking-form" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-4">Записаться на приём</h2>
            <p className="text-center mb-8 text-white/90 text-lg">
              Оставьте заявку, и мы свяжемся с вами для подбора удобного времени
            </p>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (900) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Комментарий (необязательно)</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или вопрос"
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90">
                      Записаться онлайн
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => window.open('https://wa.me/79000000000', '_blank')}
                      className="flex-1"
                    >
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Сколько длится сеанс остеопатии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стандартный сеанс длится 60 минут. Первичная консультация может занять до 90 минут, 
                  так как включает детальную диагностику и сбор анамнеза.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Безопасно ли для беременных?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, остеопатия абсолютно безопасна для беременных на любом сроке. Применяются специальные 
                  мягкие техники, которые помогают снять напряжение и подготовить тело к родам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Можно ли получить онлайн-консультацию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, доступны онлайн-консультации для первичной диагностики, разбора проблемы и получения 
                  рекомендаций. Для практической работы необходим очный приём.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Как попасть на курсы «Док диалог»?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Курсы доступны для специалистов в области остеопатии и мануальной терапии. 
                  Свяжитесь с нами через форму записи или WhatsApp для получения подробной информации о программах обучения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Сколько сеансов потребуется?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Количество сеансов индивидуально и зависит от проблемы. В среднем курс составляет 3-5 сеансов. 
                  После первой консультации составляется персональный план лечения.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">OsteopatPlus</h3>
              <p className="text-white/80 mb-4">
                Остеопатия с 17-летним опытом. Забота о вашем здоровье.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <Icon name="Phone" size={18} className="mt-1" />
                  <span>+7 (900) 000-00-00</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Mail" size={18} className="mt-1" />
                  <span>info@osteopatplus.ru</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={18} className="mt-1" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Навигация</h4>
              <nav className="space-y-2 text-white/80">
                <a href="#about" className="block hover:text-white transition-colors">О специалисте</a>
                <a href="#services" className="block hover:text-white transition-colors">Услуги</a>
                <a href="#reviews" className="block hover:text-white transition-colors">Отзывы</a>
                <a href="#booking-form" className="block hover:text-white transition-colors">Записаться</a>
              </nav>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 OsteopatPlus. Все права защищены. | <a href="#" className="hover:text-white">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;