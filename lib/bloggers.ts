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
  'Усі',
  'Лайфстайл',
  'Технології',
  'Подорожі',
  'Фітнес',
  "Б'юті",
  'Фінанси',
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
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'sofia',
    name: 'Софія Ланська',
    handle: '@sofia.travels',
    niche: 'Подорожі',
    category: 'Подорожі',
    image: '/bloggers/sofia.png',
    followers: '890K',
    engagement: '9.1%',
    match: 94,
    bio: 'Бутик-готелі, рідкісні маршрути та подорожі без туристичних кліше.',
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
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
  {
    id: 'artem',
    name: 'Артем Білов',
    handle: '@belov.money',
    niche: 'Фінанси і бізнес',
    category: 'Фінанси',
    image: '/bloggers/artem.png',
    followers: '520K',
    engagement: '12.6%',
    match: 95,
    bio: 'Інвестиції, особисті фінанси та стратегії зростання капіталу.',
    blogUrl: '#',
    telegramUrl: 'https://t.me/',
  },
]
