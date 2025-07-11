# React Forms & API Example

Цей проєкт демонструє роботу з контрольованими (Controlled) та неконтрольованими (Uncontrolled) формами у React, а також взаємодію з API через `useEffect`.

## Стек технологій

- React + TypeScript
- Vite (шаблон)
- React хуки: `useState`, `useEffect`, `useRef`
- Контрольовані та неконтрольовані компоненти
- API-запити до [JSONPlaceholder](https://jsonplaceholder.typicode.com)


## Структура

- `/components/ControlledForm.tsx` — контрольована форма з `useState`.
- `/components/UncontrolledForm.tsx` — неконтрольована форма з `useRef`.
- `/utils/api.ts` — функція `fetchData` для запиту користувачів.
- `/App.tsx` — головний компонент:
  - показує обидві форми;
  - робить API-запит;
  - відображає список користувачів;
  - обробляє стани: завантаження, помилка, порожній результат.


## Що реалізовано

### 1. `ControlledForm`

- Поля: `email` та `password`.
- Керування станом через `useState`.
- Вивід даних у консоль при сабміті форми.

### 2. `UncontrolledForm`

- Поле: `username`.
- Отримання значення через `useRef`.
- Значення не зберігається у React-стані.

### 3. API-запит

- Використовується `useEffect` для запиту при завантаженні сторінки.
- Дані отримуються з: `https://jsonplaceholder.typicode.com/users`.
- Обробка станів:
  - `isLoading` — відображення повідомлення "Loading...".
  - `error` — відображення повідомлення про помилку.
  - Порожній результат — повідомлення "No users found."
  - Успіх — відображення списку користувачів.


## Як запустити

### 1. Клонувати репозиторій:

```bash
git clone <адреса_репозиторію>
cd my-react-app
```

### 2. Встановити залежності:

```bash
npm install
```
### 3. Запустити проєкт локально:

```bash
npm run dev
```
## Демо

Розгорнуто на Vercel: https://fullstack-hw40-react-forms-api.vercel.app/

## Примітки

- Проект ініціалізовано за допомогою Vite.
- Компоненти названі згідно з функціональністю: ControlledForm, UncontrolledForm.
- Код структурований, розділений на окремі файли.
- Проект запускається без помилок.
- README.md містить зрозумілі інструкції.
- Розгорнуто на платформі хостингу (Vercel).