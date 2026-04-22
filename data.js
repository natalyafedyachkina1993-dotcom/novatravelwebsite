// ═══════════════════════════════════════════════════════════════
// NovaTravel — data.js
// ЭТО ГЛАВНЫЙ ФАЙЛ С ДАННЫМИ САЙТА
// Меняй только значения в кавычках и цифры
// После изменений: сохранить → Commit в GitHub → сайт обновится
// ═══════════════════════════════════════════════════════════════

const SITE = {
  // ── ОСНОВНАЯ ИНФОРМАЦИЯ ──────────────────────────────────────
  name: "NovaTravel",
  slogan_ru: "Авторские архитектурные туры по Центральной Азии",
  slogan_en: "Bespoke Architectural Tours across Central Asia",
  tagline_ru: "Откройте душу Шёлкового пути вместе с нами",
  tagline_en: "Discover the soul of the Silk Road with us",

  // ── КОНТАКТЫ ─────────────────────────────────────────────────
  email: "novatravel.world@gmail.com",
  phone: "+996771512893",
  whatsapp: "https://wa.me/996771512893",

  // ── СОЦИАЛЬНЫЕ СЕТИ ──────────────────────────────────────────
  social: {
    facebook:  "https://www.facebook.com/share/15kHXeQAYm/",
    instagram: "https://www.instagram.com/novatravel.world",
    telegram:  "https://t.me/novatravel_world",
    youtube:   "https://youtube.com/@novatravel-club",
    tiktok:    "",           // ← добавь ссылку когда будет
    pinterest: "https://www.pinterest.com/NovaTravelWrld/",
  },

  // ── ВНЕШНИЕ ССЫЛКИ ───────────────────────────────────────────
  google_reviews:   "https://g.page/r/CVhPVdtgUiC2EBI/review",
  google_business:  "https://g.page/r/CVhPVdtgUiC2EBI",
  community_email:  "mailto:novatravel.world@gmail.com?subject=Хочу вступить в сообщество NovaTravel",
};

// ═══════════════════════════════════════════════════════════════
// О НАС — статистика
// ═══════════════════════════════════════════════════════════════
const STATS = [
  { number: "5",   label_ru: "стран",           label_en: "countries" },
  { number: "50+", label_ru: "туров проведено",  label_en: "tours done" },
  { number: "500+",label_ru: "довольных гостей", label_en: "happy guests" },
  { number: "7",   label_ru: "лет опыта",        label_en: "years of experience" },
];

const ABOUT = {
  text_ru: `NovaTravel — авторское бюро архитектурных туров по Кыргызстану, Казахстану, 
  Узбекистану, Таджикистану и Туркменистану. Мы создаём маршруты, которые раскрывают 
  душу Шёлкового пути — древние города, живую архитектуру и подлинные встречи с людьми.`,
  text_en: `NovaTravel is a boutique architectural tour bureau covering Kyrgyzstan, Kazakhstan, 
  Uzbekistan, Tajikistan and Turkmenistan. We craft routes that reveal the soul of the 
  Silk Road — ancient cities, living architecture and authentic encounters with people.`,
};

// ═══════════════════════════════════════════════════════════════
// ПРЕИМУЩЕСТВА
// ═══════════════════════════════════════════════════════════════
const ADVANTAGES = [
  {
    icon: "🏛️",
    title_ru: "Авторский подход",
    title_en: "Bespoke design",
    text_ru: "Каждый маршрут разработан архитектором и историком — не стандартный турпакет",
    text_en: "Every route is designed by an architect and historian — not a standard package",
  },
  {
    icon: "🗺️",
    title_ru: "5 стран ЦА",
    title_en: "5 Central Asian countries",
    text_ru: "Кыргызстан · Казахстан · Узбекистан · Таджикистан · Туркменистан",
    text_en: "Kyrgyzstan · Kazakhstan · Uzbekistan · Tajikistan · Turkmenistan",
  },
  {
    icon: "👥",
    title_ru: "Малые группы",
    title_en: "Small groups",
    text_ru: "Максимум 12 человек — глубокое погружение, а не толпа туристов",
    text_en: "Maximum 12 people — deep immersion, not a tourist crowd",
  },
  {
    icon: "🤝",
    title_ru: "Местные гиды",
    title_en: "Local guides",
    text_ru: "Настоящие знатоки — архитекторы, историки и художники из каждого региона",
    text_en: "Real experts — architects, historians and artists from each region",
  },
  {
    icon: "🎨",
    title_ru: "Мастер-классы",
    title_en: "Master classes",
    text_ru: "Живопись, керамика, ковроткачество — встречи с мастерами в их мастерских",
    text_en: "Painting, ceramics, weaving — meetings with craftspeople in their studios",
  },
  {
    icon: "♻️",
    title_ru: "Ответственный туризм",
    title_en: "Responsible tourism",
    text_ru: "Поддерживаем местные сообщества, гостевые дома и традиционные ремёсла",
    text_en: "We support local communities, guesthouses and traditional crafts",
  },
];

// ═══════════════════════════════════════════════════════════════
// КОМАНДА
// ═══════════════════════════════════════════════════════════════
const TEAM = [
  {
    name: "Имя Фамилия",
    role_ru: "Основатель и главный гид",
    role_en: "Founder & Lead Guide",
    bio_ru: "Архитектор, историк и страстный путешественник. Знает каждый камень Шёлкового пути.",
    bio_en: "Architect, historian and passionate traveller. Knows every stone of the Silk Road.",
    image: "images/team/team-1.jpg",   // ← замени фото
    instagram: "",
  },
  {
    name: "Имя Фамилия",
    role_ru: "Куратор маршрутов",
    role_en: "Route Curator",
    bio_ru: "Специалист по Центральной Азии. Разрабатывает маршруты уже 5 лет.",
    bio_en: "Central Asia specialist. Designing routes for 5 years.",
    image: "images/team/team-2.jpg",
    instagram: "",
  },
  {
    name: "Имя Фамилия",
    role_ru: "Менеджер по работе с гостями",
    role_en: "Guest Experience Manager",
    bio_ru: "Отвечает за каждую деталь от бронирования до финального отзыва.",
    bio_en: "Responsible for every detail from booking to final review.",
    image: "images/team/team-3.jpg",
    instagram: "",
  },
];

// ═══════════════════════════════════════════════════════════════
// ТУРЫ
// badge: "hit" | "sale" | "new" | ""
// hidden: true = тур скрыт с сайта
// ═══════════════════════════════════════════════════════════════
const TOURS = [
  {
    id: "silk-road",
    hidden: false,
    badge: "hit",
    title_ru: "Великий Шёлковый путь",
    title_en: "The Great Silk Road",
    countries_ru: ["Узбекистан", "Таджикистан"],
    countries_en: ["Uzbekistan", "Tajikistan"],
    cities_ru: "Самарканд → Бухара → Хива → Душанбе",
    cities_en: "Samarkand → Bukhara → Khiva → Dushanbe",
    days: 12,
    price: 2200,
    deposit: 300,
    single_supplement: 400,
    max_group: 12,
    type_ru: "Групповой",
    type_en: "Group",
    theme_ru: "Архитектура · Культура",
    theme_en: "Architecture · Culture",
    physical_level: 2,    // 1–5
    comfort_level: "Стандарт",
    comfort_level_en: "Standard",
    next_date: "2025-05-15",
    image: "images/tours/silk-road.jpg",
    short_ru: "Путешествие по легендарным городам Шёлкового пути — Самарканд, Бухара, Хива.",
    short_en: "Journey through the legendary Silk Road cities — Samarkand, Bukhara, Khiva.",
    map_embed: "",        // ← вставь ссылку Google My Maps
    map_link: "",         // ← ссылка «Посмотреть на Google Maps»
    book_form: "",        // ← ссылка на Google Form бронирования
    brochure_pdf: "",     // ← ссылка на PDF брошюру в Google Drive
    highlights_ru: [
      "Мечеть Биби-Ханым и площадь Регистан",
      "Архитектурный комплекс Пои-Калян в Бухаре",
      "Средневековая крепость Ичан-Кала в Хиве",
      "Мастер-класс по керамике в Риштане",
      "Традиционный плов у местной семьи",
    ],
    highlights_en: [
      "Bibi-Khanum Mosque and Registan Square",
      "Poi-Kalyan architectural complex in Bukhara",
      "Medieval Ichan-Kala fortress in Khiva",
      "Pottery master class in Rishtan",
      "Traditional plov with a local family",
    ],
    included_ru: ["Транспорт по маршруту", "Проживание 3* и гестхаусы", "Завтраки и ужины", "Русскоязычный гид", "Входные билеты", "Мастер-классы"],
    included_en: ["Transport on route", "3* hotels and guesthouses", "Breakfasts and dinners", "Russian-speaking guide", "Entrance tickets", "Master classes"],
    excluded_ru: ["Международные перелёты", "Визы", "Обеды", "Личные расходы", "Страховка"],
    excluded_en: ["International flights", "Visas", "Lunches", "Personal expenses", "Travel insurance"],
    itinerary_ru: [
      { day: 1, title: "Прилёт · Самарканд", cities: "Самарканд", km: 0, drive_time: "", sleep: "Отель 3*", meals: "Ужин", description: "Встреча в аэропорту. Заселение. Первое знакомство с городом — прогулка по вечернему Регистану.", activities: "" },
      { day: 2, title: "Самарканд — архитектурный день", cities: "Самарканд", km: 20, drive_time: "30 мин", sleep: "Отель 3*", meals: "Завтрак · Ужин", description: "Регистан, мечеть Биби-Ханым, Шахи-Зинда. Мастер-класс по росписи изразцов.", activities: "Мастер-класс роспись" },
    ],
    itinerary_en: [
      { day: 1, title: "Arrival · Samarkand", cities: "Samarkand", km: 0, drive_time: "", sleep: "3* Hotel", meals: "Dinner", description: "Airport transfer. Check-in. First impressions — evening walk around Registan.", activities: "" },
      { day: 2, title: "Samarkand — architecture day", cities: "Samarkand", km: 20, drive_time: "30 min", sleep: "3* Hotel", meals: "Breakfast · Dinner", description: "Registan, Bibi-Khanum mosque, Shah-i-Zinda. Tile painting master class.", activities: "Tile painting class" },
    ],
    important_ru: ["Виза: граждане СНГ — безвизово", "Валюта: узбекский сум, меняем на месте", "Время: UTC+5, разница с Москвой +2 часа"],
    important_en: ["Visa: CIS citizens — visa-free", "Currency: Uzbek sum, exchange on arrival", "Time zone: UTC+5"],
    faq_ru: [
      { q: "Какой уровень физической подготовки нужен?", a: "Умеренный — много ходьбы (до 8 км в день). Специальной физподготовки не требуется." },
      { q: "Что взять с собой?", a: "Удобная обувь, лёгкая одежда, шарф для мечетей. Полный список в брошюре." },
    ],
    faq_en: [
      { q: "What fitness level is required?", a: "Moderate — lots of walking (up to 8 km per day). No special fitness required." },
      { q: "What to pack?", a: "Comfortable shoes, light clothing, scarf for mosques. Full list in the brochure." },
    ],
    reviews: [
      { name: "Анна М.", country_ru: "Россия", country_en: "Russia", text_ru: "Невероятное путешествие! Гид знает каждую деталь архитектуры. Уже планирую следующий тур.", text_en: "Incredible journey! The guide knows every architectural detail. Already planning the next tour.", stars: 5 },
    ],
    blog_tags: ["uzbekistan", "tajikistan", "silk-road"],   // теги для связи с блогом
    group_dates: [
      { date_ru: "15 мая 2025", date_en: "May 15, 2025", price: 2200, status: "available", seats_left: 8 },
      { date_ru: "20 сентября 2025", date_en: "September 20, 2025", price: 2200, status: "available", seats_left: 12 },
    ],
  },
  {
    id: "kyrgyzstan-nomad",
    hidden: false,
    badge: "new",
    title_ru: "Кыргызстан: Кочевая Архитектура",
    title_en: "Kyrgyzstan: Nomadic Architecture",
    countries_ru: ["Кыргызстан"],
    countries_en: ["Kyrgyzstan"],
    cities_ru: "Бишкек → Чолпон-Ата → Каракол → Ош",
    cities_en: "Bishkek → Cholpon-Ata → Karakol → Osh",
    days: 8,
    price: 1400,
    deposit: 200,
    single_supplement: 280,
    max_group: 10,
    type_ru: "Групповой",
    type_en: "Group",
    theme_ru: "Архитектура · Природа",
    theme_en: "Architecture · Nature",
    physical_level: 3,
    comfort_level: "Базовый",
    comfort_level_en: "Basic",
    next_date: "2025-06-10",
    image: "images/tours/kyrgyzstan.jpg",
    short_ru: "Юрты, каменные изваяния и горные перевалы — живая архитектура кочевников.",
    short_en: "Yurts, stone figures and mountain passes — the living architecture of nomads.",
    map_embed: "",
    map_link: "",
    book_form: "",
    brochure_pdf: "",
    highlights_ru: ["Ночь в традиционной юрте", "Наскальные рисунки Чолпон-Аты", "Мечеть Арстанбап", "Мастер-класс по войлоку"],
    highlights_en: ["Night in a traditional yurt", "Rock carvings of Cholpon-Ata", "Arstan-Bap mosque", "Felt-making master class"],
    included_ru: ["Транспорт 4x4", "Юрта и гестхаусы", "Все питание", "Местный гид-кочевник"],
    included_en: ["4x4 transport", "Yurt and guesthouses", "All meals", "Local nomad guide"],
    excluded_ru: ["Авиабилеты", "Страховка", "Личные расходы"],
    excluded_en: ["Flights", "Insurance", "Personal expenses"],
    itinerary_ru: [],
    itinerary_en: [],
    important_ru: [],
    important_en: [],
    faq_ru: [],
    faq_en: [],
    reviews: [],
    blog_tags: ["kyrgyzstan"],
    group_dates: [
      { date_ru: "10 июня 2025", date_en: "June 10, 2025", price: 1400, status: "available", seats_left: 10 },
    ],
  },
  {
    id: "pamir",
    hidden: false,
    badge: "hit",
    title_ru: "Памирский Тракт",
    title_en: "Pamir Highway",
    countries_ru: ["Таджикистан", "Кыргызстан"],
    countries_en: ["Tajikistan", "Kyrgyzstan"],
    cities_ru: "Душанбе → Хорог → Мургаб → Ош",
    cities_en: "Dushanbe → Khorog → Murghab → Osh",
    days: 10,
    price: 1900,
    deposit: 280,
    single_supplement: 350,
    max_group: 8,
    type_ru: "Групповой",
    type_en: "Group",
    theme_ru: "Природа · Архитектура",
    theme_en: "Nature · Architecture",
    physical_level: 4,
    comfort_level: "Базовый",
    comfort_level_en: "Basic",
    next_date: "2025-07-01",
    image: "images/tours/pamir.jpg",
    short_ru: "Легендарная дорога на «крыше мира» — горные крепости, памирские деревни.",
    short_en: "The legendary road on the 'roof of the world' — mountain fortresses, Pamiri villages.",
    map_embed: "",
    map_link: "",
    book_form: "",
    brochure_pdf: "",
    highlights_ru: [],
    highlights_en: [],
    included_ru: [],
    included_en: [],
    excluded_ru: [],
    excluded_en: [],
    itinerary_ru: [],
    itinerary_en: [],
    important_ru: [],
    important_en: [],
    faq_ru: [],
    faq_en: [],
    reviews: [],
    blog_tags: ["tajikistan", "kyrgyzstan", "pamir"],
    group_dates: [],
  },
];

// ═══════════════════════════════════════════════════════════════
// МЕРОПРИЯТИЯ
// type: "online" | "offline"
// badge_price: текст бейджа цены
// ═══════════════════════════════════════════════════════════════
const EVENTS = [
  {
    id: "lecture-architecture-ca",
    hidden: false,
    type: "online",
    title_ru: "Архитектура Средней Азии: онлайн-лекция",
    title_en: "Central Asian Architecture: online lecture",
    date_ru: "25 апреля 2025",
    date_en: "April 25, 2025",
    time: "19:00 (МСК)",
    price: 0,
    price_label_ru: "Бесплатно",
    price_label_en: "Free",
    image: "images/events/event-1.jpg",
    short_ru: "Вводная лекция об архитектурных традициях Шёлкового пути.",
    short_en: "Introductory lecture on the architectural traditions of the Silk Road.",
    full_ru: "Разберём ключевые архитектурные стили Центральной Азии — от тимуридских медресе до советского модернизма. Лектор: главный гид NovaTravel. Формат: Zoom, 90 минут, вопросы-ответы.",
    full_en: "We will explore key architectural styles of Central Asia — from Timurid madrasas to Soviet modernism. Lecturer: NovaTravel head guide. Format: Zoom, 90 minutes, Q&A.",
    form_url: "",   // ← ссылка на форму регистрации
  },
  {
    id: "workshop-felt",
    hidden: false,
    type: "offline",
    title_ru: "Мастер-класс по кыргызскому войлоку",
    title_en: "Kyrgyz felt-making workshop",
    date_ru: "10 мая 2025",
    date_en: "May 10, 2025",
    time: "14:00",
    price: 25,
    price_label_ru: "$25",
    price_label_en: "$25",
    image: "images/events/event-2.jpg",
    short_ru: "Создай свой войлочный сувенир под руководством мастерицы из Бишкека.",
    short_en: "Make your own felt souvenir guided by a Bishkek craftswoman.",
    full_ru: "Практический мастер-класс по традиционному войлоковалянию. Все материалы включены. Место: Бишкек, адрес будет прислан после регистрации. Длительность: 3 часа.",
    full_en: "Hands-on traditional felt-making workshop. All materials included. Location: Bishkek, address sent after registration. Duration: 3 hours.",
    form_url: "",
  },
  {
    id: "webinar-travel-tips",
    hidden: false,
    type: "online",
    title_ru: "Как подготовиться к туру по ЦА",
    title_en: "How to prepare for a Central Asia tour",
    date_ru: "15 мая 2025",
    date_en: "May 15, 2025",
    time: "18:00 (МСК)",
    price: 0,
    price_label_ru: "Бесплатно",
    price_label_en: "Free",
    image: "images/events/event-3.jpg",
    short_ru: "Визы, документы, здоровье, упаковка — полный гайд от наших гидов.",
    short_en: "Visas, documents, health, packing — a complete guide from our guides.",
    full_ru: "Практический вебинар: что взять с собой, как оформить визы, страховку, что ожидать по питанию и бытовым условиям. Прямой эфир с вопросами.",
    full_en: "Practical webinar: what to pack, visas, insurance, what to expect from food and living conditions. Live Q&A.",
    form_url: "",
  },
];

// ═══════════════════════════════════════════════════════════════
// ВИДЕО ОТЗЫВЫ (YouTube)
// ═══════════════════════════════════════════════════════════════
const VIDEO_REVIEWS = [
  {
    youtube_id: "YOUTUBE_VIDEO_ID_1",   // ← замени на реальный ID из YouTube ссылки
    title_ru: "Отзыв: тур по Узбекистану",
    title_en: "Review: Uzbekistan tour",
    author: "Анна, Москва",
  },
  {
    youtube_id: "YOUTUBE_VIDEO_ID_2",
    title_ru: "Отзыв: Памирский тракт",
    title_en: "Review: Pamir Highway",
    author: "Сергей, Алматы",
  },
  {
    youtube_id: "YOUTUBE_VIDEO_ID_3",
    title_ru: "Отзыв: Кыргызстан",
    title_en: "Review: Kyrgyzstan",
    author: "Мария, Бишкек",
  },
];

// ═══════════════════════════════════════════════════════════════
// БЛОГ — превью статей
// Полный текст статьи — в файле articles/[slug].html
// ═══════════════════════════════════════════════════════════════
const BLOG_POSTS = [
  {
    slug: "registan-samarkand",
    hidden: false,
    title_ru: "Регистан в Самарканде: архитектурный шедевр Тимуридов",
    title_en: "Registan in Samarkand: Timurid Architectural Masterpiece",
    date: "2025-04-01",
    tags: ["uzbekistan", "architecture", "silk-road"],
    country_ru: "Узбекистан",
    country_en: "Uzbekistan",
    image: "images/blog/registan.jpg",
    excerpt_ru: "Три медресе, один ансамбль — история и геометрия, которые остановили время.",
    excerpt_en: "Three madrasas, one ensemble — history and geometry that stopped time.",
  },
  {
    slug: "kyrgyz-yurt",
    hidden: false,
    title_ru: "Юрта как архитектурный текст: читаем кочевой дом",
    title_en: "The Yurt as Architectural Text: Reading the Nomadic Home",
    date: "2025-03-18",
    tags: ["kyrgyzstan", "architecture", "nomads"],
    country_ru: "Кыргызстан",
    country_en: "Kyrgyzstan",
    image: "images/blog/yurt.jpg",
    excerpt_ru: "Как купол юрты кодирует вселенную, и почему это умнее любого современного здания.",
    excerpt_en: "How the yurt dome encodes the universe, and why it's smarter than any modern building.",
  },
  {
    slug: "pamir-villages",
    hidden: false,
    title_ru: "Памирские деревни: архитектура на крыше мира",
    title_en: "Pamiri Villages: Architecture on the Roof of the World",
    date: "2025-03-05",
    tags: ["tajikistan", "pamir", "architecture"],
    country_ru: "Таджикистан",
    country_en: "Tajikistan",
    image: "images/blog/pamir-village.jpg",
    excerpt_ru: "Традиционный чид-хона — памирский дом с окном в небо и памятью предков в стенах.",
    excerpt_en: "The traditional chid-khona — a Pamiri home with a window to the sky.",
  },
];

// ═══════════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════════
const FAQ = [
  {
    q_ru: "Какой уровень физической подготовки нужен для туров?",
    q_en: "What fitness level is required for tours?",
    a_ru: "Зависит от тура — у каждого есть шкала нагрузки от 1 до 5. Большинство туров — уровень 2–3: много ходьбы, умеренный рельеф. Специальных навыков не нужно.",
    a_en: "It depends on the tour — each has a physical level scale from 1 to 5. Most tours are level 2–3: lots of walking, moderate terrain. No special skills required.",
    link: null,
  },
  {
    q_ru: "Нужна ли виза для стран Центральной Азии?",
    q_en: "Do I need a visa for Central Asian countries?",
    a_ru: "Гражданам России, Казахстана, Беларуси — безвизово во все страны ЦА. Гражданам ЕС и других стран — зависит от страны, мы помогаем с оформлением.",
    a_en: "Citizens of Russia, Kazakhstan, Belarus — visa-free to all CA countries. EU and other citizens depend on the country; we assist with the process.",
    link: "https://www.visafreeguide.com",
  },
  {
    q_ru: "Как забронировать тур?",
    q_en: "How to book a tour?",
    a_ru: "Заполните форму бронирования на странице тура → мы свяжемся в течение 24 часов → вы вносите депозит → место подтверждено.",
    a_en: "Fill in the booking form on the tour page → we contact you within 24 hours → you pay the deposit → your spot is confirmed.",
    link: null,
  },
  {
    q_ru: "Что входит в стоимость тура?",
    q_en: "What is included in the tour price?",
    a_ru: "Транспорт по маршруту, проживание, питание по программе, гид, входные билеты, мастер-классы. Авиабилеты, страховка и личные расходы — не включены.",
    a_en: "Transport on route, accommodation, meals on program, guide, entry tickets, master classes. Flights, insurance and personal expenses are not included.",
    link: null,
  },
  {
    q_ru: "Есть ли туры для индивидуальных путешественников?",
    q_en: "Are there tours for solo travellers?",
    a_ru: "Да! Любой тур можно заказать индивидуально для вашей даты и состава группы. Стоимость рассчитывается по запросу через форму.",
    a_en: "Yes! Any tour can be ordered individually for your date and group size. Price calculated on request via the form.",
    link: null,
  },
  {
    q_ru: "Какова политика отмены и возврата?",
    q_en: "What is the cancellation and refund policy?",
    a_ru: "Отмена за 60+ дней — полный возврат. За 30–60 дней — 50%. За 30 дней и менее — депозит не возвращается. Подробности в договоре.",
    a_en: "Cancellation 60+ days before — full refund. 30–60 days — 50%. Under 30 days — deposit non-refundable. Details in the contract.",
    link: null,
  },
];

// ═══════════════════════════════════════════════════════════════
// ПАРТНЁРЫ И СЕРТИФИКАТЫ (футер)
// ═══════════════════════════════════════════════════════════════
const PARTNERS = [
  { name: "Партнёр 1", image: "images/partners/partner-1.png", url: "" },
  { name: "Партнёр 2", image: "images/partners/partner-2.png", url: "" },
  { name: "Сертификат", image: "images/partners/cert-1.png", url: "" },
  { name: "Партнёр 3", image: "images/partners/partner-3.png", url: "" },
];

// ═══════════════════════════════════════════════════════════════
// ССЫЛКИ НА ФОРМЫ (Google Forms)
// ═══════════════════════════════════════════════════════════════
const FORMS = {
  individual_tour:  "",   // ← форма «Индивидуальный тур»
  partner:          "",   // ← форма «Стать партнёром»
  guide:            "",   // ← форма «Стать гидом»
  driver:           "",   // ← форма «Стать водителем»
  accommodation:    "",   // ← форма «Гостевой дом / размещение»
  masterclass:      "",   // ← форма «Мастер-класс»
  leave_review:     "https://g.page/r/CVhPVdtgUiC2EBI/review",
};

// ═══════════════════════════════════════════════════════════════
// ПЕРЕВОДЫ ИНТЕРФЕЙСА
// ═══════════════════════════════════════════════════════════════
const I18N = {
  ru: {
    nav_tours: "Туры",
    nav_events: "Мероприятия",
    nav_blog: "Блог",
    nav_about: "О нас",
    nav_faq: "FAQ",
    nav_contact: "Контакты",
    btn_contact: "Написать нам",
    btn_book: "Забронировать",
    btn_deposit: "Внести депозит",
    btn_details: "Подробнее",
    btn_all_tours: "Все туры",
    btn_all_events: "Все мероприятия",
    btn_all_blog: "Все статьи",
    btn_review: "Оставить отзыв",
    btn_join: "Вступить в сообщество",
    btn_brochure: "Скачать брошюру",
    btn_register: "Зарегистрироваться",
    btn_share: "Поделиться",
    btn_subscribe: "Подписаться",
    btn_map: "Посмотреть маршрут",
    btn_individual: "Индивидуальный тур",
    section_about: "О нас",
    section_advantages: "Наши преимущества",
    section_team: "Команда",
    section_tours: "Наши туры",
    section_events: "Мероприятия",
    section_video: "Отзывы участников",
    section_community: "Вступить в сообщество",
    section_blog: "Блог",
    section_newsletter: "Будьте в курсе",
    section_faq: "Частые вопросы",
    section_partners: "Партнёры и сертификаты",
    tour_days: "дней",
    tour_from: "от $",
    tour_group: "Группа макс.",
    tour_deposit: "Депозит",
    badge_hit: "ХИТ",
    badge_sale: "СКИДКА",
    badge_new: "НОВИНКА",
    badge_online: "ОНЛАЙН",
    badge_offline: "ОФЛАЙН",
    badge_free: "БЕСПЛАТНО",
    included: "Включено",
    excluded: "Не включено",
    itinerary: "Маршрут по дням",
    dates_prices: "Даты и цены",
    important: "Важная информация",
    faq_tour: "Частые вопросы по туру",
    reviews: "Отзывы участников",
    related_articles: "Статьи о стране",
    seats_left: "мест осталось",
    seats_full: "Мест нет",
    physical_level: "Физическая нагрузка",
    comfort_level: "Уровень комфорта",
    newsletter_placeholder: "Ваш email",
    newsletter_text: "Новые туры, маршруты и брошюры — первыми в вашу почту",
    footer_partner: "Стать партнёром",
    footer_guide: "Стать гидом",
    footer_driver: "Стать водителем",
    footer_accommodation: "Предложить жильё",
    footer_masterclass: "Проводить мастер-класс",
    footer_rights: "Все права защищены",
    community_text: "Присоединяйтесь к сообществу путешественников и ценителей архитектуры Центральной Азии",
  },
  en: {
    nav_tours: "Tours",
    nav_events: "Events",
    nav_blog: "Blog",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_contact: "Contact Us",
    btn_book: "Book Now",
    btn_deposit: "Pay Deposit",
    btn_details: "Learn More",
    btn_all_tours: "All Tours",
    btn_all_events: "All Events",
    btn_all_blog: "All Articles",
    btn_review: "Leave a Review",
    btn_join: "Join Community",
    btn_brochure: "Download Brochure",
    btn_register: "Register",
    btn_share: "Share",
    btn_subscribe: "Subscribe",
    btn_map: "View Route",
    btn_individual: "Custom Tour",
    section_about: "About Us",
    section_advantages: "Why NovaTravel",
    section_team: "Our Team",
    section_tours: "Our Tours",
    section_events: "Events",
    section_video: "Participant Reviews",
    section_community: "Join Our Community",
    section_blog: "Blog",
    section_newsletter: "Stay in the Loop",
    section_faq: "FAQ",
    section_partners: "Partners & Certificates",
    tour_days: "days",
    tour_from: "from $",
    tour_group: "Max group",
    tour_deposit: "Deposit",
    badge_hit: "TOP PICK",
    badge_sale: "SALE",
    badge_new: "NEW",
    badge_online: "ONLINE",
    badge_offline: "OFFLINE",
    badge_free: "FREE",
    included: "Included",
    excluded: "Not Included",
    itinerary: "Day by Day",
    dates_prices: "Dates & Prices",
    important: "Important Info",
    faq_tour: "Tour FAQ",
    reviews: "Guest Reviews",
    related_articles: "Country Articles",
    seats_left: "seats left",
    seats_full: "Fully Booked",
    physical_level: "Physical Level",
    comfort_level: "Comfort Level",
    newsletter_placeholder: "Your email",
    newsletter_text: "New tours, routes and brochures — first to your inbox",
    footer_partner: "Become a Partner",
    footer_guide: "Become a Guide",
    footer_driver: "Become a Driver",
    footer_accommodation: "Offer Accommodation",
    footer_masterclass: "Run a Master Class",
    footer_rights: "All rights reserved",
    community_text: "Join a community of travellers and admirers of Central Asian architecture",
  },
};
