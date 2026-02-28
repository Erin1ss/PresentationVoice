import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  FileCode2,
  Globe,
  Mic,
  Radio,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.65, ease: 'easeOut' }
} as const;

export const Slide6 = () => {
  const tools = [
    { name: 'Python', sub: 'Ядро логики бота', icon: FileCode2 },
    { name: 'Telegram Bot API', sub: 'Прием сообщений', icon: Bot },
    { name: 'FFmpeg', sub: 'Преобразование аудио', icon: Radio },
    { name: 'Whisper', sub: 'Распознавание речи', icon: Cpu },
    { name: 'NumPy', sub: 'Обработка массивов', icon: Workflow },
    { name: 'Локальный запуск', sub: 'Без облака и задержек', icon: Terminal }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Арсенал проекта</h2>
        <p className="slide-subtitle">Технологический стек</p>
        <div className="accent-rule" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {tools.map((tool, idx) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: idx * 0.06 }}
              className="glass-card p-4 md:p-5"
            >
              <div className="h-10 w-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent-cyan)]">
                <tool.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold leading-tight">{tool.name}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">{tool.sub}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Slide7 = () => {
  const route = [
    { title: 'Пользователь', icon: Mic },
    { title: 'Telegram', icon: Bot },
    { title: 'Конвертер .ogg -> .wav', icon: Workflow },
    { title: 'Whisper', icon: Cpu },
    { title: 'Текст', icon: Code2 },
    { title: 'Ответ', icon: CheckCircle2 }
  ];

  const badges = [
    { icon: ShieldCheck, text: 'Надежность' },
    { icon: Globe, text: 'Мультиязычность' },
    { icon: Zap, text: 'Масштабируемость' }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Маршрут голосового сообщения</h2>
        <p className="slide-subtitle">Поток данных</p>
        <div className="accent-rule" />

        <div className="mt-8 grid grid-cols-1 gap-2 md:hidden">
          {route.map((step, idx) => (
            <React.Fragment key={`mobile-${step.title}`}>
              <div className="glass-card p-4 min-h-24 flex flex-col items-center justify-center text-center">
                <step.icon className="h-6 w-6 text-[var(--color-accent-cyan)]" />
                <p className="mt-2 text-sm leading-snug">{step.title}</p>
              </div>
              {idx < route.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="h-5 w-5 text-[var(--color-accent-amber)]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-3">
          {route.map((step, idx) => (
            <div key={`tablet-${step.title}`} className="glass-card p-4 min-h-28 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <span className="absolute top-2 right-3 text-xs font-[var(--font-mono)] text-[var(--color-text-soft)]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <step.icon className="h-7 w-7 text-[var(--color-accent-cyan)]" />
              <p className="mt-3 text-sm lg:text-base leading-snug">{step.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 hidden xl:flex items-stretch justify-center gap-2">
          {route.map((step, idx) => (
            <React.Fragment key={`desktop-${step.title}`}>
              <div className="glass-card px-3 py-4 lg:px-4 lg:py-5 min-h-28 w-[145px] lg:w-[164px] flex flex-col items-center justify-center text-center shrink-0">
                <step.icon className="h-7 w-7 text-[var(--color-accent-cyan)]" />
                <p className="mt-3 text-sm lg:text-base leading-snug">{step.title}</p>
              </div>
              {idx < route.length - 1 && (
                <div className="flex items-center justify-center px-1">
                  <ArrowRight className="h-6 w-6 text-[var(--color-accent-amber)]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span key={badge.text} className="chip">
              <badge.icon className="h-3.5 w-3.5" />
              {badge.text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Slide8 = () => {
  const files = [
    '.env',
    'config.py',
    'bot.py',
    'audio_processor.py',
    'speech_recognizer.py'
  ];

  const flow = ['bot.py', 'audio_processor.py', 'speech_recognizer.py', 'bot.py'];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Архитектура кода</h2>
        <p className="slide-subtitle">Структура и связи модулей</p>
        <div className="accent-rule" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
          <div className="glass-card overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10 bg-black/35 flex items-center gap-2 text-xs text-[var(--color-text-soft)] font-[var(--font-mono)]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2">voice-to-text-bot</span>
            </div>
            <div className="p-4 md:p-5 space-y-2 font-[var(--font-mono)] text-sm">
              {files.map((file) => (
                <div key={file} className={`rounded-md px-3 py-2 ${file === 'bot.py' ? 'bg-white/12 border border-white/20' : 'bg-white/5 border border-white/10'}`}>
                  {file}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5 md:p-7 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-text-soft)]">Поток исполнения</p>
            <div className="mt-6 space-y-3">
              {flow.map((file, idx) => (
                <div key={`${file}-${idx}`} className="flex items-center gap-3">
                  <div className="h-9 min-w-0 flex-1 rounded-lg border border-[rgba(59,209,255,0.45)] bg-black/25 px-3 flex items-center">
                    <code className="font-[var(--font-mono)] text-sm text-[var(--color-accent-cyan)]">{file}</code>
                  </div>
                  {idx < flow.length - 1 && <ArrowRight className="h-4 w-4 text-[var(--color-accent-amber)]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide9 = () => {
  const roadmap = [
    'Автоперевод на язык чата',
    'Пунктуация и стилистическая правка',
    'Потоковая расшифровка в реальном времени',
    'Интеграция с CRM и helpdesk',
    'Голосовые команды для сценариев'
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Испытания и горизонты</h2>
        <p className="slide-subtitle">Результаты и дальнейшее развитие</p>
        <div className="accent-rule" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 items-stretch">
          <div className="glass-card p-5 md:p-7 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-text-soft)]">Демо-результат</p>
              <h3 className="mt-3 text-2xl font-bold">Текст получен за ~7 секунд</h3>
              <p className="mt-3 text-[var(--color-text-soft)]">
                Бот корректно распознает сообщение и возвращает готовый текст без внешнего API-задержки.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="chip">Время ответа: 7 с</span>
              <span className="chip">Стабильная точность</span>
            </div>
          </div>

          <div className="glass-card p-5 md:p-7">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-text-soft)]">Следующий этап</p>
            <ul className="mt-4 space-y-3">
              {roadmap.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent-amber)] shadow-[0_0_10px_rgba(255,180,84,0.65)]" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide10 = () => {
  const points = ['Принципы изучены', 'Whisper исследован', 'Рабочий прототип собран', 'Цель проекта достигнута'];

  return (
    <div className="slide-shell overflow-hidden text-center items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-[#050b17]/80 to-[#050b17]/45" />

      <motion.div {...fadeUp} className="relative z-10 slide-inner max-w-4xl">
        <h2 className="text-[clamp(2rem,6vw,5.2rem)] font-extrabold uppercase leading-[0.96]">Гипотеза подтверждена</h2>
        <p className="slide-subtitle">Итог проекта</p>
        <div className="accent-rule mx-auto" />

        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {points.map((point, idx) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-4"
            >
              <CheckCircle2 className="h-5 w-5 mx-auto text-[var(--color-accent-cyan)]" />
              <p className="mt-2 text-sm md:text-base">{point}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 md:mt-12 text-[var(--color-text-soft)] tracking-[0.26em] uppercase text-xs md:text-sm">
          Спасибо за внимание
        </p>
      </motion.div>
    </div>
  );
};
