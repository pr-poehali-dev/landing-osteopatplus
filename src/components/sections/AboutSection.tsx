import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  onBookingClick: () => void;
}

const AboutSection = ({ onBookingClick }: AboutSectionProps) => {
  return (
    <>
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
                  src="https://cdn.poehali.dev/files/65e0b7d0-1edb-449a-af2e-81099697b9bd.jpg"
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
            <Button onClick={onBookingClick} size="lg" className="bg-accent hover:bg-accent/90 transition-all duration-300 text-lg px-10 py-7 font-semibold">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
