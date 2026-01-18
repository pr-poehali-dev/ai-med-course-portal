import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

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
      name: 'КемГМУ (Кемеровский государственный медицинский университет)',
      programs: ['Лечебное дело', 'Педиатрия', 'Стоматология', 'Фармация'],
      ege: ['Биология', 'Химия', 'Русский язык'],
      score: '65-85 баллов',
      city: 'Кемерово',
      address: 'ул. Ворошилова, 22А',
      phone: '+7 (3842) 73-48-56',
      website: 'kemsma.ru',
      email: 'priem@kemsma.ru',
    },
    {
      name: 'КузГТУ (Кузбасский государственный технический университет)',
      programs: ['Биотехнология', 'Техносферная безопасность', 'Прикладная информатика'],
      ege: ['Математика', 'Физика', 'Русский язык'],
      score: '55-75 баллов',
      city: 'Кемерово',
      address: 'ул. Весенняя, 28',
      phone: '+7 (3842) 39-63-79',
      website: 'kuzstu.ru',
      email: 'priem@kuzstu.ru',
    },
    {
      name: 'КемГУ (Кемеровский государственный университет)',
      programs: ['Биология', 'Химия', 'Фундаментальная информатика'],
      ege: ['Биология', 'Химия', 'Русский язык'],
      score: '60-80 баллов',
      city: 'Кемерово',
      address: 'ул. Красная, 6',
      phone: '+7 (3842) 58-31-24',
      website: 'kemsu.ru',
      email: 'pk@kemsu.ru',
    },
    {
      name: 'НФИ КемГУ (Новокузнецкий филиал КемГУ)',
      programs: ['Биология', 'Медицинская биохимия', 'Экология'],
      ege: ['Биология', 'Химия', 'Русский язык'],
      score: '55-75 баллов',
      city: 'Новокузнецк',
      address: 'ул. Циолковского, 23',
      phone: '+7 (3843) 77-44-84',
      website: 'nbikemsu.ru',
      email: 'priem@nbikemsu.ru',
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

  const quizQuestions = [
    {
      question: 'Какой предмет тебе интереснее всего?',
      options: [
        { text: 'Биология и химия', value: 'bio', icon: 'Dna' },
        { text: 'Математика и физика', value: 'math', icon: 'Calculator' },
        { text: 'Информатика и программирование', value: 'it', icon: 'Code' },
        { text: 'Всё вместе понемногу', value: 'mixed', icon: 'Sparkles' },
      ],
    },
    {
      question: 'Чем бы ты хотел заниматься?',
      options: [
        { text: 'Работать с людьми напрямую', value: 'people', icon: 'Users' },
        { text: 'Анализировать данные за компьютером', value: 'data', icon: 'BarChart' },
        { text: 'Разрабатывать новые технологии', value: 'tech', icon: 'Cpu' },
        { text: 'Проводить исследования', value: 'research', icon: 'FlaskConical' },
      ],
    },
    {
      question: 'Как ты относишься к технологиям?',
      options: [
        { text: 'Обожаю программировать и разбираться в железе', value: 'geek', icon: 'Laptop' },
        { text: 'Использую как инструмент для работы', value: 'tool', icon: 'Wrench' },
        { text: 'Интересуюсь, но не углубляюсь', value: 'curious', icon: 'Lightbulb' },
        { text: 'Предпочитаю живое общение технологиям', value: 'human', icon: 'Heart' },
      ],
    },
    {
      question: 'Твой идеальный рабочий день?',
      options: [
        { text: 'Операционная и спасение жизней', value: 'surgery', icon: 'Activity' },
        { text: 'Лаборатория и микроскоп', value: 'lab', icon: 'Microscope' },
        { text: 'Компьютер и анализ больших данных', value: 'computer', icon: 'Database' },
        { text: 'Разработка нового оборудования', value: 'engineering', icon: 'Hammer' },
      ],
    },
  ];

  const professionResults: Record<string, { title: string; description: string; icon: string; path: string }> = {
    genetic: {
      title: 'Врач-генетик',
      description: 'Ты отлично подходишь для работы с генетическими данными! Тебя ждёт анализ ДНК, диагностика наследственных заболеваний и помощь семьям.',
      icon: 'Dna',
      path: 'Изучай биологию и химию углублённо, поступай в медицинский ВУЗ на специальность "Медицинская генетика"',
    },
    bioinformatics: {
      title: 'Биоинформатик',
      description: 'Ты на стыке биологии и IT! Будешь создавать алгоритмы для анализа биологических данных и помогать учёным делать открытия.',
      icon: 'Binary',
      path: 'Поступай на биоинформатику в МФТИ, ВШЭ или МГУ. Изучай программирование, математику и биологию.',
    },
    radiologist: {
      title: 'Врач-рентгенолог',
      description: 'Работа с медицинской визуализацией — твоё призвание! Ты будешь находить болезни на снимках и использовать ИИ для диагностики.',
      icon: 'ScanLine',
      path: 'Поступай в медицинский на "Лечебное дело", затем специализируйся в рентгенологии',
    },
    neurosurgeon: {
      title: 'Нейрохирург',
      description: 'Тебя ждут сложнейшие операции на мозге и нервной системе. ИИ поможет планировать вмешательства и прогнозировать результаты.',
      icon: 'Brain',
      path: 'Поступай в лучшие медицинские ВУЗы на "Лечебное дело", готовься к долгому обучению',
    },
    physicist: {
      title: 'Медицинский физик',
      description: 'Физика и медицина — идеальное сочетание! Ты будешь разрабатывать медицинское оборудование и методы лечения.',
      icon: 'Zap',
      path: 'Поступай в МФТИ на "Медицинскую физику" или "Биомедицинскую инженерию"',
    },
    personalized: {
      title: 'Специалист по персонализированной медицине',
      description: 'Индивидуальный подход к каждому пациенту — твоя сильная сторона! Будешь использовать ИИ для подбора лучшего лечения.',
      icon: 'User',
      path: 'Медицинское образование + курсы по генетике и биоинформатике',
    },
  };

  const calculateResult = (answers: string[]) => {
    const profile = answers.join('-');
    
    if (answers.includes('it') && answers.includes('data')) return 'bioinformatics';
    if (answers.includes('math') && answers.includes('tech')) return 'physicist';
    if (answers.includes('bio') && answers.includes('research')) return 'genetic';
    if (answers.includes('people') && answers.includes('surgery')) return 'neurosurgeon';
    if (answers.includes('computer') || answers.includes('data')) return 'radiologist';
    if (answers.includes('mixed')) return 'personalized';
    
    return 'bioinformatics';
  };

  const handleQuizAnswer = (value: string) => {
    const newAnswers = [...quizAnswers, value];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const result = calculateResult(newAnswers);
      setQuizResult(result);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

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
                { id: 'quiz', label: 'Тест', icon: 'ClipboardList' },
                { id: 'professions', label: 'Профессии', icon: 'Briefcase' },
                { id: 'education', label: 'Образование', icon: 'GraduationCap' },
                { id: 'ai', label: 'ИИ в медицине', icon: 'Brain' },
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
                  onClick={() => setActiveSection('quiz')}
                >
                  <Icon name="ClipboardList" className="mr-2" />
                  Пройти тест
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

        {activeSection === 'quiz' && (
          <section className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {!quizResult ? (
                <Card className="bg-card/80 backdrop-blur border-primary/20">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-black gradient-text">Тест профориентации</h2>
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          {quizStep + 1} / {quizQuestions.length}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-6">
                        <div
                          className="gradient-purple h-2 rounded-full transition-all duration-500"
                          style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-8 text-center">
                      {quizQuestions[quizStep].question}
                    </h3>
                    
                    <div className="grid gap-4">
                      {quizQuestions[quizStep].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizAnswer(option.value)}
                          className="p-6 rounded-xl bg-card border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all text-left group card-hover"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon name={option.icon} size={24} className="text-white" />
                            </div>
                            <span className="text-lg font-semibold">{option.text}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {quizStep > 0 && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setQuizStep(quizStep - 1);
                          setQuizAnswers(quizAnswers.slice(0, -1));
                        }}
                        className="mt-6"
                      >
                        <Icon name="ArrowLeft" className="mr-2" size={18} />
                        Назад
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card/80 backdrop-blur border-primary/20 overflow-hidden">
                  <div className="gradient-purple p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur mx-auto mb-4 flex items-center justify-center animate-scale-in">
                      <Icon name={professionResults[quizResult].icon} size={48} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black text-white mb-2">Твоя профессия будущего!</h2>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-4 gradient-text text-center">
                      {professionResults[quizResult].title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 text-center leading-relaxed">
                      {professionResults[quizResult].description}
                    </p>
                    
                    <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-6">
                      <div className="flex items-start gap-3">
                        <Icon name="Map" size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-2">Твой путь:</h4>
                          <p className="text-muted-foreground">{professionResults[quizResult].path}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 justify-center flex-wrap">
                      <Button
                        onClick={resetQuiz}
                        variant="outline"
                        size="lg"
                      >
                        <Icon name="RotateCcw" className="mr-2" />
                        Пройти ещё раз
                      </Button>
                      <Button
                        onClick={() => setActiveSection('education')}
                        size="lg"
                        className="gradient-purple"
                      >
                        <Icon name="GraduationCap" className="mr-2" />
                        Где учиться?
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
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
                ВУЗы Кузбасса по медицинским и биотехнологическим специальностям
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
                      <div className="pt-4 border-t border-border">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <Icon name="MapPin" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{uni.city}, {uni.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={16} className="text-muted-foreground flex-shrink-0" />
                            <a href={`tel:${uni.phone}`} className="text-primary hover:underline">
                              {uni.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Mail" size={16} className="text-muted-foreground flex-shrink-0" />
                            <a href={`mailto:${uni.email}`} className="text-primary hover:underline">
                              {uni.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Globe" size={16} className="text-muted-foreground flex-shrink-0" />
                            <a
                              href={`https://${uni.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {uni.website}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12">
              <Card className="bg-card/80 backdrop-blur border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 gradient-text">ВУЗы на карте Кузбасса</h3>
                      <div className="space-y-3">
                        {universities.map((uni, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors">
                            <div className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                              {idx + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{uni.name.split('(')[0].trim()}</p>
                              <p className="text-xs text-muted-foreground">{uni.city}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative min-h-[400px] bg-muted">
                      <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f5a0b8c9e0c4c5e9c0c4c5e9c0c4c5e&amp;source=constructor"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="absolute inset-0"
                        title="Карта ВУЗов Кузбасса"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
                        <div className="text-center p-6">
                          <Icon name="Map" size={48} className="text-primary mx-auto mb-3" />
                          <p className="text-lg font-semibold mb-2">Интерактивная карта</p>
                          <p className="text-sm text-muted-foreground">
                            Кемерово и Новокузнецк — основные образовательные центры региона
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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