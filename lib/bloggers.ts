export type Blogger = {
  id: string
  name: string
  handle: string
  niche: string
  category: Category
  image: string
  followers: string
  engagement: string
  match: number
  bio: string
  about: string
  topics: string[]
  audience: {
    age: string
    gender: string
    geo: string
  }
  formats: string[]
  highlights: string[]
  frequency: string
  priceFrom: string
  blogUrl: string
  telegramUrl: string
}

export const categories = [
  'Усі',
  'Лайфстайл',
  'Технології',
  'Фітнес',
  "Б'юті",
] as const

export type Category = Exclude<(typeof categories)[number], 'Усі'>

export const bloggers: Blogger[] = [
  {
    id: 'alina',
    name: 'Аліна Вербицька',
    handle: '@alina.verb',
    niche: 'Мода і лайфстайл',
    category: 'Лайфстайл',
    image: '/bloggers/alina.png',
    followers: '1.2M',
    engagement: '8.4%',
    match: 98,
    bio: 'Тиха розкіш, капсульні гардероби та чесні огляди брендів.',
    about:
      'Аліна веде блог понад 6 років і стала одним із головних голосів естетики «тихої розкоші» в українському інстаграмі. Створює капсульні гардероби на сезон, розбирає якість тканин і крою, чесно говорить про ціну та довговічність речей. Аудиторія довіряє її рекомендаціям і активно купує за промокодами.',
    topics: ['Капсульний гардероб', 'Огляди брендів', 'Шопінг-гайди', 'Інтер’єр'],
    audience: { age: '24–38 років', gender: '87% жінки', geo: 'Київ, Львів, Одеса' },
    formats: ['Reels', 'Stories', 'Каруселі', 'Telegram-пости'],
    highlights: [
      'Амбасадор 3 преміальних fashion-брендів',
      'Середня конверсія промокоду — 4.2%',
      'Власна колекція базового одягу sold out за 48 годин',
    ],
    frequency: '5–7 публікацій на тиждень',
    priceFrom: 'від $1 200',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'mark',
    name: 'Марк Левін',
    handle: '@mark.ai',
    niche: 'AI і технології',
    category: 'Технології',
    image: '/bloggers/mark.png',
    followers: '640K',
    engagement: '11.2%',
    match: 96,
    bio: 'Нейромережі простою мовою: інструменти, кейси та автоматизація бізнесу.',
    about:
      'Марк — продакт-менеджер з 10-річним досвідом у tech-компаніях, який пояснює нейромережі без складних термінів. Тестує нові AI-сервіси щотижня, показує реальні сценарії автоматизації для підприємців і фрилансерів. Його аудиторія — платоспроможні фахівці, які швидко впроваджують інструменти в роботу.',
    topics: ['AI-інструменти', 'Автоматизація', 'Продуктивність', 'Стартапи'],
    audience: { age: '22–40 років', gender: '68% чоловіки', geo: 'Україна, Польща, ЄС' },
    formats: ['YouTube-огляди', 'Reels', 'Telegram-канал', 'Вебінари'],
    highlights: [
      'Telegram-канал із 180K підписників',
      'Спікер на 12+ tech-конференціях',
      'Інтеграції з SaaS-продуктами окуповуються в середньому за 2 тижні',
    ],
    frequency: '3–4 публікації на тиждень',
    priceFrom: 'від $900',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'denis',
    name: 'Денис Орлов',
    handle: '@orlov.fit',
    niche: 'Фітнес і спорт',
    category: 'Фітнес',
    image: '/bloggers/denis.png',
    followers: '1.5M',
    engagement: '7.8%',
    match: 92,
    bio: 'Тренування, харчування та дисципліна — без марафонів і порожніх обіцянок.',
    about:
      'Денис — сертифікований тренер і майстер спорту з пауерліфтингу. Розробляє програми тренувань для дому та залу, розвінчує фітнес-міфи та показує власний шлях без «чарівних таблеток». Аудиторія цінує його за науковий підхід і щоденну мотивацію.',
    topics: ['Силові тренування', 'Харчування', 'Відновлення', 'Мотивація'],
    audience: { age: '18–35 років', gender: '61% чоловіки', geo: 'Україна, Німеччина' },
    formats: ['Reels', 'Програми тренувань', 'Прямі ефіри', 'Stories'],
    highlights: [
      'Майстер спорту з пауерліфтингу',
      '40 000+ учасників власних програм',
      'Партнер мереж спортивного харчування та екіпірування',
    ],
    frequency: 'Щоденні публікації',
    priceFrom: 'від $1 400',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'eva',
    name: 'Єва Мирон',
    handle: '@eva.beauty',
    niche: "Б'юті та догляд",
    category: "Б'юті",
    image: '/bloggers/eva.png',
    followers: '2.1M',
    engagement: '10.3%',
    match: 97,
    bio: 'Професійний макіяж, догляд за шкірою та розбори складів.',
    about:
      'Єва — візажистка з досвідом роботи на fashion-зйомках і тижнях моди. У блозі розбирає склади косметики, тестує новинки та показує техніки макіяжу, які легко повторити вдома. Її огляди часто стають вірусними, а продукти після рекомендації зникають з полиць.',
    topics: ['Макіяж', 'Догляд за шкірою', 'Розбір складів', 'Новинки б’юті'],
    audience: { age: '18–34 роки', gender: '92% жінки', geo: 'Україна, Казахстан, ЄС' },
    formats: ['Reels', 'Туторіали', 'Огляди-тести', 'Stories'],
    highlights: [
      'Візажистка Ukrainian Fashion Week',
      'Понад 50 млн переглядів Reels на місяць',
      'Колаборації з 20+ міжнародними б’юті-брендами',
    ],
    frequency: '6–8 публікацій на тиждень',
    priceFrom: 'від $1 800',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
]
