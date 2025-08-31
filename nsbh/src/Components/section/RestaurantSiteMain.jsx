import { motion } from 'framer-motion';
import restaurantImage from '../../assets/1.png';

export default function RestaurantSiteMain() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

      {/* Hero Section - Full Width */}
      <section className="w-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-500 dark:text-gray-400">Профессиональные </span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                сайты для ресторанов
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8"
            >
              Создаем цифровые витрины, которые увеличивают посещаемость и средний чек
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 flex-wrap"
            >
              <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                Заказать сайт
              </button>
              <button className="px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition-all dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/50">
                Примеры работ
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl rotate-2 blur-md opacity-50"></div>
              <img
                src={restaurantImage}
                alt="Ресторанный сайт"
                className="relative rounded-2xl shadow-xl w-full max-w-md object-cover border border-gray-200 dark:border-gray-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Full Width */}
      <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="text-gray-500 dark:text-gray-400">Что мы делаем для </span>
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              ресторанных сайтов
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Меню с эффектом присутствия",
                description: "Фотографии блюд с описанием, фильтрами по категориям и диетическим особенностям",
                icon: "📋"
              },
              {
                title: "Система бронирования",
                description: "Онлайн-бронирование столиков с выбором даты, времени и особых пожеланий",
                icon: "🕒"
              },
              {
                title: "Заказ еды онлайн",
                description: "Полноценная корзина с возможностью заказа на доставку или самовывоз",
                icon: "🛒"
              },
              {
                title: "Галерея заведения",
                description: "Фотографии интерьера, мероприятий и особых событий в ресторане",
                icon: "📸"
              },
              {
                title: "Управление контентом",
                description: "Простая CMS для обновления меню, акций и другой информации",
                icon: "⚙️"
              },
              {
                title: "Аналитика и SEO",
                description: "Интеграция с аналитическими сервисами и SEO оптимизация",
                icon: "📊"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Full Width */}
      <section className="w-full py-24 bg-gray-100 dark:bg-gray-800/50 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Технологии
            </span>
            <span className="text-gray-500 dark:text-gray-400"> которые мы используем</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "React", color: "text-blue-500" },
              { name: "Next.js", color: "text-gray-800 dark:text-gray-300" },
              { name: "Tailwind", color: "text-cyan-500" },
              { name: "Node.js", color: "text-green-500" },
              { name: "MongoDB", color: "text-green-600" },
              { name: "GraphQL", color: "text-pink-500" },
              { name: "Stripe", color: "text-purple-500" },
              { name: "Google Maps", color: "text-red-500" },
              { name: "SEO", color: "text-yellow-500" },
              { name: "Analytics", color: "text-orange-500" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all dark:bg-gray-700 dark:border-gray-600 ${tech.color}`}
              >
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full py-32 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Готовы увеличить посещаемость вашего ресторана?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Оставьте заявку и получите бесплатную консультацию по созданию сайта
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition shadow-lg">
              Обсудить проект
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition">
              Посмотреть кейсы
            </button>
          </motion.div>
        </div>
      </section>

      {/* Price Section - Full Width */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            <span className="text-gray-500 dark:text-gray-400">Стоимость </span>
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              разработки
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый",
                price: "29 000₽",
                features: ["Главная страница", "Меню", "Контакты", "Адаптивный дизайн", "SEO база"],
                recommended: false
              },
              {
                title: "Стандарт",
                price: "49 000₽",
                features: ["Все страницы Базового", "Система бронирования", "Фотогалерея", "CMS для меню", "SEO оптимизация"],
                recommended: true
              },
              {
                title: "Премиум",
                price: "79 000₽",
                features: ["Все страницы Стандарта", "Онлайн-заказ еды", "Личный кабинет", "Интеграции", "Полное сопровождение"],
                recommended: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white border-2 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 ${
                  plan.recommended ? "border-gray-900 dark:border-gray-300 scale-105" : "border-gray-200"
                }`}
              >
                {plan.recommended && (
                  <div className="bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    РЕКОМЕНДУЕМ
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">{plan.title}</h3>
                <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold ${
                    plan.recommended
                      ? "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  Выбрать тариф
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}