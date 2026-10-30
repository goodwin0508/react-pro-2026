# LESSON-7 — Современная сборка: esbuild и swc

Ветка: `lesson-7`

## Запуск

```bash
npm ci
npm run build          # обычная сборка проекта (vite)
npm run lint

npm run build:hw       # всё задание разом: app + lib + swc
npm run build:app      # SPA, prod
npm run build:app:dev  # SPA, dev с watch
npm run build:lib      # библиотека через esbuild, esm + cjs
npm run build:lib:swc  # библиотека через swc, es6 + commonjs
```

Результат — в `build-hw/dist/`, папка в `.gitignore`.

## Что сделал

```
build-hw/
  app/      index.ts, utils.ts, report.ts, routes.ts, pages/
  lib/      index.ts, math.ts, string.ts
  configs/  esbuild.app.config.ts, esbuild.lib.config.ts, .swcrc.esm.json, .swcrc.cjs.json
  dist/     результат сборки
```

**Приложение.** `app/index.ts` собирается в `dist/app.js` с `bundle`, `minify`, `sourcemap`.
В `utils.ts` намеренно четыре экспорта, используются два — остальные вырезает tree shaking.
`report.ts` и страницы грузятся через `import()`, поэтому уезжают в отдельные чанки.

**Библиотека.** Три entry point, `react` и `lodash` в `external`, сборка дважды —
в `esm` и `cjs`.

**Режимы.** Флаг `--dev` переключает конфиг: в dev нет минификации и включён `watch`
через `context()`, в prod — `minify`, `sourcemap`, `treeShaking`.

## Чем проверял

```
tree shaking   grep "function unusedSum" в неминифицированном бандле → 0
               (а formatPrice и slugify → 1)
чанки          dist/ содержит app.js, report-*.js, home-*.js, about-*.js
external       в dist/lib/esm/index.js остался import ... from "react",
               размер файла 473 байта — react внутрь не попал
форматы        esm начинается с export function, cjs — с Object.defineProperty(exports
watch          менял utils.ts при запущенном --dev, правка появилась в бандле
```

## Что понял по ходу

- `splitting: true` работает только с `format: 'esm'` — в CommonJS нет механизма
  подгрузки чанков
- при разбиении на чанки нужен `outdir`, а не `outfile`: файлов получается несколько
- `bundle: true` в библиотеке нужен, но вместе с `external` — иначе зависимости влипнут
  внутрь, и у потребителя окажется второй React
- `watch` живёт в `context()`, а не в `build()`: первый создаёт долгоживущий объект,
  второй собирает один раз и выходит
- swc не бандлер, а транспайлер — он переводит файлы по одному, поэтому `external`
  ему не нужен, импорты и так остаются импортами

## Чеклист

- [x] Сборка SPA через esbuild с `bundle`, `minify`, `sourcemap`
- [x] Tree shaking работает, неиспользуемые функции не попали в бандл
- [x] Применён динамический импорт, код разбит на чанки
- [x] Библиотека собрана с несколькими entry points
- [x] `react` и `lodash` исключены через `external`
- [x] Библиотека собрана в форматах `esm` и `cjs`
- [x] Режим `dev` — с `watch`, без минификации
- [x] Режим `prod` — с `minify`, `sourcemap`, tree shaking
- [x] Переключение режимов через скрипты в `package.json`
- [x] Доп. задание — сборка библиотеки через swc, оба формата, `minify` и `sourceMaps`
- [x] Доп. задание — `routes.ts` с динамическими импортами, каждая страница в своём чанке
- [x] Webpack и CRA не использованы

## Не сделано / вопросы

- нет
