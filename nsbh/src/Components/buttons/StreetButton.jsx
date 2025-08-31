import { motion } from "framer-motion"

export default function StreetButton({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      whileHover={{
        y: -2,
        boxShadow: "0px 6px 0px 0px #000",
      }}
      className={`
        px-6 py-3 my-3
        text-black dark:text-white
        uppercase tracking-wide text-sm sm:text-base font-black
        border-[2px] border-black dark:border-white
        bg-white dark:bg-black
        shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]
        transition-all duration-150
        hover:bg-neutral-100 dark:hover:bg-neutral-900
        active:shadow-none active:translate-y-[2px]
        rounded-[0.75rem]
        ${className}
      `}
    >
      {children}
    </motion.button>
  )
}
