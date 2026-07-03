'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: 'Pré-National', label: 'Équipe 1 — Senior Masculins & Féminins' },
  { value: 'Paris 20e', label: 'Quartier de Charonne' },
  { value: 'Haut niveau', label: 'Passion & excellence' },
];

export default function ClubStrip() {
  return (
    <section className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-dark-1 text-white border-y border-white/5"
      >
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center py-6 md:py-8 gap-1.5 border-b border-white/10 last:border-b-0 md:border-b-0"
              >
                <span className="font-display text-22 md:text-32 uppercase tracking-widest text-white">
                  {stat.value}
                </span>
                <span className="text-12 md:text-13 text-white/40 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="gradient_brand h-0.5 w-full" />
      </motion.div>
    </section>
  );
}
