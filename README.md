# NovaTravel — Инструкция по управлению сайтом

## Правило №1
**Трогай только эти три вещи:**
- `js/data.js` — все тексты, цены, данные
- `images/` — все фотографии
- `articles/` — статьи блога

Всё остальное не трогать.

---

## Как менять данные через GitHub

1. Зайди на github.com → твой репозиторий
2. Найди файл `js/data.js`
3. Нажми карандаш ✏️ (Edit this file)
4. Измени нужное
5. Нажми **Commit changes**
6. Сайт обновится через ~1 минуту

---

## Частые задачи

### Скрыть тур на не-сезон
В `data.js`, найди тур и измени:
```
hidden: false  →  hidden: true
```

### Изменить цену тура
```
price: 1800  →  price: 2100
```

### Изменить бейдж тура
```
badge: "hit"    — ХИТ (оранжевый)
badge: "sale"   — СКИДКА (красный)
badge: "new"    — НОВИНКА (золотой)
badge: ""       — без бейджа
```

### Заменить фото тура
1. Загрузи новое фото в папку `images/tours/`
2. Назови его так же как старое (например `silk-road.jpg`)
3. Или измени имя в `data.js`: `image: "images/tours/новое-фото.jpg"`

### Добавить новый тур
1. Найди в `data.js` раздел `TOURS`
2. Скопируй весь блок от `{` до `},`
3. Вставь после последнего тура
4. Измени все данные

### Скрыть/показать мероприятие
```
hidden: false  →  hidden: true
```

### Добавить вопрос в FAQ
Найди раздел `FAQ` в `data.js` и добавь:
```javascript
{
  q_ru: "Твой вопрос на русском?",
  q_en: "Your question in English?",
  a_ru: "Ответ на русском.",
  a_en: "Answer in English.",
  link: null,  // или "https://ссылка.на.сайт"
},
```

---

## Написать новую статью в блог

### Шаг 1: Создай файл статьи
1. Зайди в папку `articles/`
2. Нажми **Add file → Create new file**
3. Назови файл: `название-статьи.html` (латиницей, без пробелов)
4. Скопируй содержимое из `_article-template.html`
5. Замени заголовок, текст, фото

### Шаг 2: Добавь в список блога
В `data.js` найди раздел `BLOG_POSTS` и добавь:
```javascript
{
  slug: "название-статьи",  // то же что имя файла без .html
  hidden: false,
  title_ru: "Заголовок статьи по-русски",
  title_en: "Article title in English",
  date: "2025-05-01",
  tags: ["kyrgyzstan", "architecture"],
  country_ru: "Кыргызстан",
  country_en: "Kyrgyzstan",
  image: "images/blog/название.jpg",
  excerpt_ru: "Краткое описание для карточки в блоге.",
  excerpt_en: "Short description for the blog card.",
},
```

---

## Подключить внешние сервисы

### Google Analytics (GA4)
1. Зайди на analytics.google.com
2. Создай ресурс → получи ID вида `G-XXXXXXXXXX`
3. В `index.html` найди строку с комментарием `Google Analytics`
4. Убери `<!-- -->` и вставь свой ID

### Яндекс.Метрика
1. Зайди на metrika.yandex.ru
2. Создай счётчик → получи ID
3. В `index.html` найди строку с комментарием `Яндекс.Метрика`
4. Убери `<!-- -->` и вставь свой ID

### Crisp.chat (живой чат)
1. Зайди на crisp.chat
2. Зарегистрируйся → создай сайт → скопируй Website ID
3. В `index.html` найди строку с `Crisp Live Chat`
4. Убери `<!-- -->` и вставь свой ID

### Рассылка (Google Apps Script)
1. Зайди на script.google.com
2. Создай новый скрипт (инструкция будет отдельно от Claude)
3. В `js/main.js` найди `const SCRIPT_URL = ''`
4. Вставь URL своего скрипта

---

## Добавить ссылки на Google Forms
В `data.js` найди раздел `FORMS`:
```javascript
const FORMS = {
  individual_tour:  "https://forms.gle/xxxxxxx",  // ← вставь ссылку
  partner:          "https://forms.gle/xxxxxxx",
  ...
}
```

---

## Добавить YouTube видео-отзывы
1. Открой видео на YouTube
2. Скопируй ID из URL: youtube.com/watch?v=**ЭТОТ_ID**
3. В `data.js` найди `VIDEO_REVIEWS`
4. Замени `YOUTUBE_VIDEO_ID_1` на реальный ID

---

## Публикация на GitHub Pages
1. Создай репозиторий на github.com
2. Загрузи все файлы
3. Settings → Pages → Source: main branch → /root
4. Сайт будет на: `https://твой-ник.github.io/имя-репозитория`

## Привязать свой домен
1. Settings → Pages → Custom domain → введи домен
2. У регистратора домена создай CNAME запись:
   - Имя: `www`
   - Значение: `твой-ник.github.io`

---

*Инструкция создана с помощью Claude (Anthropic). При вопросах — спрашивай Claude!*
