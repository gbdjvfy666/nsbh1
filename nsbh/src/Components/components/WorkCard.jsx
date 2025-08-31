import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export default function WorkCard({ title, image, description  }) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  // 🔒 Блокировка скролла
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => (document.body.style.overflow = '')
  }, [isOpen])

  // 🔐 Фокус-трап
  useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusableElements[0]
    const last = focusableElements[focusableElements.length - 1]

    const trap = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', trap)
    first?.focus()

    return () => document.removeEventListener('keydown', trap)
  }, [isOpen])

  // 🌀 Модальное окно через Portal
  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Затемнение + blur */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Сама модалка */}
<motion.div
  ref={modalRef}
  className="
    fixed z-[9999] left-1/2 top-1/2 
    bg-white dark:bg-black text-black dark:text-white 
    border-[2px] border-black dark:border-white
    shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff]
    rounded-[1rem] p-6
    w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto
  "
  initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
  animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
  style={{ transform: 'translate(-50%, -50%)' }}
  role="dialog"
  tabIndex={-1}
>
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Контент */}
            <img src={image} className="w-full h-60 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed whitespace-normal">{description}</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {/* Карточка */}
<div
  onClick={() => setIsOpen(true)}
  className="
    bg-white dark:bg-black text-black dark:text-white
    border-[2px] border-black dark:border-white
    shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]
    rounded-[0.75rem]
    overflow-hidden cursor-pointer
    transition-transform hover:scale-105
    active:shadow-none active:translate-y-[2px]
  "
>
  <img src={image} alt={title} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-xl font-extrabold uppercase tracking-tight">{title}</h3>
  </div>
</div>


      {/* Монтируем в body */}
      {typeof window !== 'undefined' && createPortal(modal, document.body)}
    </>
  )
}