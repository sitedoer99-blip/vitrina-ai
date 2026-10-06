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
  blogUrl: string
  telegramUrl: string
}

export const categories = [
  'Все',
  'Лайфстайл',
  'Технологии',
  'Путешествия',
  'Фитнес',
  'Бьюти',
  'Финансы',
] as const

export type Category = Exclude<(typeof categories)[number], 'Все'>

export const bloggers: Blogger[] = [
  {
    id: 'alina',
    name: 'Алина Вербицкая',
    handle: '@alina.verb',
    niche: 'Мода и лайфстайл',
    category: 'Лайфстайл',
    image: '/bloggers/alina.png',
    followers: '1.2M',
    engagement: '8.4%',
    match: 98,
    bio: 'Тихая роскошь, капсульные гардеробы и честные обзоры брендов.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'mark',
    name: 'Марк Левин',
    handle: '@mark.ai',
    niche: 'AI и технологии',
    category: 'Технологии',
    image: '/bloggers/mark.png',
    followers: '640K',
    engagement: '11.2%',
    match: 96,
    bio: 'Нейросети простым языком: инструменты, кейсы и автоматизация бизнеса.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'sofia',
    name: 'София Ланская',
    handle: '@sofia.travels',
    niche: 'Путешествия',
    category: 'Путешествия',
    image: '/bloggers/sofia.png',
    followers: '890K',
    engagement: '9.1%',
    match: 94,
    bio: 'Бутик-отели, редкие маршруты и путешествия без туристических клише.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'denis',
    name: 'Денис Орлов',
    handle: '@orlov.fit',
    niche: 'Фитнес и спорт',
    category: 'Фитнес',
    image: '/bloggers/denis.png',
    followers: '1.5M',
    engagement: '7.8%',
    match: 92,
    bio: 'Тренировки, питание и дисциплина — без марафонов и пустых обещаний.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'eva',
    name: 'Ева Мирон',
    handle: '@eva.beauty',
    niche: 'Бьюти и уход',
    category: 'Бьюти',
    image: '/bloggers/eva.png',
    followers: '2.1M',
    engagement: '10.3%',
    match: 97,
    bio: 'Профессиональный макияж, уход за кожей и разборы составов.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'artem',
    name: 'Артём Белов',
    handle: '@belov.money',
    niche: 'Финансы и бизнес',
    category: 'Финансы',
    image: '/bloggers/artem.png',
    followers: '520K',
    engagement: '12.6%',
    match: 95,
    bio: 'Инвестиции, личные финансы и стратегии роста капитала.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
]
