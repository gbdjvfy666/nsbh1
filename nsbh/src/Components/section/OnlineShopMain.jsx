import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import shopImage from '../../assets/chrome51.png';
import BlurText from '../animatedtext/BlurText';
import ShinyText from '../animatedtext/ShinyText';
import GlassIcons from '../animatedblock/GlassIcons';
import TiltedCard from '../animatedblock/TiltedCard';

export default function OnlineShopMain() {
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
            <ShinyText text="ИНТЕРНЕТ" disabled={false} speed={4} />
            <span className="text-white font-bold">МАГАЗИН </span><br />
            <ShinyText text="ПОД КЛЮЧ" disabled={false} speed={4} />
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Полнофункциональное eCommerce решение с каталогом, корзиной, оплатой и админкой. Максимальная конверсия и удобство.
          </p>
          <div className="mt-8 flex gap-4">
            <motion.button 
              className="px-8 py-3 bg-white text-black font-bold rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать магазин
            </motion.button>
            <button className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition">
              Примеры работ
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <TiltedCard
            imageSrc={shopImage}
            altText="Интернет-магазин"
            containerHeight="500px"
            containerWidth="600px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
          />
        </div>
      </section>

      {/* Features */}
      <div className="relative w-full">
        <SectionTitle text="ФУНКЦИОНАЛ" />
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            {
              title: "Каталог товаров",
              desc: "Удобная система категорий, фильтров и поиска",
              icon: "📦"
            },
            {
              title: "Корзина и оплата",
              desc: "Разные способы оплаты и доставки с сохранением состояния",
              icon: "🛒"
            },
            {
              title: "Админ-панель",
              desc: "Полный контроль над товарами, заказами и клиентами",
              icon: "⚙️"
            },
            {
              title: "Аналитика",
              desc: "Интеграция с Яндекс.Метрикой и Google Analytics",
              icon: "📊"
            },
            {
              title: "SEO-оптимизация",
              desc: "Готовая база для продвижения в поисковых системах",
              icon: "🔍"
            },
            {
              title: "Мобильная версия",
              desc: "Идеальное отображение на всех устройствах",
              icon: "📱"
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

      {/* Product Showcase */}
      <div className="relative w-full">
        <SectionTitle text="ТОВАРЫ" />
        <section className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-6">Как мы презентуем товары</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white/80">Карточки товаров</h3>
              <p className="text-gray-300 mb-6">
                Каждый товар получает детальную карточку с фото, описанием, характеристиками и отзывами.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Вариации товаров (цвет, размер)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Галерея изображений (до 10 фото)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Рекомендации и сопутствующие товары</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm h-full">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white/10 rounded-lg p-4 h-40 flex items-center justify-center">
                    <span className="text-white/50">Товар {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-r from-white/5 to-white/20 rounded-xl p-8 h-full border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Акции и скидки</h3>
                <p className="text-gray-300 mb-6">
                  Специальные блоки для промо-товаров с таймерами и выделенным оформлением.
                </p>
                <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Скидка 30%</span>
                    <span className="text-sm text-gray-400">Осталось: 12:34:56</span>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-white/80">Популярные товары</h3>
              <p className="text-gray-300 mb-6">
                Умные блоки с автоматическим подбором товаров по популярности, новинкам или акциям.
              </p>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-16 h-16 bg-white/10 rounded"></div>
                    <div>
                      <h4 className="font-medium">Топовый товар {item}</h4>
                      <p className="text-sm text-gray-400">1 299₽ <span className="line-through text-gray-500 ml-2">1 999₽</span></p>
                    </div>
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
                desc: "Изучаем ваш ассортимент и целевую аудиторию"
              },
              {
                step: "2. Дизайн",
                desc: "Создаём интерфейс магазина и карточек товаров"
              },
              {
                step: "3. Разработка",
                desc: "Реализуем весь функционал магазина"
              },
              {
                step: "4. Наполнение",
                desc: "Добавляем товары и настраиваем процессы"
              },
              {
                step: "5. Запуск",
                desc: "Публикуем и тестируем перед открытием"
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
            <h2 className="text-3xl font-bold mb-4">Готовы запустить свой магазин?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатную консультацию по созданию интернет-магазина
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
                price: "49 000₽",
                features: ["До 50 товаров", "Каталог + корзина", "1 способ оплаты", "Базовая админка"],
                popular: false
              },
              {
                title: "Стандарт",
                price: "89 000₽",
                features: ["До 200 товаров", "Фильтры + поиск", "3 способа оплаты", "Полная админка", "SEO-база"],
                popular: true
              },
              {
                title: "Премиум",
                price: "от 149 000₽",
                features: ["Неограниченно товаров", "Все функции", "Интеграции с 1С", "CRM система", "Персональный дизайн"],
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