import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, FileText, Globe, Languages, Mic, Sparkles, Volume2, VolumeX, Waves } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.65, ease: 'easeOut' }
} as const;

const OpenAILogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1180 320"
      className="h-9 w-auto block text-white"
      aria-label="OpenAI logo"
      role="img"
    >
      <path fill="currentColor" d="m367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z" />
      <path fill="currentColor" d="m614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84v-13.44h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z" />
      <path fill="currentColor" d="m747.65 242.64c25.2 0 45.12-13.2 54-35.28l-24.72-9.36c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z" />
      <path fill="currentColor" d="m823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88v74.64h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84v-13.44h-28.8z" />
      <path fill="currentColor" d="m1014.17 67.68-65.28 172.32h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24z" />
      <path fill="currentColor" d="m1163.69 68.18h-30.72v172.32h30.72z" />
      <path fill="currentColor" d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" />
    </svg>
  );
};

export const Slide1 = () => {
  return (
    <div className="slide-shell overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b17] via-[#050b17]/85 to-[#050b17]/35" />

      <motion.div {...fadeUp} className="relative z-10 slide-inner">
        <div className="max-w-4xl">
          <span className="chip mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Проектная презентация
          </span>
          <h1 className="text-[clamp(2.2rem,7vw,6.2rem)] font-extrabold leading-[0.94] tracking-[0.02em]">
            Голос,
            <br />
            превращенный в данные
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-2xl text-[var(--color-text-soft)]">
            Как работает распознавание речи и почему модель Whisper стала практичной основой для реального бота.
          </p>
          <div className="mt-10 h-[3px] w-[min(65vw,420px)] bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-amber)] shadow-[0_0_22px_rgba(59,209,255,0.45)]" />
        </div>
      </motion.div>
    </div>
  );
};

export const Slide2 = () => {
  const cards = [
    {
      title: 'Голосовые сообщения',
      image: 'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=1400',
      desc: 'Мессенджеры и быстрые ответы'
    },
    {
      title: 'Умные устройства',
      image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=2787&auto=format&fit=crop',
      desc: 'Колонки, дом и авто'
    },
    {
      title: 'Диктовка текста',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop',
      desc: 'Конспекты и заметки'
    },
    {
      title: 'Субтитры и медиа',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400',
      desc: 'Доступность и архив'
    }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="relative z-10 slide-inner">
        <h2 className="slide-title">Мир, который слушает</h2>
        <p className="slide-subtitle">Контекст задачи</p>
        <div className="accent-rule" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card group relative min-h-44 overflow-hidden"
            >
              <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 p-5 md:p-6 flex h-full flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold">{card.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-soft)]">{card.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 md:mt-7 text-sm md:text-base text-[var(--color-text-soft)] max-w-4xl">
          Гипотеза: распознавание речи может автоматически превращать голосовые сообщения в читаемый и удобный текст.
        </p>
      </motion.div>
    </div>
  );
};

export const Slide3 = () => {
  const timeline = [
    { year: '1952', title: 'Audrey (Bell Labs)', text: 'Распознавание отдельных цифр' },
    { year: '1980-е', title: 'Статистические модели', text: 'Распознавание словарных наборов' },
    { year: '2010-е', title: 'Deep Learning', text: 'Резкий рост точности моделей' },
    { year: '2022', title: 'Whisper', text: 'Устойчивость к шуму и многоязычность' }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Эволюция распознавания речи</h2>
        <p className="slide-subtitle">Ключевые этапы</p>
        <div className="accent-rule" />

        <div className="mt-10 relative">
          <div className="absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-60 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="glass-card relative p-5 md:p-6 pt-10"
              >
                <div className="absolute top-4 right-4 h-3.5 w-3.5 rounded-full bg-[var(--color-accent-amber)] shadow-[0_0_12px_rgba(255,180,84,0.7)]" />
                <p className="font-mono text-sm text-[var(--color-accent-cyan)] pr-6">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-soft)]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide4 = () => {
  const steps = [
    { title: 'Запись', sub: 'Голос превращается в аудиосигнал', icon: Mic },
    { title: 'Очистка', sub: 'Подавление шума и нормализация', icon: VolumeX },
    { title: 'Признаки', sub: 'Извлечение спектральных параметров', icon: Activity },
    { title: 'Модель', sub: 'Whisper строит текстовую гипотезу', icon: Cpu },
    { title: 'Результат', sub: 'Готовый текст для пользователя', icon: FileText }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Анатомия преобразования</h2>
        <p className="slide-subtitle">От микрофона до текста</p>
        <div className="accent-rule" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-4 md:p-5 flex flex-col justify-between min-h-44"
            >
              <div className="h-10 w-10 rounded-lg bg-[var(--color-surface)] border border-white/15 flex items-center justify-center text-[var(--color-accent-cyan)]">
                <step.icon className="h-5 w-5" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-soft)]">{step.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Slide5 = () => {
  const features = [
    { icon: Globe, label: 'Многоязычность' },
    { icon: Volume2, label: 'Шумоустойчивость' },
    { icon: Languages, label: 'Перевод' },
    { icon: Waves, label: 'Живая речь' }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <div className="glass-card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.25)_0%,_transparent_68%)]" />
          <h2 className="slide-title">Whisper от OpenAI</h2>
          <p className="slide-subtitle">Опорная технология проекта</p>
          <div className="accent-rule" />

          <div className="mt-7 space-y-6 md:space-y-7">
            <div className="rounded-xl border border-white/12 bg-black/30 p-6 md:p-8 relative overflow-hidden min-h-[260px] flex flex-col justify-center">
              <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.2)_0%,_transparent_70%)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full border border-white/8 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_0%,_transparent_72%)]" />
              <div className="h-14 w-full max-w-[300px] mx-auto flex items-center justify-center relative z-10 rounded-lg border border-white/10 bg-black/25 px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <OpenAILogo />
              </div>
              <div className="mt-4 h-px w-full max-w-[420px] mx-auto bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <div className="mt-5 relative max-w-[30rem] mx-auto px-8 md:px-10">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-6 md:w-8 bg-gradient-to-r from-transparent to-[var(--color-accent-cyan)]" />
                <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cyan)]/80" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-6 md:w-8 bg-gradient-to-l from-transparent to-[var(--color-accent-cyan)]" />
                <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cyan)]/80" />
                <p className="text-lg md:text-[1.32rem] leading-snug text-center mx-auto">
                  Точная речь-в-текст для практических задач.
                </p>
              </div>
              <div className="mt-5 flex justify-center">
                <span className="chip">ASR ядро проекта</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)] mb-4 md:mb-5 text-center">Преимущества</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-fr">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-xl border border-white/12 bg-black/25 p-4 md:p-5 flex flex-col justify-between items-center text-center min-h-[132px] md:min-h-[148px] relative"
              >
                <span className="absolute top-3 right-3 text-[10px] font-[var(--font-mono)] tracking-[0.12em] text-[var(--color-text-soft)]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="h-10 w-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent-amber)]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="mt-4">
                  <p className="text-base leading-tight text-white/95">{feature.label}</p>
                </div>
              </motion.div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
