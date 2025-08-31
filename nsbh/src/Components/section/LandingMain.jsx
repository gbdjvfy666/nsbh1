import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image2 from '../../assets/285.png';
import BlurText from '../animatedtext/BlurText';
import ShinyText from '../animatedtext/ShinyText';

const SectionTitle = ({ text }) => (
  <div className="flex justify-center mb-16">
    <BlurText 
      text={text} 
      className="text-[10vw] leading-none text-center text-ivory-900 opacity-5 font-extrabold absolute z-0" 
    />
  </div>
);

export default function LandingMain() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <div className="w-full min-h-screen px-6 py-20 bg-ivory-50 text-ivory-900 font-sans space-y-32 overflow-x-hidden">
      {/* Добавлены min-h-screen и overflow-x-hidden */}

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl sm:text-6xl leading-tight tracking-tight font-serif">
            <ShinyText 
              text="ПРОДАЮЩИЙ" 
              disabled={false} 
              speed={4} 
              className='text-ivory-700 block mb-4' 
            />
            <span className="text-amber-500 font-medium">ЛЕНДИНГ</span> <br /> 
            <ShinyText 
              text="ДЛЯ ВАШЕГО БИЗНЕСА" 
              disabled={false} 
              speed={4} 
              className='text-ivory-700 block mt-4' 
            />
          </h1>
          <p className="text-xl text-ivory-600 max-w-xl leading-relaxed">
            Одностраничный сайт, который превращает посетителей в клиентов. Утонченный дизайн, четкая структура и мощные призывы к действию.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            {['Конверсия до 35%', 'Адаптивный дизайн', 'SEO-оптимизация', 'Интеграция с CRM'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <motion.img
            src={image2}
            alt="Лендинг пример"
            className="rounded-3xl shadow-xl object-cover w-full max-h-[600px] border border-ivory-300"
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px -12px rgba(214, 158, 46, 0.2)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <div className="relative px-6">
        <SectionTitle text="ПРЕИМУЩЕСТВА" />
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Высокая конверсия",
              description: "Каждый элемент лендинга направлен на превращение посетителя в клиента",
              icon: "🚀"
            },
            {
              title: "Быстрая загрузка",
              description: "Оптимизированный код и изображения для мгновенной загрузки",
              icon: "⚡"
            },
            {
              title: "Мобильная версия",
              description: "Идеальное отображение на всех устройствах без потери функционала",
              icon: "📱"
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-ivory-300 shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-ivory-800">{item.title}</h3>
              <p className="text-ivory-600">{item.description}</p>
            </motion.div>
          ))}
        </section>
      </div>

      {/* PROCESS SECTION */}
      <div className="relative mt-60 px-6">
        <SectionTitle text="ПРОЦЕСС" />
        <section className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-ivory-800 tracking-normal">
            Как создается ваш лендинг
          </h2>
          
          <div className="space-y-28">
            {[
              {
                title: "Анализ и стратегия",
                description: "Глубокий анализ вашей целевой аудитории и конкурентов. Разработка уникального торгового предложения.",
                details: [
                  "Анализ 3-5 ключевых конкурентов",
                  "Определение ключевых преимуществ",
                  "Разработка стратегии конверсии"
                ]
              },
              {
                title: "Прототипирование",
                description: "Создание структуры лендинга с учетом психологии пользователя и путей конверсии.",
                details: [
                  "Wireframe всех блоков",
                  "Проработка пользовательских сценариев",
                  "Оптимизация воронки продаж"
                ]
              },
              {
                title: "Дизайн и контент",
                description: "Разработка визуального стиля и написание продающих текстов, которые работают.",
                details: [
                  "3 варианта дизайн-концепции",
                  "Профессиональный копирайтинг",
                  "Подбор изображений/иллюстраций"
                ]
              },
              {
                title: "Программирование",
                description: "Чистый код, адаптивная верстка и интеграция всех необходимых сервисов.",
                details: [
                  "Mobile-first подход",
                  "Оптимизация скорости загрузки",
                  "Интеграция с аналитикой"
                ]
              }
            ].map((stage, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <div className="sticky top-36 space-y-6">
                    <div className="text-amber-500 text-3xl font-bold">0{index + 1}</div>
                    <h3 className="text-3xl font-bold text-ivory-800">{stage.title}</h3>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-xl text-ivory-600 leading-relaxed">{stage.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2.5"></div>
                        <span className="text-ivory-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CASE STUDIES */}
      <div className="relative px-6">
        <SectionTitle text="РЕЗУЛЬТАТЫ" />
        <section className="max-w-6xl mx-auto relative z-10 space-y-16">
          <h2 className="text-4xl font-serif font-bold text-center text-ivory-800">Наши лендинги приносят прибыль</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Фитнес-студия",
                description: "Лендинг с онлайн-записью и системой бронирования",
                results: [
                  "+40% конверсии в заявки",
                  "Снижение стоимости лида на 35%",
                  "Окупаемость за 2 недели"
                ]
              },
              {
                title: "Образовательный курс",
                description: "Продающая страница для онлайн-обучения",
                results: [
                  "Конверсия 28% из соцсетей",
                  "Продано 120 курсов за месяц",
                  "Средний чек увеличен на 25%"
                ]
              }
            ].map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-3xl p-10 border border-ivory-300 shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-ivory-800">{project.title}</h3>
                <p className="text-ivory-600 mb-8">{project.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-amber-500">Результаты:</h4>
                  <ul className="space-y-4">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-ivory-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* PRICING */}
      <div className="relative px-6">
        <SectionTitle text="ТАРИФЫ" />
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Базовый",
              price: "19 000₽",
              features: [
                "Дизайн 1 концепция",
                "До 6 блоков",
                "Адаптивная верстка",
                "1 форма обратной связи",
                "Базовая SEO-оптимизация"
              ],
              popular: false
            },
            {
              title: "Оптимальный",
              price: "29 000₽",
              features: [
                "Дизайн 2 концепции",
                "До 10 блоков",
                "Продвинутые анимации",
                "Интеграция с CRM",
                "SEO + метрики"
              ],
              popular: true
            },
            {
              title: "Премиум",
              price: "49 000₽",
              features: [
                "Эксклюзивный дизайн",
                "Неограниченные блоки",
                "3D/параллакс эффекты",
                "Полный маркетинг-кит",
                "Гарантия результата"
              ],
              popular: false
            }
          ].map((plan, index) => (
            <motion.div 
              key={index}
              className={`rounded-3xl p-8 border ${plan.popular ? 'border-amber-500 bg-amber-50' : 'border-ivory-300 bg-white'} shadow-sm hover:shadow-md transition-all`}
              whileHover={{ y: -10 }}
            >
              {plan.popular && (
                <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-ivory-800">{plan.title}</h3>
              <div className="text-4xl font-extrabold mb-6 text-ivory-900">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-ivory-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-medium ${plan.popular ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'border border-amber-500 text-amber-500 hover:bg-amber-50'} transition-colors`}>
                Заказать
              </button>
            </motion.div>
          ))}
        </section>
      </div>

      {/* CTA SECTION */}
      <motion.section 
        className="max-w-6xl mx-auto bg-white rounded-3xl p-16 text-center border border-ivory-300 shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-amber-100/30 blur-xl"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-amber-100/20 blur-xl"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center bg-amber-100 rounded-full border border-ivory-300">
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <h2 className="text-4xl font-serif font-bold mb-6 text-ivory-800">
            Готовы создать <span className="italic font-light">уникальный</span> лендинг?
          </h2>
          
          <p className="text-xl text-ivory-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Оставьте заявку для эксклюзивной консультации с нашим арт-директором
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button 
              className="px-12 py-5 bg-ivory-900 text-white font-medium rounded-xl hover:bg-ivory-800 transition-all duration-300 text-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Обсудить проект
            </motion.button>
            
            <motion.button 
              className="px-12 py-5 border border-ivory-300 text-ivory-900 font-medium rounded-xl hover:bg-ivory-100/50 transition-all duration-300 text-lg shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Заказать звонок
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}