import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import corporateImage from '../../assets/chrome51.png';
import BlurText from '../animatedtext/BlurText';

const SectionTitle = ({ text }) => (
  <div className="flex justify-center w-full mb-20">
    <BlurText 
      text={text} 
      className="text-[10vw] leading-none text-center text-ivory-100 opacity-5 font-bold absolute z-0 dark:text-mammoth-100/10" 
    />
  </div>
);

export default function CorporateMain() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="w-full px-6 py-24 bg-ivory-50 text-ivory-900 font-sans space-y-40 overflow-hidden dark:bg-mammoth-900 dark:text-ivory-100 transition-colors duration-300">

      {/* HERO SECTION - GUCCI STYLE */}
      <motion.section 
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ivory-100 to-ivory-200 rounded-[4rem] overflow-hidden shadow-2xl z-0 dark:from-mammoth-800 dark:to-mammoth-950"></div>
        
        <div className="relative z-10 px-12 py-32 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="overflow-hidden">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block text-ivory-900 dark:text-ivory-50">КОРПОРАТИВНЫЙ</span>
                <span className="block font-serif italic text-amber-600 dark:text-gold-500">САЙТ</span>
                <span className="block text-ivory-700 dark:text-ivory-200">ПРЕМИУМ КЛАССА</span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-xl text-ivory-700 dark:text-ivory-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Элитное цифровое представительство вашего бренда с акцентом на статус и исключительность
            </motion.p>
            
            <div className="mt-12 flex gap-6 flex-wrap">
              <motion.button 
                className="px-10 py-4 bg-ivory-900 text-white font-bold rounded-full shadow-xl hover:bg-ivory-800 transition-all flex items-center gap-3 group dark:bg-gold-600 dark:hover:bg-gold-500 dark:text-mammoth-900"
                whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(210, 180, 140, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Оставить заявку</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              
              <motion.button 
                className="px-10 py-4 border-2 border-ivory-900 text-ivory-900 font-bold rounded-full hover:bg-ivory-100/50 transition-all dark:border-gold-500 dark:text-ivory-100 dark:hover:bg-mammoth-800/50"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Примеры работ
              </motion.button>
            </div>
          </div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl transform rotate-1 dark:bg-gold-500/20"></div>
              <img
                src={corporateImage}
                alt="Премиальный корпоративный сайт"
                className="relative rounded-3xl shadow-xl border-2 border-ivory-300 dark:border-mammoth-700 w-full max-w-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FEATURES - LUXURY STYLE */}
      <div className="relative w-full px-6">
        <SectionTitle text="ЭКСКЛЮЗИВ" />
        
        <motion.section 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {[
            {
              title: "Элитный дизайн",
              description: "Уникальный интерфейс, подчеркивающий статус вашего бренда",
              icon: "👑"
            },
            {
              title: "Премиум материалы",
              description: "Эксклюзивная типографика и визуальные элементы",
              icon: "✨"
            },
            {
              title: "Безупречная реализация",
              description: "Безупречный код и плавные анимации",
              icon: "🎯"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-ivory-300 shadow-sm hover:shadow-md transition-all h-full dark:bg-mammoth-800 dark:border-mammoth-700 dark:hover:shadow-gold-500/10"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-6 dark:text-gold-500">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-ivory-800 dark:text-ivory-100">{item.title}</h3>
              <p className="text-ivory-600 dark:text-ivory-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* PROCESS - LUXURY VERSION */}
      <div className="relative w-full px-6">
        <SectionTitle text="ПРОЦЕСС" />
        
        <motion.section 
          className="max-w-6xl mx-auto py-24 bg-white rounded-[3rem] border border-ivory-300 shadow-sm relative z-10 dark:bg-mammoth-800 dark:border-mammoth-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-20 text-center text-ivory-800 dark:text-ivory-100">Наш подход к созданию шедевров</h2>
          
          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                title: "Концепция",
                description: "Разработка уникальной стратегии для вашего бренда",
                details: [
                  "Анализ конкурентов премиум сегмента",
                  "Разработка уникального стиля",
                  "Создание эмоционального концепта"
                ]
              },
              {
                title: "Дизайн",
                description: "Создание визуальной идентичности",
                details: [
                  "Эксклюзивная типографика",
                  "Фирменные графические элементы",
                  "Анимации и интерактивы"
                ]
              },
              {
                title: "Реализация",
                description: "Безупречная техническая реализация",
                details: [
                  "Оптимизированный код",
                  "Интеграция премиум систем",
                  "Тестирование на всех устройствах"
                ]
              }
            ].map((stage, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="lg:col-span-1">
                  <div className="sticky top-32 space-y-6">
                    <div className="text-amber-500 text-3xl font-bold dark:text-gold-500">0{index + 1}</div>
                    <h3 className="text-3xl font-bold text-ivory-800 dark:text-ivory-100">{stage.title}</h3>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-xl text-ivory-600 leading-relaxed dark:text-ivory-300">{stage.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2.5 dark:bg-gold-500"></div>
                        <span className="text-ivory-700 dark:text-ivory-200">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* PRICING - LUXURY */}
      <div className="relative w-full px-6">
        <SectionTitle text="ИНВЕСТИЦИИ" />
        
        <motion.section 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white p-10 rounded-3xl border-2 border-ivory-300 shadow-lg dark:bg-mammoth-800 dark:border-mammoth-700"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-ivory-800 dark:text-ivory-100">Стандарт</h3>
            <div className="text-5xl font-bold mb-6 text-ivory-900 dark:text-ivory-50">от 120 000₽</div>
            <ul className="space-y-4 mb-10">
              {[
                "Уникальный дизайн",
                "До 10 страниц",
                "Базовые интеграции",
                "SEO оптимизация",
                "1 месяц поддержки"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 dark:bg-gold-500"></div>
                  <span className="dark:text-ivory-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 border-2 border-ivory-900 text-ivory-900 font-bold rounded-full hover:bg-ivory-100 transition dark:border-gold-500 dark:text-ivory-100 dark:hover:bg-mammoth-700">
              Выбрать
            </button>
          </motion.div>
          
          <motion.div
            className="bg-ivory-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden dark:bg-mammoth-950"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full filter blur-3xl dark:bg-gold-500/30"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold">Премиум</h3>
                <div className="bg-amber-500 text-ivory-900 text-xs font-bold px-3 py-1 rounded-full dark:bg-gold-500 dark:text-mammoth-900">
                  РЕКОМЕНДУЕМ
                </div>
              </div>
              <div className="text-5xl font-bold mb-6">от 250 000₽</div>
              <ul className="space-y-4 mb-10">
                {[
                  "Эксклюзивный дизайн",
                  "Неограниченные страницы",
                  "Сложные интеграции",
                  "Полное SEO продвижение",
                  "3 месяца поддержки",
                  "Персональный менеджер"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 dark:bg-gold-400"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-amber-500 text-ivory-900 font-bold rounded-full hover:bg-amber-400 transition dark:bg-gold-500 dark:hover:bg-gold-400">
                Выбрать
              </button>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* CTA - LUXURY */}
      <motion.section 
        className="max-w-6xl mx-auto bg-white rounded-3xl p-16 text-center border-2 border-ivory-300 shadow-xl relative overflow-hidden dark:bg-mammoth-800 dark:border-mammoth-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-amber-100/30 blur-xl dark:bg-gold-500/10"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-amber-100/20 blur-xl dark:bg-gold-500/10"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center bg-amber-100 rounded-full border-2 border-ivory-300 dark:bg-gold-500/20 dark:border-mammoth-700">
            <svg className="w-10 h-10 text-amber-600 dark:text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <h2 className="text-4xl font-serif font-bold mb-6 text-ivory-800 dark:text-ivory-100">
            Готовы создать <span className="italic font-light">эксклюзивный</span> проект?
          </h2>
          
          <p className="text-xl text-ivory-600 mb-10 max-w-2xl mx-auto leading-relaxed dark:text-ivory-300">
            Оставьте заявку для консультации с нашим арт-директором
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button 
              className="px-12 py-5 bg-ivory-900 text-white font-bold rounded-xl hover:bg-ivory-800 transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group dark:bg-gold-600 dark:hover:bg-gold-500 dark:text-mammoth-900"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Обсудить проект</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </motion.button>
            
            <motion.button 
              className="px-12 py-5 border-2 border-ivory-900 text-ivory-900 font-bold rounded-xl hover:bg-ivory-100/50 transition-all duration-300 text-lg shadow-sm hover:shadow-md flex items-center justify-center gap-3 dark:border-gold-500 dark:text-ivory-100 dark:hover:bg-mammoth-700/50"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Заказать звонок</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}