import designerImage from '../../assets/VeloLand.png';
import BlurText from '../animatedtext/BlurText';
import GlareHover from '../animatedblock/GlareHover';
import ShinyText from '../animatedtext/ShinyText';

import TiltedCard from '../animatedblock/TiltedCard';
import Carousel from '../animatedblock/Carousel';
import SpotlightCard from '../animatedblock/SpotlightCard';
import GlassIcons from '../animatedblock/GlassIcons';
import CardSwap, { Card } from '../animatedblock/CardSwap';
import Stepper, { Step } from '../animatedblock/Stepper';
import ThemeToggleCard from '../components/ThemeToggleCard';
import '../../index.css';

export default function DesignerSiteMain() {
  const SectionTitle = ({ text }) => (
    <div className="flex justify-center mb-20">
      <BlurText text={text} className="text-[10vw] leading-none text-center text-white opacity-10 font-extrabold absolute z-0" />
    </div>
  );

  return (
    <div className="w-full px-6 py-24 bg-black text-white font-sans space-y-40 md:space-y-52">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet"></link>
      {/* HERO-СЕКЦИЯ */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-zvezda">
            <ShinyText text="ДИЗАЙН" disabled={false} speed={4} className='block mb-4' />
            <span className="text-fuchsia-500 font-zvezda"> САЙТ</span> <br /> 
            <ShinyText text="ПОД КЛЮЧ" disabled={false} speed={4} className='block mt-4' />
          </h1>
          <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
            <ShinyText text="Выразительный сайт для бренда, креатора, продакшена или арт-дирекции. Анимации, эффектные сетки, WOW-эффект." 
                       disabled={false} speed={4} className='custom-class' />
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
            {[
              "Уникальный дизайн",
              "Motion-элементы",
              "Адаптивная верстка",
              "SEO-оптимизация"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full flex-shrink-0"></div>
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src={designerImage}
            alt="Дизайнерский сайт"
            className="rounded-3xl shadow-2xl object-cover w-full max-h-[600px] border border-white/10"
          />
        </div>
      </section>

      {/* БЛОК С ПРЕИМУЩЕСТВАМИ */}
      <div className="relative px-6">
        <SectionTitle text="ПРЕИМУЩЕСТВА" />
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Индивидуальный подход",
              description: "Каждый проект начинается с глубокого анализа целевой аудитории и задач бизнеса. Мы не используем шаблонные решения.",
              icon: "✨"
            },
            {
              title: "Современные технологии",
              description: "Используем WebGL, Three.js, GSAP для создания интерактивных элементов, которые выделят вас среди конкурентов.",
              icon: "🚀"
            },
            {
              title: "Полное сопровождение",
              description: "От концепции до запуска и поддержки. Помогаем с контентом, доменом, хостингом и базовым SEO.",
              icon: "🛡️"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </section>
      </div>

      <ThemeToggleCard />

      {/* ПРОЦЕСС РАБОТЫ */}
      <div className="relative mt-60 font-body px-6">
        <SectionTitle text="ПРОЦЕСС" />
        <section className="max-w-6xl mx-auto relative z-10 space-y-28">
          <h2 className="text-4xl md:text-5xl font-kankin font-bold mb-20 text-center text-white tracking-wider uppercase">
            <ShinyText text="Как мы создаем шедевры" disabled={false} speed={4} className="block" />
          </h2>
          
          <div className="space-y-32">
            {[
              {
                title: "Исследование и аналитика",
                description: "Проводим глубокий анализ ниши, изучаем конкурентов и формируем уникальное торговое предложение. Определяем целевую аудиторию и ее боли.",
                details: [
                  "Анализ 5+ конкурентов",
                  "Проработка CJM (Customer Journey Map)",
                  "Определение ключевых метрик"
                ]
              },
              {
                title: "Прототипирование",
                description: "Создаем интерактивный прототип, который показывает структуру сайта и пользовательские сценарии. Утверждаем логику взаимодействия.",
                details: [
                  "Wireframes основных экранов",
                  "User Flow диаграммы",
                  "Интерактивный кликабельный прототип"
                ]
              },
              {
                title: "Дизайн-концепция",
                description: "Разрабатываем 3 варианта визуального стиля. Подбираем цветовые палитры, типографику и создаем систему дизайн-элементов.",
                details: [
                  "3 концепции на выбор",
                  "Moodboard с референсами",
                  "Гайд по фирменному стилю"
                ]
              },
              {
                title: "Программирование",
                description: "Адаптивная верстка с использованием современных технологий. Оптимизация скорости загрузки и кросс-браузерная совместимость.",
                details: [
                  "Mobile-first подход",
                  "Оптимизация под Core Web Vitals",
                  "Интеграция с CMS"
                ]
              }
            ].map((stage, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <div className="sticky top-36 space-y-6">
                    <div className="text-fuchsia-500 text-3xl font-bold">0{index + 1}</div>
                    <h3 className="text-3xl md:text-4xl font-bold">{stage.title}</h3>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed">{stage.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-fuchsia-500 rounded-full mt-2.5"></div>
                        <span className="text-gray-400 text-lg">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>


      {/* КЕЙСЫ */}
      <div className="relative px-6">
        <SectionTitle text="КЕЙСЫ" />
        <section className="max-w-6xl mx-auto relative z-10 space-y-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center">Наши работы говорят за нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Fashion Brand Platform",
                description: "Интерактивный сайт для модного бренда с 3D-элементами и анимированными lookbook",
                results: [
                  "+300% времени на сайте",
                  "+45% конверсии в заявки",
                  "Лучший сайт года по версии Awwwards"
                ]
              },
              {
                title: "Architecture Studio",
                description: "Имиджевый сайт архитектурного бюро с панорамными проектами и VR-туром",
                results: [
                  "+5 престижных клиентов",
                  "Финалист CSS Design Awards",
                  "80% трафика из органики"
                ]
              }
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-8">{project.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-fuchsia-400 text-xl">Результаты:</h4>
                  <ul className="space-y-4">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-fuchsia-500 rounded-full flex-shrink-0"></div>
                        <span className="text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-10 py-4 border-2 border-fuchsia-500 text-fuchsia-500 rounded-full hover:bg-fuchsia-500 hover:text-white transition-all text-lg font-medium">
              Смотреть все кейсы
            </button>
          </div>
        </section>
      </div>

      {/* ЭТАПЫ */}
      <div className="relative px-6">
        <SectionTitle text="ЭТАПЫ" />
        <section className="max-w-6xl mx-auto relative z-10">
          <Stepper initialStep={1} onStepChange={(step) => console.log(step)} 
                  onFinalStepCompleted={() => console.log('All steps completed!')} 
                  backButtonText="Назад" nextButtonText="Далее">
            <Step>
              <h2 className="text-2xl font-bold mb-6">1. Контакт</h2>
              <p className="text-lg text-gray-300 mb-8">Укажите удобный способ связи — мы напишем или позвоним вам.</p>
              <input className="mt-2 p-4 rounded-xl text-black w-full text-lg" 
                     placeholder="Ваш Telegram, Discord, email или телефон" />
            </Step>
            <Step>
              <h2 className="text-2xl font-bold mb-6">2. Когда удобно?</h2>
              <p className="text-lg text-gray-300 mb-8">Выберите дату и время, когда вам удобно поговорить. Можно будет изменить позже.</p>
              <input type="datetime-local" className="mt-2 p-4 rounded-xl text-black w-full text-lg" />
            </Step>
            <Step>
              <h2 className="text-2xl font-bold mb-6">3. Готово</h2>
              <p className="text-lg text-gray-300">Спасибо! Мы свяжемся с вами в указанное время через ваш контакт. Ждите подтверждение в мессенджере.</p>
            </Step>
          </Stepper>
        </section>
      </div>

      {/* FAQ */}
      <div className="relative px-6">
        <SectionTitle text="ВОПРОСЫ" />
        <section className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Частые вопросы</h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Сколько времени занимает создание сайта?",
                answer: "Средний срок разработки — от 4 до 8 недель в зависимости от сложности проекта. Лендинг можно сделать за 2 недели, комплексный корпоративный сайт — за 3 месяца."
              },
              {
                question: "Можно ли сделать сайт дешевле?",
                answer: "Мы работаем только по полному циклу и гарантируем качество. Для стартапов предлагаем рассрочку платежа на 3 месяца без процентов."
              },
              {
                question: "Какие гарантии вы предоставляете?",
                answer: "14 дней бесплатной поддержки после запуска. 1 год гарантии на исправление критических ошибок. Пожизненная техподдержка с ответом в течение 24 часов."
              },
              {
                question: "Можно ли изменить дизайн после утверждения?",
                answer: "Да, в процессе разработки предусмотрено 3 раунда правок на каждом этапе. После запуска изменения вносятся по отдельному ТЗ за дополнительную плату."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-white/10 pb-8">
                <button className="flex justify-between items-center w-full text-left group py-4">
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-fuchsia-400 transition-colors">{item.question}</h3>
                  <span className="text-2xl group-hover:text-fuchsia-400 transition-colors">+</span>
                </button>
                <div className="mt-4 text-gray-400 text-lg hidden">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

{/* Premium CTA Section */}
<section className="max-w-6xl mx-auto bg-ivory-50 rounded-luxury-lg p-16 text-center border-luxury shadow-luxury relative overflow-hidden luxury-responsive">
  {/* Luxury decorative elements */}
  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-ivory-100/30 blur-xl"></div>
  <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-amber-100/20 blur-xl"></div>
  
  {/* Embossed border effect */}
  <div className="absolute inset-0 rounded-[2rem] pointer-events-none border border-ivory-200/30 mix-blend-overlay"></div>
  
  {/* Luxury icon */}
  <div className="flex justify-center mb-6">
    <div className="w-20 h-20 flex items-center justify-center bg-ivory-100 rounded-full border border-ivory-300/50 shadow-md">
      <svg className="w-10 h-10 text-amber-600/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
  </div>

  <h2 className="text-4xl sm:text-5xl font-medium mb-6 text-ivory-900 tracking-tight font-serif">
    Готовы создать <span className="italic font-light">уникальный</span> шедевр?
  </h2>
  
  <p className="text-xl text-ivory-700/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
    Оставьте заявку и получите эксклюзивную консультацию с персональным анализом вашего проекта
  </p>
  
  <div className="flex flex-col sm:flex-row gap-5 justify-center">
    <button className="px-12 py-5 bg-ivory-900 text-ivory-50 font-medium rounded-xl hover:bg-ivory-800 transition-all duration-300 text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
      Обсудить проект
    </button>
    
    <button className="px-12 py-5 border border-ivory-300 text-ivory-900 font-medium rounded-xl hover:bg-ivory-100/50 transition-all duration-300 text-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
      Заказать звонок
    </button>
  </div>

  {/* Luxury badge */}
  <div className="mt-12 flex justify-center">
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-ivory-100 border border-ivory-300/50 text-ivory-700 text-sm font-medium">
      <svg className="w-4 h-4 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
      </svg>
      Конфиденциальность гарантирована
    </div>
  </div>
</section>

    </div>
  );
}