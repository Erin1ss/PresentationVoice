import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, FileText, Globe, Languages, Mic, Volume2, VolumeX, Waves } from 'lucide-react';

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

      <motion.div {...fadeUp} className="relative z-10 slide-inner h-full flex flex-col py-1">
        <div className="text-center">
          <p className="text-[#eaf3ff] text-[0.82rem] md:text-[1.8rem] leading-snug tracking-[0.01em]">
            МБОУ &quot;Гимназия 122 имени Ж.А.Зайцевой&quot;
          </p>
          <p className="mt-1 text-[#c8d9ef] text-[0.8rem] md:text-[1.65rem] leading-snug">
            Московского района г. Казань
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-5xl text-center">
            <h1 className="text-[clamp(2.3rem,7vw,6.4rem)] font-extrabold leading-[0.94] tracking-[0.02em] text-[#f5fbff] drop-shadow-[0_7px_22px_rgba(0,0,0,0.5)]">
              Голос,
              <br />
              превращенный в данные
            </h1>
            <div className="mx-auto mt-10 h-[3px] w-[min(65vw,460px)] bg-gradient-to-r from-[#7de0ff] via-[var(--color-accent-cyan)] to-[#ffd09a] shadow-[0_0_24px_rgba(59,209,255,0.5)]" />
          </div>
        </div>

      </motion.div>

      <div className="absolute inset-x-0 bottom-[clamp(1.2rem,2.2vw,2rem)] z-20 pr-[clamp(0.75rem,1.8vw,1.4rem)] transition-[bottom] duration-500 ease-out">
        <div className="mx-auto w-full max-w-5xl">
          <div className="w-fit ml-auto xl:translate-x-1/2 text-right max-w-[620px]">
          <p className="text-[#79d2ff] font-semibold text-[clamp(0.86rem,1.2vw,1.5rem)] leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            Выполнил: Салахов Эрик, ученик 8А класса
          </p>
          <p className="mt-2 text-[#a8deff] font-semibold text-[clamp(0.86rem,1.2vw,1.5rem)] leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            Руководитель: Хадиева Альбина Виленовна
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Slide2 = () => {
  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="relative z-10 slide-inner max-w-6xl">
        <h2 className="slide-title">Гипотеза, цель и задачи</h2>
        <p className="slide-subtitle">Основа исследования</p>
        <div className="accent-rule" />

        <div className="mt-8 glass-card p-4 md:p-6 border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]">
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-[rgba(59,209,255,0.4)] bg-[linear-gradient(160deg,rgba(59,209,255,0.16),rgba(7,16,34,0.58))] p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--color-accent-cyan)]/90" />
              <h3 className="text-xl md:text-3xl font-bold text-[var(--color-accent-cyan)]">Гипотеза</h3>
              <p className="mt-4 text-base md:text-[1.18rem] leading-relaxed text-white max-w-5xl">
                Технологии распознавания речи могут быть успешно применены в мессенджерах для быстрого и удобного
                получения текстовой информации из голосовых сообщений.
              </p>
            </motion.article>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
              <motion.article
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="lg:col-span-4 rounded-2xl border border-[rgba(255,180,84,0.4)] bg-[linear-gradient(175deg,rgba(255,180,84,0.16),rgba(7,16,34,0.48))] p-5 md:p-6 relative overflow-hidden flex items-center"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--color-accent-amber)]/90" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-accent-amber)]">Цель исследования</h3>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-white">
                    Изучить процесс преобразования голосовой речи в текст и создать простой проект, демонстрирующий работу
                    этой технологии.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="lg:col-span-8 rounded-2xl border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 md:p-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">Задачи исследования</h3>
                <ol className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base text-white/90 list-none pl-0">
                  <li className="rounded-xl border border-white/12 bg-black/20 px-3 py-3 flex items-start gap-3">
                    <span className="text-[var(--color-accent-cyan)] font-semibold shrink-0">1.</span>
                    <span>Изучить принципы работы технологий распознавания речи.</span>
                  </li>
                  <li className="rounded-xl border border-white/12 bg-black/20 px-3 py-3 flex items-start gap-3">
                    <span className="text-[var(--color-accent-cyan)] font-semibold shrink-0">2.</span>
                    <span>Рассмотреть возможности модели Whisper для преобразования голоса в текст.</span>
                  </li>
                  <li className="rounded-xl border border-white/12 bg-black/20 px-3 py-3 flex items-start gap-3">
                    <span className="text-[var(--color-accent-cyan)] font-semibold shrink-0">3.</span>
                    <span>Разработать Telegram-бота для распознавания голосовых сообщений.</span>
                  </li>
                  <li className="rounded-xl border border-white/12 bg-black/20 px-3 py-3 flex items-start gap-3">
                    <span className="text-[var(--color-accent-cyan)] font-semibold shrink-0">4.</span>
                    <span>Проверить точность и удобство работы созданного решения.</span>
                  </li>
                </ol>
              </motion.article>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide3 = () => {
  const timeline = [
    { year: '1970-1980-е', title: 'Статистические модели', text: 'Распознавание словарных наборов' },
    { year: '2000-е', title: 'Deep Learning', text: 'Резкий рост точности моделей' },
    { year: '2026', title: 'Whisper', text: 'Устойчивость к шуму и многоязычность' }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Эволюция распознавания речи</h2>
        <p className="slide-subtitle">Ключевые этапы</p>
        <div className="accent-rule" />

        <div className="mt-10 relative">
          <div className="absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent opacity-60 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
  const flow = [
    { icon: Mic, title: 'Голос' },
    { icon: Cpu, title: 'Whisper' },
    { icon: FileText, title: 'Текст' }
  ];

  const strengths = [
    { icon: Globe, label: 'Языки' },
    { icon: Volume2, label: 'Шум' },
    { icon: Languages, label: 'Перевод' },
    { icon: Waves, label: 'Естественная речь' }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <div className="glass-card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.25)_0%,_transparent_68%)]" />
          <h2 className="slide-title">Whisper от OpenAI</h2>
          <p className="slide-subtitle">ASR-ядро проекта</p>
          <div className="accent-rule" />

          <div className="mt-7 rounded-xl border border-white/12 bg-black/28 p-5 md:p-6 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.2)_0%,_transparent_70%)]" />
            <div className="h-14 w-full max-w-[300px] mx-auto rounded-lg border border-white/10 bg-black/25 px-3 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <OpenAILogo />
            </div>
            <p className="mt-4 text-center text-base md:text-lg text-white/95">Голос -&gt; текст</p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {flow.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-lg border border-white/10 bg-black/20 px-4 py-4 text-center"
                >
                  <div className="h-9 w-9 mx-auto rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent-cyan)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white/95">{item.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 flex justify-center">
              <span className="chip">
                <Activity className="h-3.5 w-3.5" />
                Быстро и точно
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 md:p-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-fr">
              {strengths.map((feature, idx) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-xl border border-white/12 bg-black/25 p-4 md:p-5 flex items-center justify-center gap-3"
                >
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent-amber)]">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm md:text-base leading-tight text-white/95">{feature.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
