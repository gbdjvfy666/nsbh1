import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import texas from '../../assets/texas.svg';


gsap.registerPlugin(ScrollTrigger);

const WorkCard = ({ title, image, description, onLearnMore }) => (
  <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/50 transition-colors h-full flex flex-col">
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <div className="aspect-video bg-black/50 mb-4 rounded-lg overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
    <p className="text-gray-300 mb-4 flex-grow">{description}</p>
    <div className="flex gap-3">
      <button 
        onClick={onLearnMore}
        className="flex-1 py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm transition-colors"
      >
        Узнать тариф
      </button>
      <button 
        onClick={onLearnMore}
        className="flex-1 py-2 px-4 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-lg text-sm transition-colors"
      >
        Ознакомиться
      </button>
    </div>
  </div>
);

export default function Cardio({ scrollToComponent }) {
  const container = useRef();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const cards = [
    {
      id: 'landing',
      title: 'Лендинг под ключ',
      image: '/images/1.jpg',
      description: 'Одностраничный сайт с яркой подачей, анимациями и адаптацией под все устройства. Идеален для запуска продукта, услуги или акции с высокой конверсией.',
    },
    {
      id: 'shop',
      title: 'Интернет-магазин',
      image: '/images/2.jpg',
      description: 'Каталог, корзина, онлайн-оплата, личный кабинет и мощная админка — всё, чтобы вы могли продавать 24/7 без ограничений и технических сложностей.',
    },
    {
      id: 'corporate',
      title: 'Корпоративный сайт',
      image: '/images/3.jpg',
      description: 'Стильный и функциональный сайт для компании: описание услуг, команда, кейсы, контакты. Повышает доверие и привлекает новых клиентов.',
    },
    {
      id: 'multi',
      title: 'Многостраничный сайт',
      image: '/images/1.jpg',
      description: 'Сайт с полноценной структурой: разделы «О нас», «Контакты», «Услуги», блог и другие страницы. Отлично подходит для малого и среднего бизнеса.',
    },
    {
      id: 'portfolio',
      title: 'Сайт-портфолио',
      image: '/images/2.jpg',
      description: 'Минималистичный и эстетичный сайт для демонстрации работ, кейсов, отзывов. Идеален для дизайнеров, фотографов и фрилансеров.',
    },
    {
      id: 'event',
      title: 'Сайт мероприятия',
      image: '/images/3.jpg',
      description: 'Продающий сайт для конференции, форума, вечеринки или онлайн-события. Таймер, регистрация, программа, интеграции и визуальный стиль мероприятия.',
    },
    {
      id: 'restaurant',
      title: 'Сайт для ресторана',
      image: '/images/3.jpg',
      description: 'Атмосферный сайт с меню, бронированием, отзывами и интеграциями. Работает как витрина и точка входа для новых гостей и заказов.',
    },
    {
      id: 'blog',
      title: 'Блог / новостной сайт',
      image: '/images/1.jpg',
      description: 'Редакционная платформа с категориями, фильтрами, поиском, комментариями и подписками. Подходит для СМИ, экспертов и авторов.',
    },
    {
      id: 'school',
      title: 'Сайт школы / сада',
      image: '/images/2.jpg',
      description: 'Удобный сайт с программой, педагогами, расписанием, фотоархивом и новостями. Решает все задачи родительского и педагогического взаимодействия.',
    },
    {
      id: 'courses',
      title: 'Платформа онлайн-курсов',
      image: '/images/1.jpg',
      description: 'Сайт для продажи знаний: личные кабинеты, видеоуроки, оплата, тесты и сертификаты. Отличный старт для образовательного проекта.',
    },
    {
      id: 'designer',
      title: 'Дизайнер одежды / продукта',
      image: '/images/2.jpg',
      description: 'Индивидуальный сайт-бутик с каталогом, сторителлингом, онлайн-оплатой и оформлением бренда. Максимум стиля и продаж.',
    },
    {
      id: 'media',
      title: 'Медиа-бренд',
      image: '/images/2.jpg',
      description: 'Центр вашей медиа-активности: статьи, видео, подписки, интеграции, комьюнити. Отлично подойдёт для инфлюенсера или digital-команды.',
    }
  ];

  const idToRefKey = {
    landing: 'LandingMain',
    shop: 'OnlineShopMain',
    corporate: 'CorporateMain',
    multi: 'MultipageSiteMain',
    restaurant: 'RestaurantSiteMain',
    blog: 'NewsBlogMain',
    designer: 'DesignerSiteMain',
    media: 'ResponsiveDemo',
    courses: 'CryptoProjectMain',
  };

  const handleLearnMore = (cardId) => {
    const componentName = idToRefKey[cardId];
    if (!componentName) return;
    setDetailsOpen(false);
    setTimeout(() => {
      scrollToComponent(componentName);
    }, 300);
  };

  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      gsap.from(container.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);

    return () => ctx.revert();
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="w-full min-h-screen bg-black text-white relative z-10 pt-24">
        <div className="h-screen flex items-center justify-center">
          <div className="animate-pulse text-2xl">Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div ref={container} className="w-full min-h-screen bg-black text-white relative z-10 ">
      {/* Hero Section */}
<div 
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `
      radial-gradient(circle at center, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
      url(${texas})
    `
  }}
>
        <div className="text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6"
          >
            Создаём <span className="text-pink-400">сайты</span> под ключ
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Современные, быстрые и адаптивные решения для вашего бизнеса
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              onClick={() => setDetailsOpen(true)}
              className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors"
            >
              Подробнее
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal with Cards */}
      {detailsOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-30 pt-20 pb-10 px-4 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setDetailsOpen(false)}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Наши решения
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card) => (
                <WorkCard 
                  key={card.id}
                  title={card.title}
                  image={card.image}
                  description={card.description}
                  onLearnMore={() => handleLearnMore(card.id)}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => setDetailsOpen(false)}
                className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-medium rounded-full transition-colors"
              >
                Вернуться назад
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}