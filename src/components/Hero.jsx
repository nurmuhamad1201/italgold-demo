import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        style={{ y, opacity }}
        src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative text-center px-6"
      >
        <motion.p variants={item} className="uppercase tracking-[0.4em] text-gold text-sm mb-6">
          Made in Italy · Dushanbe
        </motion.p>
       <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
  Италянское золото<br />
  <span className="text-gold-light">и натуральные бриллианты</span>
</h1>
<p className="text-neutral-300 max-w-xl mx-auto mb-10">
  Эксклюзивные украшения 750 пробы с бриллиантами. Цепи, кольца, браслеты, серьги и печатки —
  для тех, кто ценит стиль, качество и подлинность.
</p>
        
        <motion.div variants={item} className="flex gap-4 justify-center">
          <motion.a
            href="#catalog"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gold text-ink px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-gold-light transition"
          >
            Смотреть каталог
          </motion.a>
          <motion.a
            href="#contacts"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/30 text-white px-8 py-3 uppercase tracking-wider text-sm hover:border-gold hover:text-gold transition"
          >
            Связаться
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold text-xs uppercase tracking-[0.3em]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓ scroll
        </motion.div>
      </motion.div>
    </section>
  );
}