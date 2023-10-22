export enum Background {
  Entertainer = "Артист",
  Urchin = "Беспризорник",
  Noble = "Благородный",
  GuildArtisan = "Гильдейский ремесленик",
  Sailor = "Моряк",
  Sage = "Мудрец",
  FolkHero = "Народный герой",
  Hermit = "Отшельник",
  Pirate = "Пират",
  Criminal = "Преступник",
  Acolyte = "Прислужник",
  Soldier = "Солдат",
  Outlander = "Чужеземец",
  Charlatan = "Шарлатан",
}

export const BACKGROUND_PERSONALIZATION: Record<Background, { trates: Array<string>, ideals: Array<string>, attachments: Array<string>, weaknesses: Array<string> }> = {
  [Background.Acolyte]: {
    trates: [
      "Я идеализирую конкретного героя своей веры и постоянно ссылаюсь на его поступки и свершения",
      "Я могу найти общую позицию даже у самых яростных врагов, сопереживая им, и всегда стремясь к примирению",
      "Я вижу знамения в каждом событии и поступке. Боги пытаются говорить с нами, нужно лишь прислушаться",
      "Ничто не может поколебать мой оптимизм",
      "При любой оказии я цитирую (или перевираю) священные тексты и притчи",
      "Я терпим (или нетерпим) к другим верованиям, и уважаю (или порицаю) поклонение другим богам",
      "Я люблю хорошую еду, выпивку и высокое общество представителей своего храма. Жизнь вдали от этого меня раздражает",
      "Я пробыл в храме слишком долго, и мне недостаёт опыта взаимодействия с людьми за его пределами"
    ],
    ideals: [
      "Традиции. Мы должны сохранить и защитить древние традиции богослужения и совершения священных таинств. (Законный)",
      "Милосердие. Несмотря на затраченные усилия, я всегда пытаюсь помочь тем, кто в нужде. (Добрый)",
      "Перемены. Мы должны помогать привносить в мир перемены, которых наши божества постоянно жаждут. (Хаотичный)",
      "Власть. Я надеюсь однажды подняться на самую вершину своей религиозной иерархии. (Законный)",
      "Вера. Я верю, что моё божество направляет меня. И что усердная работа всегда будет вознаграждена. (Законный)",
      "Стремление. Я ищу шанс доказать, что я достоин благословления своего божества, совершая деяния в соответствии с его учениями. (Любой)"
    ],
    attachments: [
      "Я не пощажу живота своего, лишь бы найти древнюю реликвию своей веры, что была потеряна давным давно",
      "Однажды я отомщу развращённым представителям верховной иерархии своего храма, что объявили меня еретиком",
      "Я обязан своей жизнью священнику, который позаботился обо мне, когда умерли родители",
      "Всё, что я делаю — для простых людей",
      "Я пойду на всё что угодно, дабы защитить свой храм",
      "Я пытаюсь сохранить священные тексты, которые мои враги считают еретическими и пытаются уничтожить"
    ],
    weaknesses: [
      "Я не проявляю снисходительности к другим, но к себе я еще более суров",
      "Я слишком доверяю тем, кто обладает властью в моей церковной иерархии",
      "Моя набожность зачастую приводит к тому, что я слепо верю всем, кто исповедует мою религию",
      "Я непреклонен в своих убеждениях",
      "Я настороженно отношусь к незнакомцам и всегда жду от них худшего",
      "Однажды выбрав цель, я становлюсь одержимым ею в ущерб всему прочему в своей жизни"
    ]
  },
  [Background.Entertainer]: {
    trates: [
      "Для любой ситуации я найду подходящий рассказ",
      "Куда бы я ни пришёл, я начинаю собирать местные слухи и распространять сплетни",
      "Я безнадёжный романтик, всегда ищущий «кого-то особого»",
      "Никто не сердится на меня или возле меня подолгу, так как я могу разрядить любую напряжённую обстановку",
      "Мне нравятся оскорбления, даже если они направлены на меня",
      "Мне обидно, если я не нахожусь в центре внимания",
      "Превыше всего я ценю совершенство",
      "Моё настроение и намерения меняются так же быстро как ноты в музыке"
    ],
    ideals: [
      "Красота. Выступая, я делаю мир лучше. (Добрый)",
      "Традиции. Рассказы, легенды и песни прошлого не должны забываться, так как они учат нас тому, кто мы такие. (Законный)",
      "Творчество. Миру нужны новые идеи и смелые действия. (Хаотичный)",
      "Жадность. Я занимаюсь всем этим ради денег и славы. (Злой)",
      "Народ. Мне нравится видеть улыбки на лицах во время выступления. В этом-то всё дело. (Нейтральный)",
      "Честность. Искусство должно отражать душу; оно должно идти изнутри и показывать, чем мы являемся. (Любой)"
    ],
    attachments: [
      "Мой инструмент — самое драгоценное, что у меня есть, и он напоминает мне о моей любви",
      "Кто-то украл мой драгоценный инструмент, и когда-нибудь я верну его",
      "Я хочу быть знаменитым, чего бы это ни стоило",
      "Я боготворю героя старых рассказов, и всегда сравниваю свои поступки с его",
      "Я всё сделаю, чтобы доказать превосходство над ненавистным конкурентом",
      "Я сделаю что угодно для других членов моей старой труппы"
    ],
    weaknesses: [
      "Я пойду на всё ради славы и известности",
      "Не могу устоять перед смазливым личиком",
      "Я не могу вернуться домой из-за скандала. Неприятности такого рода словно преследуют меня",
      "Однажды я высмеял дворянина, который всё еще хочет оторвать мне голову. Это была ошибка, но я могу повторить её еще неоднократно",
      "Я не могу скрывать свои истинные чувства. Острый язык всегда приносит мне неприятности",
      "Я очень стараюсь исправиться, но друзьям не стоит на меня полагаться"
    ]
  },
  [Background.Urchin]: {
    trates: [
      "В моих карманах полно побрякушек и объедков",
      "Я задаю очень много вопросов",
      "Я часто забиваюсь в узкие закутки, где никто не сможет добраться до меня",
      "Я всегда сплю, прижавшись спиной к стене или дереву, сжимая узелок со всеми своими пожитками в руках",
      "Я не воспитан, и ем как свинья",
      "Я убеждён, что все, кто проявляют доброту ко мне, на самом деле скрывают злые намерения",
      "Я не люблю мыться",
      "Я прямо говорю о том, на что прочие предпочитают лишь намекнуть, или промолчать"
    ],
    ideals: [
      "Уважение. Все люди, богатые ли они, или бедные, достойны уважения. (Добрый)",
      "Общность. Вы должны заботиться друг о друге, ведь никто другой этого не сделает. (Законный)",
      "Перемены. Убогие возвысятся, а великие падут. Перемены в природе вещей. (Хаотичный)",
      "Возмездие. Нужно показать богачам, чего стоит жизнь и смерть в трущобах. (Злой)",
      "Люди. Я помогаю тем, кто помогает мне. Это позволяет нам выжить. (Нейтральный)",
      "Устремление. Я готов доказать, что достоин лучшей жизни. (Любой)"
    ],
    attachments: [
      "Мой город или деревня это мой дом, и я буду защищать его",
      "Я спонсирую приют, чтобы оградить других от того, что пришлось пережить мне",
      "Я выжил лишь благодаря другому беспризорнику, что передал мне знания, как вести себя на улицах",
      "Я в неоплатном долгу перед человеком, что сжалился и помог мне",
      "Я избавился от нищеты, ограбив важного человека, и меня разыскивают",
      "Никто не должен пережить те трудности, через которые пришлось пройти мне"
    ],
    weaknesses: [
      "Если я в меньшинстве, то я убегу из битвы",
      "Золото в любом виде выглядит для меня как большая куча денег, и я сделаю всё, чтобы его у меня стало больше",
      "Я никогда не доверяю полностью кому бы то ни было, кроме себя",
      "Я предпочту убить кого-нибудь во сне, нежели в честном поединке",
      "Это не воровство, если я взял то, в чём нуждаюсь больше, чем кто-либо другой",
      "Те, кто не могут позаботиться о себе, получат то, что заслужили"
    ]
  },
  [Background.Noble]: {
    trates: [
      "Я применяю так много лести, что все, с кем я разговариваю, чувствуют себя самыми чудесными и важными персонами в мире",
      "Обыватели любят меня за доброту и великодушие",
      "Один лишь взгляд на мои регалии заставляет перестать сомневаться в том, что я выше немытого отребья",
      "Я много трачу на то, чтобы выглядеть потрясающе, и по последнему слову моды",
      "Мне не нравится марать руки, и я не хочу умереть в каком-нибудь неподобающем месте",
      "Несмотря на благородное рождение, я не ставлю себя выше народа. У всех нас течёт одинаковая кровь",
      "Потеряв мою милость, обратно её не вернёшь",
      "Оскорбишь меня, и я сотру тебя в порошок, уничтожу твоё имя, и сожгу твои поля"
    ],
    ideals: [
      "Уважение. Уважение — мой долг. Кем бы ты ни был, к другим нужно относиться с уважением, невзирая на их происхождение. (Добрый)",
      "Ответственность. Я должен уважать тех, кто выше меня, а те, кто ниже меня, должны уважать меня. (Законный)",
      "Независимость. Я должен доказать, что справлюсь и без заботы своей семьи. (Хаотичный)",
      "Власть. Если соберу много власти, никто не посмеет указывать мне, что делать. (Злой)",
      "Семья. Настоящая кровь гуще. (Любое)",
      "Благородный долг. Я должен защищать тех, кто ниже меня, и заботиться о них. (Добрый)"
    ],
    attachments: [
      "Я пойду на любой риск, лишь бы заслужить признание семьи",
      "Союз моего дома с другой благородной семьёй нужно поддерживать любой ценой",
      "Нет никого важнее других членов моей семьи",
      "Я влюблён в наследницу семейства, презираемого моей роднёй",
      "Моя преданность правителю непоколебима",
      "Обыватели должны считать меня своим героем"
    ],
    weaknesses: [
      "Я втайне считаю всех ниже себя",
      "Я скрываю позорную тайну, которая может уничтожить мою семью",
      "Я слишком часто слышал завуалированные оскорбления и угрозы, и потому быстро впадаю в гнев",
      "У меня неустанная страсть к плотским удовольствиям",
      "Весь мир вращается вокруг меня",
      "Я часто навлекаю позор на свою семью словами и действиями"
    ]
  },
  [Background.GuildArtisan]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Sailor]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Sage]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.FolkHero]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Hermit]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Pirate]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Criminal]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Soldier]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Outlander]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  },
  [Background.Charlatan]: {
    trates: [],
    ideals: [],
    attachments: [],
    weaknesses: []
  }
}