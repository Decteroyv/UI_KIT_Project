# ATLAS UI · CSS Architecture Rescue — исправленная версия

Практическая работа №6 · пакет исходных материалов ARCH-07.

## Что исправлено

1. CSS каскад разделён на семь явных слоёв: `reset`, `legacy`, `tokens`, `base`, `components`, `states`, `utilities`.
2. Сторонний `legacy.css` сохранён, но импортируется в `legacy` и ограничен областью `.legacy-zone .legacy-widget`.
3. Семь семейств компонентов имеют контрактные корневые классы и модификаторы: button, field, card, tag, alert, switch, dialog.
4. Удалены дублирующийся базовый `.ui-button`, жёсткие цвета из компонентных правил, глобальный `.is-danger`, опасный `:is()` с ID и стилизация чужих потомков.
5. Поля показывают ошибку через `aria-invalid="true"` после blur/submit, а не по преждевременному `:invalid`.
6. Switch остаётся доступным для клавиатуры: input не скрыт через `display:none`; видимый focus передаётся на track.
7. Dialog открывается нативным `showModal()`.
8. Добавлены responsive-ограничения, reduced-motion и токены светлой/тёмной темы.

## Структура CSS

- `css/app.css` — единственная точка входа, порядок слоёв и импорты.
- `css/reset.css` — низкоспецифичный reset.
- `css/legacy.css` — изолированный vendor stylesheet.
- `css/tokens.css` — семантические и компонентные CSS custom properties, темы.
- `css/base.css` — общая структура страницы.
- `css/components.css` — базовые стили и модификаторы компонентов.
- `css/states.css` — hover, focus-visible, active, disabled, invalid, reduced-motion.
- `css/utilities.css` — небольшие вспомогательные классы.

## Запуск

Требуется Node.js 18+.

```bash
npm run dev
```

Откройте `http://127.0.0.1:5173`.

## Проверка

```bash
npm test
```

Статические тесты: **18 из 18 пройдены** в среде подготовки.

Для браузерных тестов:

```bash
npm install --save-dev @playwright/test
npx playwright install chromium
npm run test:e2e
```

`npm run test:e2e` не запускался при подготовке архива. Не указывайте его как пройденный до фактического запуска.

## Отчётные материалы

- `reports/AUDIT_TEMPLATE.md` — заполненный аудит 18 исходных дефектов и три трассировки каскада.
- `reports/ADR_TEMPLATE.md` — архитектурное решение по слоям и контрактам.
- `reports/MATRIX_TEMPLATE.csv` — 43 сценария семейств, вариантов, состояний, тем и ширин. Поля факта и доказательств нужно заполнить после браузерного прогона.
- `reports/REGRESSION_TEMPLATE.md` — фактический результат статических тестов и список оставшихся проверок.
- `reports/screenshots/before` и `reports/screenshots/after` — папки для скриншотов.
