# Radial Orbital Timeline

Интерактивная орбитальная временная шкала на Next.js + shadcn/ui.

## Быстрый старт

```bash
npm install
npm run dev
```

## Деплой на Vercel

1. Зайди на [vercel.com](https://vercel.com)
2. Нажми **Add New → Project**
3. Импортируй репозиторий `cqwxxz/test-project`
4. Нажми **Deploy** — Vercel сам определит Next.js

## Структура

```
├── app/
│   ├── globals.css        # Tailwind + тема
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница с данными
├── components/ui/
│   ├── radial-orbital-timeline.tsx  # Основной компонент
│   ├── badge.tsx          # shadcn/ui Badge
│   ├── button.tsx         # shadcn/ui Button
│   └── card.tsx           # shadcn/ui Card
├── lib/
│   └── utils.ts           # cn() утилита
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Компонент

**RadialOrbitalTimeline** — интерактивная орбитальная временная шкала:

- Узлы вращаются вокруг центра
- Клик по узлу раскрывает карточку с деталями
- Автовращение паузится при открытии
- Подсвечиваются связанные узлы
- Energy Bar и Connected Nodes в карточке
