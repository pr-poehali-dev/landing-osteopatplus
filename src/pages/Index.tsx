import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Icon from '@/components/ui/icon';

const Index = () => {
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

  const scrollToForm = () => {
    window.open('https://t.me/SergeuVodopianov', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 glass z-50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 C14 4 8 10 8 18 C8 24 12 28 16 32 L18 34 C20 36 22 38 24 40 C26 38 28 36 30 34 L32 32 C36 28 40 24 40 18 C40 10 34 4 24 4 Z" className="fill-primary"/>
              <circle cx="24" cy="18" r="4" fill="white"/>
              <path d="M18 18 L24 24 L30 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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

      <section className="pt-36 pb-24 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6 shadow-md">
                ✨ 17 лет опыта
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] text-foreground">
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Для вашего здоровья</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Индивидуальный подход к офисным сотрудникам, спортсменам и беременным. 
                Безопасные методики с доказанной эффективностью.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 transition-all duration-300 text-lg px-10 py-7 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                  Записаться на консультацию
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/2291e50a-e4f9-49ca-908b-8a23aef3bb4f.png" 
                alt="Остеопат Сергей"
                className="rounded-3xl shadow-2xl w-full premium-shadow relative z-10 border-4 border-white"
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
                Обо мне
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Сергей Водопьянов</strong> — остеопат с 17-летним опытом работы. 
                  Член Российской остеопатической ассоциации.
                </p>
                <p>
                  За годы практики работал с тысячами людей, помогая улучшить самочувствие при болях в спине и шее, 
                  восстановить осанку. Специализируется на работе с офисными сотрудниками, спортсменами 
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
                      <div className="text-sm">консультаций</div>
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
              Остеопатия помогает разным людям улучшить качество жизни
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="premium-card hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-3xl m-6 mb-0">
                <img 
                  src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/fa75eb48-65ff-4eee-a704-9786481f6155.jpg"
                  alt="Офисные сотрудники"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-3xl border-4 border-white shadow-xl"
                />
              </div>
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-foreground">Офисные сотрудники</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Помощь при болях в спине, шее и мышечном напряжении от сидячей работы. 
                  Восстановление правильной осанки.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-3xl m-6 mb-0">
                <img 
                  src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/files/b969ad8e-844c-4612-8db2-acecc79725cb.jpg"
                  alt="Спортсмены"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-3xl border-4 border-white shadow-xl"
                />
              </div>
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-heading font-extrabold mb-4 text-foreground">Спортсмены</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Восстанавливаем мышцы и суставы после тренировок. 
                  Улучшаем спортивные результаты и предотвращаем травмы.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-3xl m-6 mb-0">
                <img 
                  src="https://cdn.poehali.dev/files/be28ce3c-c64d-42f7-ad90-5d3aa63890f1.jpg"
                  alt="Беременные"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-3xl border-4 border-white shadow-xl"
                />
              </div>
              <CardContent className="pt-8 text-center">
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
                Каждый человек уникален, подбираем методику под ваши задачи
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
              Отзывы клиентов
            </h2>
            <div className="flex justify-center mt-8">
              <a 
                href="https://yandex.ru/maps/org/osteopat_plyus/99582120415/?indoorLevel=1&ll=37.599911%2C55.781054&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=17" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="premium-card inline-flex items-center gap-4 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-primary">5.0</span>
                    <div className="flex flex-col">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={18} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground mt-1">Яндекс.Карты</span>
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">35+</div>
                    <div className="text-sm text-muted-foreground">отзывов</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/01432468-6f5d-4d2e-b058-0d32fc2ff86a.jpg"
                    alt="Юля Р."
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="font-bold text-lg">Юля Р.</div>
                    <div className="text-sm text-muted-foreground">Стилист</div>
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
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/9761f5f9-e3a7-422f-bee1-983732a5b5bf.jpg"
                    alt="Игорь"
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="font-bold text-lg">Игорь</div>
                    <div className="text-sm text-muted-foreground">Стилист</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Лучший специалист, отнималась рука, уже обошел пол Москвы, и отчаялся. Но тут чудо — после первой процедуры почувствовал себя как новый! Рекомендую от души
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/97907146-3786-4bb9-932c-87581d3ad09d/bucket/003958fd-5fbc-4812-8876-0d63c529c5b8.jpg"
                    alt="Yulia Lukyanenko"
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="font-bold text-lg">Yulia Lukyanenko</div>
                    <div className="text-sm text-muted-foreground">Маркетолог</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-amber-400 fill-amber-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Была не раз у Сергея, и даже беременную меня он спасал от болей и спазмов! Очень рекомендую его как специалиста своего дела. Сергей ставит на ноги прям 👍🏼
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://yandex.ru/maps/org/osteopat_plyus/99582120415/reviews/?indoorLevel=1&ll=37.599911%2C55.781054&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 text-lg font-semibold group"
            >
              Читать все отзывы
              <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
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
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <Checkbox 
                      id="policy"
                      checked={agreedToPolicy}
                      onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="policy" className="text-sm text-foreground leading-relaxed cursor-pointer">
                      Я согласен с{' '}
                      <a href="/politics" target="_blank" className="text-primary hover:text-accent underline font-medium">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !agreedToPolicy}
                    className="w-full bg-accent hover:bg-accent/90 transition-all duration-300 text-lg py-7 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Отправка...' : 'Записаться онлайн'}
                  </Button>
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
              <h2 className="text-5xl font-heading font-extrabold mb-4 text-primary">
                Частые вопросы
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left">
                  Сколько длится сеанс остеопатии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left">
                  Стандартный сеанс длится 60 минут. Первичная консультация может занять до 90 минут, 
                  так как включает детальную диагностику и сбор анамнеза.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left">
                  Безопасно ли для беременных?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left">
                  Да, остеопатия абсолютно безопасна для беременных на любом сроке. Применяются специальные 
                  мягкие техники, которые помогают снять напряжение и подготовить тело к родам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left">
                  Можно ли получить онлайн-консультацию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left">
                  Да, доступны онлайн-консультации для первичной диагностики, разбора проблемы и получения 
                  рекомендаций. Для практической работы необходим очный приём.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left">
                  Как попасть на курсы «Док диалог»?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left">
                  Курсы доступны для специалистов в области остеопатии и мануальной терапии. 
                  Свяжитесь с нами через форму записи или WhatsApp для получения подробной информации о программах обучения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="premium-card border-0">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors text-left">
                  Сколько сеансов потребуется?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-left">
                  Количество сеансов индивидуально и зависит от задач. В среднем курс составляет 3-5 сеансов. 
                  После первой консультации составляется персональный план работы.
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
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4 C14 4 8 10 8 18 C8 24 12 28 16 32 L18 34 C20 36 22 38 24 40 C26 38 28 36 30 34 L32 32 C36 28 40 24 40 18 C40 10 34 4 24 4 Z" className="fill-accent"/>
                  <circle cx="24" cy="18" r="4" fill="white"/>
                  <path d="M18 18 L24 24 L30 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-heading font-extrabold">Остеопат<span className="text-accent">+</span></h3>
              </div>
              <p className="text-white/80 mb-6 text-lg">
                Остеопатия с 17-летним опытом. Забота о вашем здоровье.
              </p>
              <div className="flex gap-3">
                <a href="https://t.me/osteomanual" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300">
                  <Icon name="Send" size={22} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xl mb-6">Контакты</h4>
              <div className="space-y-4 text-white/80 text-lg">
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="Phone" size={22} className="mt-1" />
                  <a href="tel:+79029007474">+7 (902) 900-74-74</a>
                </div>
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="Mail" size={22} className="mt-1" />
                  <a href="mailto:svodopianoff@yandex.ru">svodopianoff@yandex.ru</a>
                </div>
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Icon name="MapPin" size={22} className="mt-1" />
                  <span>Москва, ул. Новослободская, д. 14/19 стр. 1</span>
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
            <p className="text-base">© 2026 Остеопат+. Все права защищены. | <a href="/politics" className="hover:text-white transition-colors">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;