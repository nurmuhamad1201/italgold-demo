import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">Контакты</p>
          <h2 className="font-serif text-4xl text-white mb-8">Заходите в салон</h2>
          <div className="space-y-6 text-neutral-300">
            <div>
              <p className="text-gold text-sm uppercase tracking-wider mb-1">Адрес</p>
              <p>г. Душанбе, ул. Бухоро, ориентир Дом Печати</p>
            </div>
            <div>
              <p className="text-gold text-sm uppercase tracking-wider mb-1">Телефон</p>
              <a href="tel:+992988999993" className="hover:text-gold transition">+992 988 99 99 93</a>
            </div>
            <div>
              <p className="text-gold text-sm uppercase tracking-wider mb-1">Часы работы</p>
              <p>Ежедневно · 09:00 — 20:00</p>
            </div>
          </div>
          <motion.a
            href="https://wa.me/992988999993"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 bg-gold text-ink px-8 py-3 uppercase tracking-wider text-sm font-medium hover:bg-gold-light transition"
          >
            Написать в WhatsApp
          </motion.a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="h-[400px] border border-white/5 overflow-hidden">
            <iframe
              src="https://yandex.tj/map-widget/v1/?ll=68.788618%2C38.571342&z=16.42&pt=68.788618,38.571342,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="ITALGOLD на карте"
              className="w-full h-full grayscale-[0.3] contrast-[1.1]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}