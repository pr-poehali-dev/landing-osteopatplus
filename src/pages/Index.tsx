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
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 glass z-50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <Icon name="Activity" className="text-white" size={26} />
            </div>
            <h1 className="text-2xl font-heading font-extrabold text-primary">Остеопат<span className="text-accent">+</span></h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium">О специалисте</a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-all duration-300 font-medium">Контакты</a>
          </nav>
          <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90 transition-all duration-300 font-semibold">
            Записаться
          </Button>
        </div>
      </header>

      <section className="pt-36 pb-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                ✨ 17 лет опыта
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] text-foreground">
                Остеопатия<br/>
                <span className="text-primary">для вашего здоровья</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Индивидуальный подход к офисным сотрудникам, спортсменам и беременным. 
                Безопасные методики с доказанной эффективностью.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 transition-all duration-300 text-lg px-10 py-7 font-semibold">
                  Записаться на консультацию
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/79000000000', '_blank')}
                  className="text-lg px-10 py-7 font-semibold border-2 hover:bg-primary/5"
                >
                  <Icon name="MessageCircle" size={22} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative">
              <img 
                src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/7b36ae29-bc2c-4161-aaa0-9f84036d4d20.jpg" 
                alt="Остеопат Сергей"
                className="rounded-3xl shadow-2xl w-full relative premium-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white relative">
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
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
                💼 Профессионал
              </div>
              <h2 className="text-5xl font-heading font-extrabold mb-8 text-primary">
                О специалисте
              </h2>
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

      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              🎯 Целевая аудитория
            </div>
            <h2 className="text-5xl font-heading font-extrabold mb-4 text-primary">
              Для кого
            </h2>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Остеопатия помогает разным категориям пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="premium-card hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name="Briefcase" className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-foreground">Офисные сотрудники</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Снимаем боли в спине, шее и мышечное напряжение от сидячей работы. 
                  Восстанавливаем правильную осанку.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name="Dumbbell" className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-foreground">Спортсмены</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Восстанавливаем мышцы и суставы после тренировок. 
                  Улучшаем спортивные результаты и предотвращаем травмы.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name="Heart" className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-foreground">Беременные</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Безопасные методики для поддержки здоровья мамы и малыша. 
                  Помогаем подготовиться к родам.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              ✨ Преимущества
            </div>
            <h2 className="text-5xl font-heading font-extrabold mb-4 text-primary">
              Методы работы
            </h2>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Эффективные техники остеопатии
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
              <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="User" className="text-accent" size={44} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Индивидуальный подход</h3>
              <p className="text-muted-foreground text-sm">
                Каждый пациент уникален, подбираем методику под ваши задачи
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
              <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" className="text-accent" size={44} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Комплексная диагностика</h3>
              <p className="text-muted-foreground text-sm">
                Находим истинную причину проблемы, а не только симптомы
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
              <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" className="text-accent" size={44} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Эффективные техники</h3>
              <p className="text-muted-foreground text-sm">
                Применяем проверенные мягкие методы мануальной терапии
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
              <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Video" className="text-accent" size={44} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Онлайн-консультации</h3>
              <p className="text-muted-foreground text-sm">
                Удобный формат для первичной консультации и рекомендаций
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 transition-all duration-300 text-lg px-10 py-7 font-semibold">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              💙 Отзывы
            </div>
            <h2 className="text-5xl font-heading font-extrabold mb-4 text-primary">
              Мнения пациентов
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                    <Icon name="User" className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Анна К.</div>
                    <div className="text-sm text-muted-foreground">Офисный сотрудник</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Обратилась с болями в шее после работы за компьютером. После трёх сеансов боль полностью ушла. 
                  Сергей Иванович — настоящий профессионал!
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                    <Icon name="User" className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Дмитрий М.</div>
                    <div className="text-sm text-muted-foreground">Спортсмен</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Занимаюсь кроссфитом, постоянно были проблемы со спиной. После курса остеопатии восстановился 
                  быстрее обычного и улучшил результаты.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                    <Icon name="User" className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Елена С.</div>
                    <div className="text-sm text-muted-foreground">Беременная</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Во время беременности появились боли в пояснице. Сергей помог безопасными методами, 
                  самочувствие значительно улучшилось. Рекомендую!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
                  🎓 Образование
                </div>
                <h2 className="text-5xl font-heading font-extrabold mb-6 text-primary">
                  Онлайн-курсы<br/>
                  <span className="text-accent">Док диалог</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Экосистема для специалистов в области остеопатии, мануальной терапии и реабилитации. 
                  Обучающие курсы, инструменты для работы и профессиональное сообщество.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center mt-1">
                      <Icon name="CheckCircle" className="text-white" size={16} />
                    </div>
                    <span className="text-lg">Профессиональные обучающие курсы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center mt-1">
                      <Icon name="CheckCircle" className="text-white" size={16} />
                    </div>
                    <span className="text-lg">Инструменты для специалистов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center mt-1">
                      <Icon name="CheckCircle" className="text-white" size={16} />
                    </div>
                    <span className="text-lg">Сообщество практиков</span>
                  </li>
                </ul>
                <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 text-lg px-10 py-7 font-semibold">
                  Узнать больше о курсах
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/83e06056-2243-48bd-820e-a86a722b53a5.jpg" 
                  alt="Обучение остеопатии"
                  className="rounded-3xl shadow-2xl w-full relative premium-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking-form" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-4">
                📞 Запись
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-4">Записаться на приём</h2>
              <p className="text-center text-white/90 text-xl">
                Оставьте заявку, и мы свяжемся с вами для подбора удобного времени
              </p>
            </div>
            <Card className="premium-card">
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 transition-all duration-300 text-lg py-7 font-semibold">
                      Записаться онлайн
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => window.open('https://wa.me/79000000000', '_blank')}
                      className="flex-1 border-2 hover:bg-primary/5 text-lg py-7 font-semibold"
                    >
                      <Icon name="MessageCircle" size={22} className="mr-2" />
                      Написать в WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
                ❓ FAQ
              </div>
              <h2 className="text-5xl font-heading font-extrabold mb-4">
                <span className="text-gradient">Частые вопросы</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Сколько длится сеанс остеопатии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стандартный сеанс длится 60 минут. Первичная консультация может занять до 90 минут, 
                  так как включает детальную диагностику и сбор анамнеза.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Безопасно ли для беременных?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, остеопатия абсолютно безопасна для беременных на любом сроке. Применяются специальные 
                  мягкие техники, которые помогают снять напряжение и подготовить тело к родам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Можно ли получить онлайн-консультацию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, доступны онлайн-консультации для первичной диагностики, разбора проблемы и получения 
                  рекомендаций. Для практической работы необходим очный приём.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Как попасть на курсы «Док диалог»?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Курсы доступны для специалистов в области остеопатии и мануальной терапии. 
                  Свяжитесь с нами через форму записи или WhatsApp для получения подробной информации о программах обучения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
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

      <footer id="contacts" className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-md">
                  <Icon name="Activity" className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-heading font-extrabold">Остеопат<span className="text-accent">+</span></h3>
              </div>
              <p className="text-white/80 mb-6 text-lg">
                Остеопатия с 17-летним опытом. Забота о вашем здоровье.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300">
                  <Icon name="Instagram" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300">
                  <Icon name="Send" size={22} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xl mb-6">Контакты</h4>
              <div className="space-y-4 text-white/80 text-lg">
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="Phone" size={22} className="mt-1" />
                  <span>+7 (900) 000-00-00</span>
                </div>
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="Mail" size={22} className="mt-1" />
                  <span>info@osteopatplus.ru</span>
                </div>
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="MapPin" size={22} className="mt-1" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xl mb-6">Навигация</h4>
              <nav className="space-y-3 text-white/80 text-lg">
                <a href="#about" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">О специалисте</a>
                <a href="#services" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">Услуги</a>
                <a href="#reviews" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">Отзывы</a>
                <a href="#booking-form" className="block hover:text-white transition-colors hover:translate-x-1 duration-200">Записаться</a>
              </nav>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p className="text-base">© 2024 Остеопат+. Все права защищены. | <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;