import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import multipageImage from '../../assets/chrome51.png';
import BlurText from '../animatedtext/BlurText';
import ShinyText from '../animatedtext/ShinyText';
import TiltedCard from '../animatedblock/TiltedCard';

export default function MultipageSiteMain() {
  const SectionAnimation = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  };

  const SectionTitle = ({ text }) => (
    <div className="flex justify-center w-full">
      <BlurText text={text} className="text-[10vw] leading-none text-center text-white opacity-10 font-extrabold absolute z-0" />
    </div>
  );

  return (
    <div className="w-full px-4 py-20 bg-black text-white font-sans space-y-28 overflow-hidden">

      {/* Hero Section */}
      <section className="w-full mx-auto flex flex-col md:flex-row items-center gap-10 max-w-7xl">
        <div className="md:w-1/2">
          <h1 className="text-5xl sm:text-6xl leading-tight tracking-tight">
            <ShinyText text="КОРПОРАТИВНЫЙ" disabled={false} speed={4} />
            <span className="text-white font-bold">МНОГОСТРАНИЧНЫЙ</span> <br />
            <ShinyText text="САЙТ ПОД КЛЮЧ" disabled={false} speed={4} />
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Полноценное цифровое представительство вашего бизнеса с продуманной структурой, аналитикой и системой управления контентом.
          </p>
          <div className="mt-8 flex gap-4">
            <motion.button 
              className="px-8 py-3 bg-white text-black font-bold rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Обсудить проект
            </motion.button>
            <button className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition">
              Примеры работ
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <TiltedCard
            imageSrc={multipageImage}
            altText="Корпоративный многостраничный сайт"
            containerHeight="500px"
            containerWidth="600px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
          />
        </div>
      </section>

      {/* Features */}
      <div className="relative w-full">
        <SectionTitle text="ВОЗМОЖНОСТИ" />
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            {
              title: "5+ страниц",
              desc: "Главная, О компании, Услуги, Контакты, Блог и другие",
              icon: "📑"
            },
            {
              title: "Уникальный дизайн",
              desc: "Индивидуальный стиль для каждой страницы",
              icon: "🎨"
            },
            {
              title: "SEO-оптимизация",
              desc: "Готовая структура для продвижения",
              icon: "🔍"
            },
            {
              title: "CRM-интеграция",
              desc: "Подключение к вашей системе управления",
              icon: "📊"
            },
            {
              title: "Аналитика",
              desc: "Яндекс.Метрика и Google Analytics",
              icon: "📈"
            },
            {
              title: "Мультиязычность",
              desc: "Поддержка нескольких языков",
              icon: "🌐"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </section>
      </div>

      {/* Pages Showcase */}
      <div className="relative w-full">
        <SectionTitle text="СТРАНИЦЫ" />
        <section className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-6">Типовые разделы сайта</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white/80">Основные страницы</h3>
              <p className="text-gray-300 mb-6">
                Каждая страница разрабатывается с учетом ее цели и места в структуре сайта.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Главная - визитка компании</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>О компании - история и преимущества</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Услуги/продукты - полное описание</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm h-full">
              <div className="space-y-4">
                {[
                  { title: "Главная", desc: "Первое впечатление о компании" },
                  { title: "О нас", desc: "Наша миссия и ценности" },
                  { title: "Услуги", desc: "Полный спектр предлагаемых услуг" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-24 h-24 bg-white/10 rounded flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-r from-white/5 to-white/20 rounded-xl p-8 h-full border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Дополнительные разделы</h3>
                <p className="text-gray-300 mb-6">
                  Специализированные страницы для решения конкретных бизнес-задач.
                </p>
                <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                  <div className="h-40 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white/50">Блог/Новости компании</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-white/80">Функциональные элементы</h3>
              <p className="text-gray-300 mb-6">
                Интерактивные компоненты для вовлечения посетителей.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Формы обратной связи", desc: "Сбор заявок и контактов" },
                  { title: "Онлайн-калькулятор", desc: "Расчет стоимости услуг" }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Process */}
      <div className="relative w-full">
        <SectionTitle text="ЭТАПЫ" />
        <section className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "1. Анализ",
                desc: "Изучаем бизнес, конкурентов и целевую аудиторию"
              },
              {
                step: "2. Прототип",
                desc: "Разрабатываем структуру и пользовательские сценарии"
              },
              {
                step: "3. Дизайн",
                desc: "Создаем визуальную концепцию для всех страниц"
              },
              {
                step: "4. Разработка",
                desc: "Программируем функционал и интеграции"
              },
              {
                step: "5. Запуск",
                desc: "Тестируем и публикуем проект"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl font-bold text-white mb-2">{item.step}</div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="relative w-full">
        <SectionTitle text="ЗАКАЗАТЬ" />
        <section className="max-w-4xl mx-auto relative z-10">
          <div className="bg-gradient-to-r from-white/5 to-white/20 rounded-2xl p-10 border border-white/10 backdrop-blur-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы создать корпоративный сайт?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатную консультацию по разработке многостраничного сайта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-3 bg-white text-black font-bold rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Обсудить проект
              </motion.button>
              <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition">
                Посмотреть кейсы
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Price */}
      <div className="relative w-full">
        <SectionTitle text="СТОИМОСТЬ" />
        <section className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Базовый",
                price: "85 000₽",
                features: ["5 страниц", "Базовый дизайн", "Адаптивная верстка", "Формы обратной связи"],
                popular: false
              },
              {
                title: "Стандарт",
                price: "149 000₽",
                features: ["7+ страниц", "Индивидуальный дизайн", "SEO-оптимизация", "Базовые интеграции", "CMS"],
                popular: true
              },
              {
                title: "Премиум",
                price: "от 249 000₽",
                features: ["Неограниченные страницы", "Эксклюзивный дизайн", "Сложные интеграции", "Мультиязычность", "Личный кабинет"],
                popular: false
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`bg-gradient-to-b ${item.popular ? 'from-white/10 to-white/20 border-white/30' : 'from-white/5 to-white/10 border-white/10'} border rounded-xl p-8 backdrop-blur-sm`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.popular && (
                  <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="text-4xl font-bold mb-6">{item.price}</div>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium ${item.popular ? 'bg-white text-black' : 'bg-white/10 text-white border border-white/10'}`}>
                  Выбрать
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}