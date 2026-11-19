import { motion } from "framer-motion";
import { products } from "../data/products";
import Reveal from "./Reveal";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">Коллекция</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Каталог украшений</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-coal border border-white/5 overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover"
              />
            </div>
            {p.tag && (
              <span className="absolute top-4 left-4 bg-gold text-ink text-xs uppercase tracking-wider px-3 py-1">
                {p.tag}
              </span>
            )}
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">{p.name}</h3>
                <p className="text-gold text-sm mt-1">{p.price}</p>
              </div>
              <motion.button
                whileHover={{ x: 4 }}
                className="text-neutral-400 hover:text-gold text-2xl transition"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}