import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-coal">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
            alt=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={item} className="uppercase tracking-[0.3em] text-gold text-xs mb-3">О нас</motion.p>
          <motion.h2 variants={item} className="font-serif text-4xl text-white mb-6">
            Традиции итальянских мастеров
          </motion.h2>
         <p className="text-neutral-400 mb-4">
  ITALGOLD JEWELRY — салон эксклюзивных украшений из Италии в центре Душанбе.
  Мы работаем напрямую с фабриками Вальенцы и Виченцы: золото 750 пробы,
  натуральные бриллианты и ручная работа. Украшения для женщин и мужчин —
  на каждый день и для особых случаев.
</p>
<ul className="space-y-3 text-neutral-300">
  <li>✦ Золото 750 пробы (18 карат)</li>
  <li>✦ Натуральные бриллианты с сертификатом</li>
  <li>✦ Прямые поставки из Италии</li>
  <li>✦ Гарантия подлинности</li>
  <li>✦ Подбор для женщин и мужчин</li>
</ul>
        </motion.div>
      </div>
    </section>
  );
}