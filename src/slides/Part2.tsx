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
  viewport: { once: false, amount: 0.35 },
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
              viewport={{ once: false, amount: 0.25 }}
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

        <div className="mt-8 rounded-2xl border border-white/12 bg-black/22 p-4 md:p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-soft)]">Путь обработки</p>

          <div className="mt-4 grid grid-cols-1 gap-2 md:hidden">
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

          <div className="mt-4 hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {route.map((step, idx) => (
              <motion.div
                key={`tablet-${step.title}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card relative px-3 py-4 lg:px-4 lg:py-5 min-h-28 flex flex-col items-center justify-center text-center"
              >
                <step.icon className="h-7 w-7 text-[var(--color-accent-cyan)]" />
                <p className="mt-3 text-sm lg:text-base leading-snug">{step.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 hidden xl:flex items-stretch justify-center gap-2">
            {route.map((step, idx) => (
              <React.Fragment key={`desktop-${step.title}`}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="glass-card relative px-3 py-4 lg:px-4 lg:py-5 min-h-28 w-[148px] flex flex-col items-center justify-center text-center shrink-0"
                >
                  <step.icon className="h-7 w-7 text-[var(--color-accent-cyan)]" />
                  <p className="mt-3 text-sm leading-snug">{step.title}</p>
                </motion.div>
                {idx < route.length - 1 && (
                  <div className="flex items-center justify-center px-0.5">
                    <ArrowRight className="h-5 w-5 text-[var(--color-accent-amber)]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-black/18 p-4 md:p-5">
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span key={badge.text} className="chip">
                <badge.icon className="h-3.5 w-3.5" />
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide8 = () => {
  const files = [
    { name: '.env', icon: ShieldCheck, role: 'Токены и секреты' },
    { name: 'config.py', icon: Workflow, role: 'Параметры и пути' },
    { name: 'bot.py', icon: Bot, role: 'Точка входа', highlighted: true },
    { name: 'audio_processor.py', icon: Radio, role: 'Нормализация звука' },
    { name: 'speech_recognizer.py', icon: Cpu, role: 'Распознавание речи' }
  ];

  const summary = [
    { label: 'Вход', value: '.ogg / .mp3' },
    { label: 'Обработка', value: 'FFmpeg + Whisper' },
    { label: 'Выход', value: 'Готовый текст' }
  ];

  const flow = [
    { name: 'Получение файла', icon: Bot, code: 'bot.py' },
    { name: 'Конвертация и чистка', icon: Radio, code: 'audio_processor.py' },
    { name: 'Транскрибация', icon: Cpu, code: 'speech_recognizer.py' },
    { name: 'Отправка результата', icon: CheckCircle2, code: 'bot.py' }
  ];

  return (
    <div className="slide-shell">
      <motion.div {...fadeUp} className="slide-inner">
        <h2 className="slide-title">Архитектура кода</h2>
        <p className="slide-subtitle">Структура и связи модулей</p>
        <div className="accent-rule" />

        <div className="lg:scale-95 lg:origin-top-left">
          <div className="mt-4 grid grid-cols-1 gap-2 md:flex md:items-center md:gap-2">
            {summary.map((item, idx) => (
              <React.Fragment key={item.label}>
                <div className="rounded-xl border border-white/12 bg-black/20 px-3.5 py-2.5 md:flex-1">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-soft)]">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
                {idx < summary.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-1">
                    <ArrowRight className="h-3.5 w-3.5 text-[var(--color-accent-amber)]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-stretch">
            <div className="glass-card overflow-hidden lg:col-span-5">
            <div className="px-4 py-2.5 border-b border-white/10 bg-black/35 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-soft)] font-[var(--font-mono)]">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2">voice-to-text-bot</span>
              </div>
            </div>

            <div className="p-3.5 md:p-4">
              <p className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-text-soft)]">Дерево модулей</p>
              <div className="mt-3 space-y-2">
                {files.map((file) => (
                  <div
                    key={file.name}
                    className={`rounded-xl px-3 py-2 border transition-colors ${
                      file.highlighted
                        ? 'bg-[rgba(59,209,255,0.14)] border-[rgba(59,209,255,0.35)]'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7.5 w-7.5 rounded-lg bg-[var(--color-surface)] border border-white/15 flex items-center justify-center text-[var(--color-accent-cyan)] shrink-0">
                        <file.icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-[var(--font-mono)] text-sm text-white/95 truncate">{file.name}</p>
                        <p className="text-xs text-[var(--color-text-soft)] truncate">{file.role}</p>
                      </div>
                      {file.highlighted && (
                        <span className="ml-auto rounded-full border border-[rgba(59,209,255,0.4)] bg-[rgba(59,209,255,0.12)] px-2 py-1 text-[10px] uppercase tracking-[0.11em] text-[var(--color-accent-cyan)]">
                          Core
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>

            <div className="glass-card p-4 md:p-5 lg:col-span-7 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.16)_0%,_transparent_68%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-text-soft)]">Сценарий обработки</p>
                <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-[var(--color-text-soft)]">
                  4 шага
                </span>
              </div>

              <div className="mt-4 space-y-1.5">
                {flow.map((step, idx) => (
                  <React.Fragment key={`mobile-flow-${step.name}-${idx}`}>
                    <div className="rounded-xl border border-[rgba(59,209,255,0.3)] bg-black/25 px-3 py-2 flex flex-col items-center text-center gap-1.5">
                      <div className="h-7.5 w-7.5 rounded-lg bg-[var(--color-surface)] border border-white/12 flex items-center justify-center text-[var(--color-accent-cyan)] shrink-0">
                        <step.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] text-white leading-tight">{step.name}</p>
                        <code className="font-[var(--font-mono)] text-xs text-[var(--color-accent-cyan)]">{step.code}</code>
                      </div>
                    </div>
                    {idx < flow.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="h-4 w-4 text-[var(--color-accent-amber)]" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Slide9 = () => {
  const roadmap = [
    'Перевод на другие языки',
    'Пунктуация и исправление ошибок',
    'Обработка аудио в реальном времени',
    'Интеграция с Google Docs, Notion и корпоративными системами',
    'Голосовые команды для автоматизации'
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
                Бот корректно распознает сообщение и возвращает готовый текст без внешнего API.
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
              viewport={{ once: false, amount: 0.2 }}
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
