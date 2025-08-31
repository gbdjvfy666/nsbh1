import Navbar from "../Components/components/Navbar";
import FilledHoverButton from "../Components/buttons/FilledHoverButton";
import '../index.css'
export default function Design() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
<section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-deutsch">
          Дизайн, который работает на результат
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Создаём визуальную подачу, которая продаёт, выделяет и влюбляет в ваш бренд. От маркетплейсов до логотипов.
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition">
          Получить консультацию
        </button>
      </section>
<FilledHoverButton>Заказать дизайн</FilledHoverButton>
      {/* Услуги */}
<section className="w-full px-0 py-24"> 
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Наши услуги</h2>
    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
      Комплексные дизайн-решения для увеличения продаж и узнаваемости бренда
    </p>
  </div>
  {/* Обернул ScrollStack в отдельный div с full width */}

   <div className="max-w-7xl mx-auto px-6 space-y-12">
    {/* Горизонтальная карточка 1 */}
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col md:flex-row">
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-800 flex items-center justify-center p-8">
          <div className="text-center">
            <span className="text-5xl">🛍️</span>
            <h3 className="text-2xl font-bold mt-4">Дизайн для маркетплейсов</h3>
            <p className="text-blue-200 mt-2">Wildberries • Ozon • Яндекс.Маркет</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 p-8 md:p-12 flex flex-col">
        <div className="flex-1">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Создаем продающие карточки товаров, которые выделяют ваш продукт среди конкурентов и увеличивают конверсию в 1,5-3 раза. 
            Полный цикл: от анализа конкурентов до подготовки файлов по техническим требованиям площадок.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Анализ ниши и конкурентов перед началом работы</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>3 варианта дизайна на выбор + неограниченные правки</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Подготовка файлов по техническим требованиям площадок</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-bold hover:opacity-90 transition flex-1">
            Заказать дизайн
          </button>
          <button className="px-6 py-3 border border-zinc-700 rounded-lg font-bold hover:bg-zinc-800 transition flex-1 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Примеры работ
          </button>
        </div>
      </div>
    </div>

    {/* Горизонтальная карточка 2 */}
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col md:flex-row">
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center p-8">
          <div className="text-center">
            <span className="text-5xl">✨</span>
            <h3 className="text-2xl font-bold mt-4">Брендинг и логотипы</h3>
            <p className="text-amber-200 mt-2">Узнаваемость • Ассоциации • Премиальность</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 p-8 md:p-12 flex flex-col">
        <div className="flex-1">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Разрабатываем уникальные логотипы и комплексный фирменный стиль, который создает сильные ассоциации 
            с вашим брендом. Включает гайдлайны по использованию, цветовые палитры и набор шаблонов.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <h4 className="font-bold text-sm mb-2">БАЗОВЫЙ ПАКЕТ</h4>
              <ul className="text-xs space-y-1 text-gray-400">
                <li>3 концепции логотипа</li>
                <li>Фирменная палитра</li>
                <li>Основные носители</li>
                <li>PDF-гайд</li>
              </ul>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <h4 className="font-bold text-sm mb-2">ПРЕМИУМ ПАКЕТ</h4>
              <ul className="text-xs space-y-1 text-gray-400">
                <li>5 концепций логотипа</li>
                <li>Полный брендбук</li>
                <li>Анимация лого</li>
                <li>50+ шаблонов</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg font-bold hover:opacity-90 transition flex-1">
            Заказать брендинг
          </button>
          <button className="px-6 py-3 border border-zinc-700 rounded-lg font-bold hover:bg-zinc-800 transition flex-1">
            От 7 000 ₽
          </button>
        </div>
      </div>
    </div>

    {/* Горизонтальная карточка 3 */}
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col md:flex-row">
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700 flex items-center justify-center p-8">
          <div className="text-center">
            <span className="text-5xl">📱</span>
            <h3 className="text-2xl font-bold mt-4">Соцсети и контент</h3>
            <p className="text-pink-200 mt-2">Единый стиль • Вовлечение • Узнаваемость</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 p-8 md:p-12 flex flex-col">
        <div className="flex-1">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Комплексное оформление социальных сетей с единой стилистикой: от аватарок и обложек до шаблонов 
            постов и сторис. Помогаем создать узнаваемый визуальный язык вашего бренда.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['VK', 'Telegram', 'Instagram', 'YouTube', 'Одноклассники', 'TikTok', 'WhatsApp', 'Facebook'].map((network, i) => (
              <div key={i} className="px-4 py-2 bg-zinc-800 rounded-full text-sm flex items-center">
                <span className="mr-2">{{
                  'VK': '🔵',
                  'Telegram': '🔷',
                  'Instagram': '🌈',
                  'YouTube': '🔴',
                  'Одноклассники': '🟠',
                  'TikTok': '⚫',
                  'WhatsApp': '🟢',
                  'Facebook': '🔵'
                }[network]}</span>
                {network}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-700 rounded-lg font-bold hover:opacity-90 transition flex-1">
            Оформить соцсети
          </button>
          <button className="px-6 py-3 border border-zinc-700 rounded-lg font-bold hover:bg-zinc-800 transition flex-1 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Портфолио
          </button>
        </div>
      </div>
    </div>

    {/* Горизонтальная карточка 4 */}
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col md:flex-row">
      <div className="md:w-2/5 h-64 md:h-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center p-8">
          <div className="text-center">
            <span className="text-5xl">🎬</span>
            <h3 className="text-2xl font-bold mt-4">Видео и анимация</h3>
            <p className="text-teal-200 mt-2">Вовлечение • Динамика • Эмоции</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 p-8 md:p-12 flex flex-col">
        <div className="flex-1">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Создаем превью для видео, анимированные баннеры и рекламные ролики, которые увеличивают CTR 
            и вовлеченность. От простой анимации логотипа до полноценных рекламных видео.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              {name: 'Превью', icon: '🖼️'},
              {name: 'Сторис', icon: '📲'},
              {name: 'Баннеры', icon: '🖍️'},
              {name: 'Тизеры', icon: '🎥'},
              {name: 'Анимация', icon: '✨'},
              {name: 'Ролики', icon: '🎬'}
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs text-gray-400">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg font-bold hover:opacity-90 transition flex-1">
            Заказать видео
          </button>
          <button className="px-6 py-3 border border-zinc-700 rounded-lg font-bold hover:bg-zinc-800 transition flex-1">
            От 2 500 ₽
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Цены */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Цены на услуги</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-zinc-900 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Карточки маркетплейса</h3>
            <p className="text-3xl font-bold text-blue-500 mb-2">от 1500 ₽</p>
            <p className="text-sm text-gray-400">за 1 товар (6–10 карточек)</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Оформление VK / TG</h3>
            <p className="text-3xl font-bold text-blue-500 mb-2">от 3000 ₽</p>
            <p className="text-sm text-gray-400">аватар, обложка, баннеры</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Логотип + фирстиль</h3>
            <p className="text-3xl font-bold text-blue-500 mb-2">от 7000 ₽</p>
            <p className="text-sm text-gray-400">логотип, шрифт, цвет, шаблоны</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-800 to-purple-900 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Готовы выделяться?</h2>
        <p className="text-gray-100 mb-6 text-lg">Свяжитесь с нами и получите первые предложения уже сегодня</p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition">
          Запросить дизайн
        </button>
      </section>

      {/* Клиенты */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 mb-8">Нам доверяют</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-80">
            {['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5'].map((brand, i) => (
              <div key={i} className="text-2xl font-bold text-gray-300 hover:text-white transition">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги с иконками */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Полный спектр дизайн-решений для вашего бизнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🛍️',
              title: "Дизайн карточек Wildberries / Ozon",
              desc: "Конкурентный дизайн, который выделяет вас в ленте и увеличивает конверсию.",
              color: 'from-purple-600 to-blue-600'
            },
            {
              icon: '🌐',
              title: "Дизайн сайтов и лендингов",
              desc: "Стильные, современные макеты, соответствующие вашему бренду и задачам.",
              color: 'from-blue-600 to-cyan-500'
            },
            {
              icon: '📱',
              title: "Оформление VK страниц",
              desc: "Полное брендирование: обложка, аватар, закреплённые посты, баннеры.",
              color: 'from-cyan-500 to-green-500'
            },
            {
              icon: '✨',
              title: "Разработка логотипов",
              desc: "Фирменный стиль, узнаваемый символ и визуальный якорь вашего бренда.",
              color: 'from-green-500 to-yellow-500'
            },
            {
              icon: '📊',
              title: "Презентации и медиакиты",
              desc: "Сильная визуальная подача для партнёров, инвесторов, клиентов.",
              color: 'from-yellow-500 to-orange-500'
            },
            {
              icon: '🎯',
              title: "Баннеры для рекламы",
              desc: "Креативы для таргета, баннеры, статичные и анимированные форматы.",
              color: 'from-orange-500 to-red-500'
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-br to-zinc-900 from-zinc-800 p-8 rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-300 space-y-6 border border-gray-800 hover:border-gray-700 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              <button className="text-blue-400 font-medium flex items-center group-hover:text-blue-300 transition">
                Подробнее
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Как мы работаем</h2>
          
          <div className="relative">
            {/* Линия процесса */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 -ml-0.5"></div>
            
            {/* Шаги процесса */}
            <div className="space-y-16 md:space-y-0">
              {[
                {
                  step: "01",
                  title: "Обсуждение проекта",
                  desc: "Анализируем ваши задачи, целевую аудиторию и конкурентов"
                },
                {
                  step: "02",
                  title: "Разработка концепции",
                  desc: "Создаём несколько вариантов дизайна на выбор"
                },
                {
                  step: "03",
                  title: "Утверждение",
                  desc: "Выбираем лучший вариант и дорабатываем детали"
                },
                {
                  step: "04",
                  title: "Реализация",
                  desc: "Подготавливаем все файлы и передаём материалы"
                }
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <span className="text-blue-400 font-bold text-lg">Шаг {item.step}</span>
                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xl font-bold z-10 border-4 border-black">
                    {item.step}
                  </div>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 h-48 rounded-2xl shadow-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Цены с табами */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Наши цены</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Гибкие тарифы под разные задачи и бюджет
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-zinc-900 rounded-full p-1">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium">Основные</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white font-medium">Доп. услуги</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:text-white font-medium">Комплекс</button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Стартовый",
              price: "1500 ₽",
              period: "за 1 карточку",
              features: ["1 вариант дизайна", "3 правки", "Срок 1-2 дня", "Файлы для WB/Ozon"],
              popular: false,
              color: "border-gray-800"
            },
            {
              title: "Профессиональный",
              price: "3500 ₽",
              period: "за 3 карточки",
              features: ["3 варианта дизайна", "Неограниченные правки", "Срок 3-5 дней", "Все файлы + исходники"],
              popular: true,
              color: "border-blue-500"
            },
            {
              title: "Премиум",
              price: "7000 ₽",
              period: "за 5 карточек",
              features: ["5 вариантов дизайна", "Неограниченные правки", "Срок 5-7 дней", "Полный бренд-пакет"],
              popular: false,
              color: "border-purple-500"
            }
          ].map((plan, i) => (
            <div key={i} className={`border-2 ${plan.color} bg-zinc-900 rounded-3xl p-8 relative overflow-hidden ${plan.popular ? 'scale-105 shadow-xl shadow-blue-500/20' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-4xl font-extrabold mb-1">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.period}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-zinc-800 hover:bg-zinc-700'} transition`}>
                Заказать
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Портфолио */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Наши работы</h2>
              <p className="text-xl text-gray-400">Реальные кейсы с измеримыми результатами</p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-4 border-2 border-gray-700 text-white rounded-full font-bold hover:bg-white hover:text-black transition">
              Все работы
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-3xl h-80">
                <div className={`absolute inset-0 bg-gradient-to-br ${[
                  'from-purple-900 to-blue-800',
                  'from-pink-700 to-red-900',
                  'from-yellow-600 to-orange-600',
                  'from-green-600 to-teal-700',
                  'from-blue-700 to-cyan-600',
                  'from-gray-800 to-gray-900'
                ][item % 6]} transition-all duration-700 group-hover:scale-105`}></div>
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Проект {item}
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {[
                      'Дизайн карточек для маркетплейса',
                      'Фирменный стиль для бренда',
                      'Лендинг для IT-компании',
                      'Оформление соцсетей',
                      'Рекламные баннеры',
                      'Презентация продукта'
                    ][item % 6]}
                  </p>
                  <button className="mt-4 self-start px-6 py-2 bg-white text-black rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                role: "Владелец магазина косметики",
                text: "После обновления дизайна карточек на WB продажи выросли на 40%. Дизайнеры точно уловили стиль бренда и сделали акценты на преимуществах.",
                rating: 5
              },
              {
                name: "Максим С.",
                role: "Стартап в сфере IT",
                text: "Заказали логотип и фирстиль. Получили не просто картинку, а продуманную систему, которую легко масштабировать на все носители. Рекомендую!",
                rating: 5
              },
              {
                name: "Елена П.",
                role: "Блогер",
                text: "Сделали потрясающее оформление для моего инстаграм и ВК. Теперь страницы выглядят профессионально и цельно. Подписчики отмечают изменения.",
                rating: 4
              }
            ].map((review, i) => (
              <div key={i} className="bg-zinc-800 p-8 rounded-3xl border border-zinc-700 hover:border-zinc-600 transition">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-5 h-5 ${j < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-4"></div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA с формой */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Готовы выделяться?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Оставьте заявку и получите бесплатную консультацию по вашему проекту в течение 24 часов
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">Индивидуальный подход</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">Гарантия качества</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">Соблюдение сроков</span>
                </li>
              </ul>
            </div>
            
            <form className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="mb-6">
                <label className="block text-gray-200 mb-2">Ваше имя</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Иван Иванов" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-200 mb-2">Контактные данные</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Телефон или email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-200 mb-2">Опишите ваш проект</label>
                <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" placeholder="Какие услуги вас интересуют?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-lg font-bold hover:opacity-90 transition">
                Отправить заявку
              </button>
              <p className="text-xs text-gray-400 mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Дизайн-студия</h3>
              <p className="text-gray-400">Создаём эффективный дизайн для бизнеса с 2018 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Дизайн маркетплейсов</a></li>
                <li><a href="#" className="hover:text-white transition">Фирменный стиль</a></li>
                <li><a href="#" className="hover:text-white transition">Лендинги</a></li>
                <li><a href="#" className="hover:text-white transition">Оформление соцсетей</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@design.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, ул. Дизайнеров, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="sr-only">VK</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 11 9.89 12.8 10.38 12.8C10.57 12.8 10.65 12.71 10.65 12.25V10.1C10.6 9.12 10.07 9.03 10.07 8.68C10.07 8.5 10.21 8.34 10.44 8.34H12.73C13.04 8.34 13.15 8.5 13.15 8.88V11.77C13.15 12.08 13.28 12.19 13.38 12.19C13.56 12.19 13.72 12.08 14.05 11.74C15.1 10.57 15.85 8.76 15.85 8.76C15.95 8.55 16.11 8.35 16.48 8.35H17.93C18.37 8.35 18.47 8.58 18.37 8.89C18.19 9.74 16.41 12.25 16.43 12.25C16.27 12.5 16.21 12.61 16.43 12.9C16.58 13.13 17.09 13.55 17.43 13.94C18.05 14.65 18.53 15.24 18.66 15.65C18.77 16.06 18.57 16.27 18.15 16.27" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                  <span className="sr-only">Telegram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.03-.09.06-.42-.08-.59-.13-.17-.38-.12-.59-.07-.25.05-4.22 2.66-4.96 3.12-.47.3-.9.44-1.28.45-.48 0-1.4-.27-1.7-.5-.65-.5-1.18-1.4-1.26-1.54-.07-.13-.03-.32.1-.5.1-.14.25-.2.45-.2.17 0 .34 0 .49.03.55.15 1.72 1.1 3.48 2.12 2.49 1.44 3.26 1.69 4.05 1.69.28 0 .57-.03.83-.13.7-.27.78-.9.86-1.36.06-.34.41-2.17.47-2.71.04-.32-.07-.5-.28-.6-.22-.1-.52-.07-.8.05-.34.15-2.12 1.36-2.33 1.44-.39.18-.78.16-1.12-.05-.35-.22-.76-.72-1.13-1.11-.42-.44-.75-.79-1.2-1.27-.32-.34-.7-.72-.08-1.08.41-.24.89-.35 1.44-.36.48 0 .98.1 1.51.27 1.17.34 1.93.56 2.78.85.88.3 1.76.63 2.6.66.6.02 1.17-.17 1.7-.62.22-.19.48-.57.6-.89.07-.16.04-.3 0-.42-.03-.1-.2-.23-.42-.3-.17-.05-.37-.06-.56-.04z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 Дизайн-студия. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Договор-оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}