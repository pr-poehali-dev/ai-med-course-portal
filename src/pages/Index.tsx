import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const professions = [
    {
      title: 'Врач-генетик',
      description: 'Анализирует генетические данные для диагностики и лечения наследственных заболеваний',
      icon: 'Dna',
      skills: ['Биология', 'Химия', 'Генетика'],
      ai: 'ИИ помогает анализировать геномные данные в тысячи раз быстрее',
    },
    {
      title: 'Биоинформатик',
      description: 'Обрабатывает биологические данные с помощью программирования и алгоритмов',
      icon: 'Binary',
      skills: ['Информатика', 'Биология', 'Математика'],
      ai: 'Создаёт алгоритмы машинного обучения для медицинских исследований',
    },
    {
      title: 'Врач-рентгенолог',
      description: 'Диагностирует заболевания с помощью рентгена, МРТ и КТ',
      icon: 'ScanLine',
      skills: ['Биология', 'Физика', 'Анатомия'],
      ai: 'ИИ находит патологии на снимках с точностью 95%',
    },
    {
      title: 'Нейрохирург',
      description: 'Проводит операции на головном и спинном мозге',
      icon: 'Brain',
      skills: ['Биология', 'Химия', 'Физика'],
      ai: 'ИИ помогает планировать операции и прогнозировать риски',
    },
    {
      title: 'Медицинский физик',
      description: 'Разрабатывает медицинское оборудование и методы лечения',
      icon: 'Zap',
      skills: ['Физика', 'Математика', 'Информатика'],
      ai: 'Использует ИИ для калибровки и оптимизации оборудования',
    },
    {
      title: 'Специалист по персонализированной медицине',
      description: 'Подбирает индивидуальное лечение на основе генетики и данных пациента',
      icon: 'User',
      skills: ['Биология', 'Химия', 'Информатика'],
      ai: 'ИИ анализирует миллионы комбинаций для персонального подхода',
    },
  ];

  const universities = [
    {
      name: 'МГУ им. М.В. Ломоносова',
      programs: ['Фундаментальная медицина', 'Биоинформатика', 'Биология'],
      ege: ['Биология', 'Химия', 'Русский язык'],
      score: '85-95 баллов',
    },
    {
      name: 'МФТИ',
      programs: ['Биомедицинская инженерия', 'Медицинская физика'],
      ege: ['Математика', 'Физика', 'Русский язык'],
      score: '90-100 баллов',
    },
    {
      name: 'Первый МГМУ им. И.М. Сеченова',
      programs: ['Лечебное дело', 'Педиатрия', 'Медицинская биохимия'],
      ege: ['Биология', 'Химия', 'Русский язык'],
      score: '80-95 баллов',
    },
    {
      name: 'НИУ ВШЭ',
      programs: ['Биоинформатика', 'Когнитивные науки'],
      ege: ['Математика', 'Информатика', 'Русский язык'],
      score: '85-98 баллов',
    },
  ];

  const videos = [
    {
      title: 'Как ИИ диагностирует рак',
      duration: '12:34',
      views: '234K',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    },
    {
      title: 'Будущее генной терапии',
      duration: '18:45',
      views: '189K',
      thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
    },
    {
      title: 'Нейросети в хирургии',
      duration: '15:20',
      views: '156K',
      thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
    },
    {
      title: 'Биоинформатика: с чего начать',
      duration: '22:10',
      views: '312K',
      thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800',
    },
  ];

  const aiFeatures = [
    {
      icon: 'Microscope',
      title: 'Диагностика',
      description: 'ИИ анализирует снимки и находит заболевания на ранних стадиях',
    },
    {
      icon: 'Pill',
      title: 'Разработка лекарств',
      description: 'Нейросети ускоряют поиск новых препаратов с нескольких лет до месяцев',
    },
    {
      icon: 'Activity',
      title: 'Мониторинг здоровья',
      description: 'ИИ отслеживает показатели и предупреждает о рисках',
    },
    {
      icon: 'BrainCircuit',
      title: 'Персонализация',
      description: 'Подбирает лечение индивидуально для каждого пациента',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold gradient-text">МедБудущее</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'professions', label: 'Профессии', icon: 'Briefcase' },
                { id: 'education', label: 'Образование', icon: 'GraduationCap' },
                { id: 'ai', label: 'ИИ в медицине', icon: 'Brain' },
                { id: 'videos', label: 'Видео', icon: 'Video' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        {activeSection === 'home' && (
          <section className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-6xl md:text-7xl font-black mb-6 gradient-text animate-fade-in">
                Медицина будущего
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
                Узнай о современных профессиях на стыке медицины и технологий, где искусственный
                интеллект помогает спасать жизни
              </p>
              <div className="flex gap-4 justify-center flex-wrap animate-scale-in">
                <Button
                  size="lg"
                  className="gradient-purple text-lg px-8 py-6 hover:shadow-2xl hover:scale-105 transition-all"
                  onClick={() => setActiveSection('professions')}
                >
                  <Icon name="Rocket" className="mr-2" />
                  Изучить профессии
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 hover:bg-primary/10"
                  onClick={() => setActiveSection('videos')}
                >
                  <Icon name="Play" className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-20">
              {aiFeatures.map((feature, idx) => (
                <Card
                  key={idx}
                  className="card-hover bg-card/50 backdrop-blur border-primary/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl gradient-blue mx-auto mb-4 flex items-center justify-center">
                      <Icon name={feature.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'professions' && (
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 gradient-text">Профессии будущего</h2>
              <p className="text-xl text-muted-foreground">
                Специальности на стыке медицины, технологий и искусственного интеллекта
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professions.map((prof, idx) => (
                <Card key={idx} className="card-hover bg-card/80 backdrop-blur border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl gradient-purple flex items-center justify-center mb-4">
                      <Icon name={prof.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{prof.title}</h3>
                    <p className="text-muted-foreground mb-4">{prof.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {prof.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                      <div className="flex gap-2 items-start">
                        <Icon name="Sparkles" size={18} className="text-accent mt-1 flex-shrink-0" />
                        <p className="text-sm text-accent-foreground">{prof.ai}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 gradient-text">Где учиться?</h2>
              <p className="text-xl text-muted-foreground">
                Ведущие ВУЗы России по медицинским и биотехнологическим специальностям
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {universities.map((uni, idx) => (
                <Card key={idx} className="card-hover bg-card/80 backdrop-blur border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0">
                        <Icon name="School" size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{uni.name}</h3>
                        <Badge className="gradient-purple">{uni.score}</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Icon name="BookOpen" size={18} />
                          Программы обучения:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {uni.programs.map((prog, i) => (
                            <li key={i}>{prog}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                          <Icon name="ClipboardCheck" size={18} />
                          Предметы ЕГЭ:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {uni.ege.map((subject, i) => (
                            <Badge key={i} variant="outline" className="border-secondary/50">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'ai' && (
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 gradient-text">ИИ в медицине</h2>
              <p className="text-xl text-muted-foreground">
                Как искусственный интеллект меняет здравоохранение
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="what" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="what" className="text-base">
                    Что такое ИИ?
                  </TabsTrigger>
                  <TabsTrigger value="how" className="text-base">
                    Как работает?
                  </TabsTrigger>
                  <TabsTrigger value="future" className="text-base">
                    Перспективы
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="what">
                  <Card className="bg-card/80 backdrop-blur border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl gradient-purple flex items-center justify-center flex-shrink-0">
                          <Icon name="Brain" size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-4">
                            Искусственный интеллект в медицине
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            Это компьютерные системы, которые учатся на примерах и могут выполнять
                            задачи, обычно требующие человеческого интеллекта: распознавать
                            болезни на снимках, предсказывать риски, подбирать лечение.
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            icon: 'Microscope',
                            title: 'Машинное обучение',
                            text: 'ИИ учится на тысячах примеров медицинских случаев',
                          },
                          {
                            icon: 'Eye',
                            title: 'Компьютерное зрение',
                            text: 'Анализирует рентгены, МРТ и находит патологии',
                          },
                          {
                            icon: 'MessageSquare',
                            title: 'Обработка языка',
                            text: 'Читает медкарты и исследования',
                          },
                          {
                            icon: 'TrendingUp',
                            title: 'Предиктивная аналитика',
                            text: 'Прогнозирует риски заболеваний',
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-lg bg-primary/10 border border-primary/20"
                          >
                            <div className="flex items-start gap-3">
                              <Icon name={item.icon} size={24} className="text-primary mt-1" />
                              <div>
                                <h4 className="font-bold mb-1">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="how">
                  <Card className="bg-card/80 backdrop-blur border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-bold mb-6">Как ИИ работает в медицине</h3>
                      <div className="space-y-6">
                        {[
                          {
                            step: '1',
                            title: 'Сбор данных',
                            desc: 'Собираются тысячи снимков, анализов и историй болезней',
                            icon: 'Database',
                          },
                          {
                            step: '2',
                            title: 'Обучение модели',
                            desc: 'Нейросеть учится находить закономерности и признаки болезней',
                            icon: 'GraduationCap',
                          },
                          {
                            step: '3',
                            title: 'Проверка',
                            desc: 'Врачи проверяют, насколько точно ИИ ставит диагнозы',
                            icon: 'CheckCircle',
                          },
                          {
                            step: '4',
                            title: 'Применение',
                            desc: 'ИИ помогает врачам быстрее и точнее лечить пациентов',
                            icon: 'Heart',
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex gap-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20"
                          >
                            <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0">
                              <Icon name={item.icon} size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl font-black text-primary">
                                  {item.step}
                                </span>
                                <h4 className="text-xl font-bold">{item.title}</h4>
                              </div>
                              <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="future">
                  <Card className="bg-card/80 backdrop-blur border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-bold mb-6">Будущее ИИ в медицине</h3>
                      <div className="space-y-4">
                        {[
                          {
                            icon: 'Pill',
                            title: 'Персональные лекарства',
                            desc: 'ИИ будет создавать препараты под генетику каждого человека',
                            color: 'primary',
                          },
                          {
                            icon: 'Bot',
                            title: 'Роботы-хирурги',
                            desc: 'ИИ-ассистенты будут помогать в самых сложных операциях',
                            color: 'secondary',
                          },
                          {
                            icon: 'Smartphone',
                            title: 'Домашняя диагностика',
                            desc: 'Приложения с ИИ смогут ставить диагнозы по симптомам',
                            color: 'accent',
                          },
                          {
                            icon: 'Sparkles',
                            title: 'Предсказание болезней',
                            desc: 'ИИ узнает о болезни за годы до появления симптомов',
                            color: 'primary',
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="p-6 rounded-xl bg-card border border-primary/30 hover:border-primary/60 transition-all card-hover"
                          >
                            <div className="flex items-start gap-4">
                              <div className={`w-14 h-14 rounded-xl gradient-purple flex items-center justify-center flex-shrink-0`}>
                                <Icon name={item.icon} size={28} className="text-white" />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {activeSection === 'videos' && (
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4 gradient-text">Видео-библиотека</h2>
              <p className="text-xl text-muted-foreground">
                Лекции и уроки о современных профессиях в медицине
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video, idx) => (
                <Card
                  key={idx}
                  className="card-hover bg-card/80 backdrop-blur border-primary/20 overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Icon name="Play" size={32} className="text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/80">{video.duration}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Eye" size={16} />
                      <span>{video.views} просмотров</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-purple flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={18} />
              </div>
              <span className="font-bold gradient-text">МедБудущее</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Образовательный портал о профессиях будущего в медицине
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
