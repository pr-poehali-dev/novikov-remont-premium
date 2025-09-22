import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-2xl text-primary">
            Novikov Group
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/c21763e2-cdd0-4f1c-aafe-54c2480f0f0a.jpg" 
            alt="Luxury interior design" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 text-primary border-primary bg-background/80 backdrop-blur-sm">
              10 лет на рынке
            </Badge>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Novikov Group
            </h1>
            <p className="font-montserrat text-xl md:text-2xl text-primary mb-6">
              Ремонт под ключ премиум качества
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Строим гармонию, создаем уют.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-8">
              О нас
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              С 10-летним опытом на рынке, Novikov Group предлагает услуги по ремонту под ключ, 
              которые превратят ваше пространство в идеальное место для жизни. Мы понимаем, 
              что ремонт — это важный шаг, и наша задача — сделать его максимально комфортным для вас. 
              Доверяя нам, вы можете быть уверены в высоком качестве работы и внимании к деталям.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-8">
              Наши услуги
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Ремонт под ключ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Полный цикл работ от проектирования до реализации
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Установка мебели</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Поможем выбрать и установить всё необходимое для вашего комфорта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Клининг</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Тщательная уборка вашего нового пространства после ремонта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat">Управляющая компания</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Возьмем вашу недвижимость под управление для вашего комфорта
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-8">
              Почему выбирают Novikov Group?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Star" size={40} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Премиум качество</h3>
              <p className="text-muted-foreground">
                Высокие стандарты качества в каждом проекте
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Settings" size={40} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Полный сервис</h3>
              <p className="text-muted-foreground">
                От идеи до воплощения - все в одних руках
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="User" size={40} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Учитываем все ваши пожелания и потребности
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Опытная команда</h3>
              <p className="text-muted-foreground">
                Профессионалы с многолетним опытом работы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-8">
              Свяжитесь с нами
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
              Готовы начать свой проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="tel:89881842960" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-muted-foreground">8 (988) 184-29-60</p>
                  </CardContent>
                </Card>
              </a>

              <a href="#" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="Send" size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Telegram</h3>
                    <p className="text-muted-foreground">Напишите нам</p>
                  </CardContent>
                </Card>
              </a>

              <a href="#" className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground">Связаться</p>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="text-center mb-8">
              <h3 className="font-montserrat font-semibold text-xl mb-6">Следите за нами:</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Instagram" size={24} className="text-white" />
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground">@chef_ivan_novikov</p>
                </a>
                <a href="#" className="group">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={24} className="text-white" />
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground">Иван Новиков</p>
                </a>
              </div>
            </div>

            <Button size="lg" className="text-lg px-12 py-6">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="font-montserrat font-bold text-2xl mb-6">Novikov Group</div>
            <p className="text-lg mb-6">Ваш надежный партнер в создании идеального пространства</p>
            <p className="text-sm opacity-80">
              Доверьте нам заботу о вашем ремонте, и мы сделаем всё, чтобы вы остались довольны!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;