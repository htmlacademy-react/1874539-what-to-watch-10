import uniqid from 'uniqid';

import { Film } from '../types/film';

const idPrefix = 'film-';

export const films: Film[] = [
  {
    id: uniqid(idPrefix),
    title: 'Аватар 2: Путь воды',
    genres: ['боевик', 'приключения', 'триллер', 'фантастика'],
    releaseYear: 2022,
    images: {
      posterUrl:
        'https://cdnn21.img.ria.ru/images/156266/34/1562663413_0:0:1920:1080_1920x0_80_0_0_502fc76fef8e1ef19bc87be33e427d42.jpg.webp',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2022/trailer107099.mp4',
    },
    reviews: [
      {
        ratingScore: 5,
        text: 'Сууууупер!',
      },
    ],
    description:
      'После принятия образа аватара солдат Джейк Салли становится предводителем народа на`ви и берет на себя миссию по защите новых друзей от корыстных бизнесменов с Земли. Теперь ему есть за кого бороться — с Джейком его прекрасная возлюбленная Нейтири. Когда на Пандору возвращаются до зубов вооруженные земляне, Джейк готов дать им отпор.',
    director: 'Джеймс Кэмерон',
    actors: [
      'Мишель Йео',
      'Зои Салдана',
      'Кейт Уинслет',
      'Сэм Уортингтон',
      'Иди Фалько',
      'Сигурни Уивер',
      'Джованни Рибизи',
      'Джемейн Клемент',
      'Стивен Лэнг',
      'Уна Чаплин',
    ],
  },
  {
    id: uniqid(idPrefix),
    title: 'Матрица 4: Воскрешение',
    genres: ['боевик', 'приключения', 'триллер', 'фантастика'],
    releaseYear: 2021,
    images: {
      posterUrl: 'https://www.film.ru/sites/default/files/filefield_paths/neo-matrix-4.jpg',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2021/trailer102204.mp4',
    },
    reviews: [
      {
        ratingScore: 10,
        text: 'Киану лучший!',
      },
      {
        ratingScore: 8,
        text: 'Нео возвращается =)',
      },
    ],
    description:
      'Нео снова придется выбирать, следовать ли за белым кроликом. Выбор, пусть и иллюзорный, все еще остается единственным путем в Матрицу или из нее, что более опасно, чем когда-либо.',
    director: 'Лана Вачовски',
    actors: [
      'Киану Ривз',
      'Кэрри-Энн Мосс',
      'Яхья Абдул-Матин II',
      'Джада Пинкетт Смит',
      'Джессика Хенвик',
      'Джонатан Грофф',
      'Нил Патрик Харрис',
    ],
  },
  {
    id: uniqid(idPrefix),
    title: 'Дюна',
    genres: ['драма', 'приключения', 'фантастика'],
    releaseYear: 2021,
    images: {
      posterUrl: 'https://games.mail.ru/hotbox/content_files/article/2021/09/14/715844090f5044e2b55b29dc9c3df27a.jpg',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2021/trailer101162.mp4',
    },
    reviews: [],
    description:
      'Человечество расселилось по далёким планетам, а за власть над обитаемым пространством постоянно борются разные могущественные семьи. В центре противостояния оказывается пустынная планета Арракис.',
    director: 'Дени Вильнёв',
    actors: ['Тимоти Шаламе', 'Ребекка Фергюсон', 'Оскар Айзек', 'Джош Бролин', 'Стеллан Скарсгард', 'Дейв Батиста'],
  },
  {
    id: uniqid(idPrefix),
    title: 'Джиперс Криперс 4: Возрожденный',
    genres: ['мистика', 'триллер', 'ужасы'],
    releaseYear: 2022,
    images: {
      posterUrl:
        'https://kogda-vykhodit.ru/wp-content/uploads/2021/02/film-dzhipers-kripers-4-data-ego-vyhoda-v-2021.jpeg',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2021/trailer103334.mp4',
    },
    reviews: [
      {
        ratingScore: 3,
        text: '',
      },
      {
        ratingScore: 5,
        text: 'ратньше было лучше',
      },
      {
        ratingScore: 1,
        text: 'совсем не страшно =(',
      },
    ],
    description:
      'Решив отправиться со своим парнем на Horror Hound Festival, Лейн не испытывает радости. По мере приближения события девушку начинают мучить предчувствия и тревожные видения. В разгар фестиваля Лейн уже уверена, что происходит нечто сверхъестественное, и она находится в эпицентре ужасающего события.',
    director: 'Тимо Вуоренсола',
    actors: [
      'Сидни Крейвен',
      'Имран Адамс',
      'Жарро Бенжамен',
      'Мэтт Баркли',
      'Питер Брук',
      'Оушен Наварро',
      'Гэри Грэм',
      'Гэбриел Фрейлих',
      'Джорджия Гудман',
      'Терри Бёрд',
    ],
  },
  {
    id: uniqid(idPrefix),
    title: 'Веном 2',
    genres: ['боевик', 'драма', 'кинокомикс', 'криминал', 'триллер', 'фэнтези'],
    releaseYear: 2021,
    images: {
      posterUrl: 'https://v1.popcornnews.ru/k2/news/1200/upload/news/653129539227.jpg',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2021/trailer101396.mp4',
    },
    reviews: [
      {
        ratingScore: 4,
        text: 'На один раз',
      },
    ],
    description:
      'Более чем через год после тех событий журналист Эдди Брок пытается приспособиться к жизни в качестве хозяина инопланетного симбиота Венома, который наделяет его сверхчеловеческими способностями.',
    director: 'Энди Серкис',
    actors: ['Том Харди', 'Вуди Харрельсон', 'Мишель Уильямс', 'Наоми Харрис', 'Рейд Скотт', 'Стивен Грэм', 'Пегги Лу'],
  },
  {
    id: uniqid(idPrefix),
    title: 'Вечные',
    genres: ['фантастика', 'фэнтези', 'боевик', 'приключения'],
    releaseYear: 2021,
    images: {
      posterUrl: 'https://www.soyuz.ru/public/uploads/files/2/7473491/20211011195503248fcef5ad.jpg',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2021/trailer101769.mp4',
    },
    reviews: [
      {
        ratingScore: 8,
        text: '',
      },
      {
        ratingScore: 9,
        text: 'можно посмотреть',
      },
    ],
    description:
      'Вечные — представители расы генетически улучшенных суперлюдей, тайно живущих на Земле. Они появились на свет 5 миллионов лет назад в результате экспериментов могущественных целестиалов. Наделённые невероятными суперспособностями, на протяжении тысячелетий они скрывались от человеческой цивилизации',
    director: 'Хлоя Чжао',
    actors: [
      'Джемма Чан',
      'Ричард Мэдден',
      'Кумэйл Нанджиани',
      'Лия Макхью',
      'Брайан Тайри Генри',
      'Лорен Ридлофф',
      'Барри Кеоган',
    ],
  },
  {
    id: uniqid(idPrefix),
    title: 'Тор 4: Любовь и Гром',
    genres: ['боевик', 'кинокомикс', 'приключения', 'фэнтези'],
    releaseYear: 2022,
    images: {
      posterUrl: 'https://i.playground.ru/p/gwuM3JhLhAbORWLCq5cRTg.jpeg',
    },
    videos: {
      trailerUrl: 'https://trailers-kinonews.ru/trailers/2022/trailer108193.mp4',
    },
    reviews: [],
    description:
      'Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.',
    director: 'Тайка Вайтити',
    actors: [
      'Крис Хемсворт',
      'Кристиан Бейл',
      'Тесса Томпсон',
      'Джейми Александр',
      'Тайка Вайтити',
      'Рассел Кроу',
      'Натали Портман',
    ],
  },
  {
    id: uniqid(idPrefix),
    title: 'Посмотри, как они бегут',
    genres: ['детектив', 'исторический', 'триллер'],
    releaseYear: 2022,
    images: {
      posterUrl:
        'https://resizer.mail.ru/p/fa9f9a20-88e5-536a-bd57-f800048281c7/AQACY0KMqFa5bHch5m-XeQ8auXEQkDTuVOga1-8citZKOdNGA4SLrylQyjgC7h21TnYtjkhEHBmx-GQEF18mly4a5Lw.jpg',
    },
    videos: {
      trailerUrl: 'https://www.kinonews.ru/videos/trailer108340.mp4',
    },
    reviews: [
      {
        ratingScore: 3,
        text: 'кто здесь?',
      },
      {
        ratingScore: 5,
        text: 'не понятно',
      },
    ],
    description:
      'Загадочное убийство в театре Вест-Энда осложняет расследование инспектора Стоппарда и молодой амбициозной девушки констебля. Детективам суждено столкнуться со всеми замысловатыми перипетиями и показаниями свидетелей внутри таинственного подполья.',
    director: 'Том Джордж',
    actors: ['Сэм Рокуэлл', 'Эдриан Броуди', 'Харрис Дикинсон', 'Сирша Ронан', 'Рут Уилсон'],
  },
];
