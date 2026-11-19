import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-ink/70 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-2xl tracking-widest text-gold-light">
          ITALGOLD
        </a>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-neutral-300">
          <a href="#catalog" className="hover:text-gold transition">Каталог</a>
          <a href="#about" className="hover:text-gold transition">О нас</a>
          <a href="#contacts" className="hover:text-gold transition">Контакты</a>
        </nav>
        <a href="tel:+992988999993"
           className="hidden md:inline-block border border-gold text-gold px-5 py-2 text-sm uppercase tracking-wider hover:bg-gold hover:text-ink transition">
          Позвонить
        </a>
      </div>
    </motion.header>
  );
}