let gameData = {
    nationalities: [
        {
            name: 'Ханты',
            image: './images/game/nationalities/Ханты.png',
            id: 0
        },
        {
            name: 'Русские',
            image: './images/game/nationalities/Русские.png',
            id: 1
        },
        {
            name: 'Башкиры',
            image: './images/game/nationalities/Башкиры.png',
            id: 2
        },
        {
            name: 'Татары',
            image: './images/game/nationalities/Татары.png',
            id: 3
        },
        {
            name: 'Азербайджанцы',
            image: './images/game/nationalities/az.png',
            id: 4
        },
        {
            name: 'Чеченцы',
            image: './images/game/nationalities/Чеченцы.png',
            id: 5
        },
        {
            name: 'Украинцы',
            image: './images/game/nationalities/Украинцы.png',
            id: 6
        },
        {
            name: 'Белорусы',
            image: './images/game/nationalities/Белорусы.png',
            id: 7
        },
        {
            name: 'Марийцы',
            image: './images/game/nationalities/mr.png',
            id: 8
        },
        {
            name: 'Мордва',
            image: './images/game/nationalities/Мордва.png',
            id: 9
        },
        {
            name: 'Чуваши',
            image: './images/game/nationalities/Чуваши.png',
            id: 10
        },
        {
            name: 'Молдаване',
            image: './images/game/nationalities/Молдаване.png',
            id: 11
        },
        {
            name: 'народы Дагестана',
            image: './images/game/nationalities/Народы_Дагестана.png',
            id: 12
        },
        {
            name: 'Армяне',
            image: './images/game/nationalities/Армяне.png',
            id: 13
        },
        {
            name: 'Казахи',
            image: './images/game/nationalities/Казахи.png',
            id: 14
        },
        {
            name: 'Таджики',
            image: './images/game/nationalities/Таджики.png',
            id: 15
        },
        {
            name: 'Узбеки',
            image: './images/game/nationalities/Узбеки.png',
            id: 16
        },
        {
            name: 'Киргизы',
            image: './images/game/nationalities/Киргизы.png',
            id: 17
        }
    ],
    nationalitiesGroup: [
        {
            name: 'Народы Сибири',
            nationalities: [0],
            food: [0, 1],
            wrongFood: [15, 23, 6, 9, 21, 24, 3],
            id: 0
        },
        {
            name: 'Народы Урала',
            nationalities: [2],
            food: [2, 3, 4],
            wrongFood: [24, 26, 12, 13, 5, 17],
            id: 2
        },
        {
            name: 'Народы Поволжья',
            nationalities: [8, 10, 3, 9],
            food: [5, 6, 7, 8],
            wrongFood: [11, 19, 26],
            id: 3
        },
        {
            name: 'Народы Кавказа',
            nationalities: [12, 5, 4, 13],
            food: [9, 10, 11, 12, 13, 14],
            wrongFood: [2, 4, 7, 15],
            id: 1
        },
        {
            name: 'Народы Восточной Европы',
            nationalities: [1, 6, 7, 11],
            food: [21, 22, 23, 24, 25, 26],
            wrongFood: [6, 12, 19, 13],
            id: 5
        },
        {
            name: 'Народы Средней Азии',
            nationalities: [14, 15, 16, 17],
            food: [15, 16, 17, 18, 19, 20],
            wrongFood: [21, 23, 0, 6],
            id: 4
        }
    ],
    food: [
        {
            name: 'Патанка',
            image: './images/game/food/строганина.png',
            id: 0
        },
        {
            name: 'Подовушка',
            image: './images/game/food/подовушка.png',
            id: 1
        },
        {
            name: 'Губадия',
            image: './images/game/food/губадия.png',
            id: 2
        },
        {
            name: 'Элеш',
            image: './images/game/food/элеш.png',
            id: 3
        },
        {
            name: 'Вак-бэлиш',
            image: './images/game/food/вак_балиш.png',
            id: 4
        },
        {
            name: 'Шартан',
            image: './images/game/food/шартан.png',
            id: 5
        },
        {
            name: 'Палыш',
            image: './images/game/food/палыш.png',
            ingridients: [16, 18, 19, 6, 7, 8, 3, 20, 21],
            wrongIngridients: [4, 9, 10, 11],
            id: 6
        },
        {
            name: 'Чак-чак',
            image: './images/game/food/чак_чак.png',
            id: 7
        },
        {
            name: 'Цеманат',
            image: './images/game/food/цеманат.png',
            id: 8
        },
        {
            name: 'Хинкал',
            image: './images/game/food/хинкал.png',
            ingridients: [24, 20, 18, 14, 25],
            wrongIngridients: [0, 4, 6, 9],
            id: 9
        },
        {
            name: 'Чуду',
            image: './images/game/food/чуду.png',
            id: 10
        },
        {
            name: 'Долма',
            image: './images/game/food/долма.png',
            id: 11
        },
        {
            name: 'Хаш',
            image: './images/game/food/хаш.png',
            id: 12
        },
        {
            name: 'Чепалгаш',
            image: './images/game/food/чепалгаш.png',
            id: 13
        },
        {
            name: 'Жижиг-галнаш',
            image: './images/game/food/жижиг_галнаш.png',
            id: 14
        },
        {
            name: 'Плов',
            image: './images/game/food/плов.png',
            ingridients: [3, 2, 6, 22, 18],
            wrongIngridients: [4, 1, 9, 5],
            id: 15
        },
        {
            name: 'Шурпа',
            image: './images/game/food/шурпа.png',
            id: 16
        },
        {
            name: 'Манты',
            image: './images/game/food/манты.png',
            id: 17
        },
        {
            name: 'Самса',
            image: './images/game/food/самса.png',
            id: 18
        },
        {
            name: 'Бешбармак',
            image: './images/game/food/бешбармак.png',
            id: 19
        },
        {
            name: 'Казы',
            image: './images/game/food/казы.png',
            id: 20
        },
        {
            name: 'Блины',
            image: './images/game/food/блины.png',
            id: 21
        },
        {
            name: 'Щи',
            image: './images/game/food/щи.png',
            ingridients: [0, 1, 2, 3, 15],
            wrongIngridients: [4, 5, 6, 20],
            id: 22
        },
        {
            name: 'Пельмени',
            image: './images/game/food/пельмени.png',
            id: 23
        },
        {
            name: 'Драники',
            image: './images/game/food/драники.png',
            id: 24
        },
        {
            name: 'Сало',
            image: './images/game/food/сало.png',
            id: 25
        },
        {
            name: 'Мамалыга',
            image: './images/game/food/мамалыга.png',
            id: 26
        },
        {
            name: 'Кыстыбый',
            image: './images/game/food/кыстыбый.png',
            ingridients: [1, 20, 23, 21, 24],
            wrongIngridients: [2, 4, 0, 12],
            id: 27
        }
    ],
    ingridients: [
        {
            name: 'Капуста',
            image: './images/game/food/капуста.png',
            id: 0
        },
        {
            name: 'Картофель',
            image: './images/game/food/картофель.png',
            id: 1
        },
        {
            name: 'Морковь',
            image: './images/game/food/морковь.png',
            id: 2
        },
        {
            name: 'Лук',
            image: './images/game/food/лук.png',
            id: 3
        },
        {
            name: 'Свекла',
            image: './images/game/food/свекла.png',
            id: 4
        },
        {
            name: 'Греча',
            image: './images/game/food/гречка.png',
            id: 5
        },
        {
            name: 'Рис',
            image: './images/game/food/рис_еда.png',
            id: 6
        },
        {
            name: 'Перловка',
            image: './images/game/food/перловка.png',
            id: 7
        },
        {
            name: 'Овсяная крупа',
            image: './images/game/food/овсянка.png',
            id: 8
        },
        {
            name: 'Кукуруза',
            image: './images/game/food/кукуруза.png',
            id: 9
        },
        {
            name: 'Огурец',
            image: './images/game/food/огурец.png',
            id: 10
        },
        {
            name: 'Помидор',
            image: './images/game/food/помидор.png',
            id: 11
        },
        {
            name: 'Репа',
            image: './images/game/food/репа.png',
            id: 12
        },
        {
            name: 'Капуста',
            image: './images/game/food/капуста.png',
            id: 13
        },
        {
            name: 'Чеснок',
            image: './images/game/food/чеснок.png',
            id: 14
        },
        {
            name: 'Свинина',
            image: './images/game/food/свинина.png',
            id: 15
        },
        {
            name: 'Утка',
            image: './images/game/food/утка.png',
            id: 16
        },
        {
            name: 'Говядина',
            image: './images/game/food/говядина.png',
            id: 18
        },
        {
            name: 'Баранина',
            image: './images/game/food/баранина.png',
            id: 19
        },
        {
            name: 'Яйцо',
            image: './images/game/food/yac.png',
            id: 20
        },
        {
            name: 'Сливочное масло',
            image: './images/game/food/сливочное_масло.png',
            id: 21
        },
        {
            name: 'Подсолнечное масло',
            image: './images/game/food/подсолнечное_масло.png',
            id: 22
        },
        {
            name: 'Молоко',
            image: './images/game/food/молоко.png',
            id: 23
        },
        {
            name: 'Мука',
            image: './images/game/food/мука.png',
            id: 24
        },
        {
            name: 'Сметана',
            image: './images/game/food/сметана.png',
            id: 25
        }
    ],
    regions: [
        {
            name: 'Сибирь',
            id: 0,
            plants: [1, 4],
            wrongPlants: [0, 3, 2, 5, 6]
        },
        {
            name: 'Урал',
            id: 1,
            plants: [1, 4],
            wrongPlants: [2, 3, 0, 6, 5]
        },
        {
            name: 'Поволжье',
            id: 2,
            plants: [0, 3, 4],
            wrongPlants: [1, 2, 6, 5]
        },
        {
            name: 'Кавказ',
            id: 3,
            plants: [0, 2, 3, 4],
            wrongPlants: [1, 5, 6]
        },
        {
            name: 'Средняя Азия',
            id: 4,
            plants: [0, 2, 3, 4, 5, 6],
            wrongPlants: [1]
        }
    ],
    plants: [
        {
            id: 0,
            name: 'Арбуз',
            image: './images/game/food/арбуз.png',
        },
        {
            id: 1,
            name: 'Клюква',
            image: './images/game/food/клюква.png',
        },
        {
            id: 2,
            name: 'Гранат',
            image: './images/game/food/гранат.png',
        },
        {
            id: 3,
            name: 'Виноград',
            image: './images/game/food/виноград.png',
        },
        {
            id: 4,
            name: 'Пшеница',
            image: './images/game/food/пшеница.png',
        },
        {
            id: 5,
            name: 'Рис',
            image: './images/game/food/рис_растение.png',
        },
        {
            id: 6,
            name: 'Хлопок',
            image: './images/game/food/хлопок.png',
        }
    ],
    puzzle: [
        {
            id: 0,
            image: './images/game/puzzle/1/puzzle.png',
            pieces: [
                {
                    id: 0,
                    image: './images/game/puzzle/1/pieces/11.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 0,
                        width: 242,
                        height: 207
                    }
                },
                {
                    id: 1,
                    image: './images/game/puzzle/1/pieces/12.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 0,
                        width: 183,
                        height: 276
                    }
                },
                {
                    id: 2,
                    image: './images/game/puzzle/1/pieces/13.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 301, 
                        y: 0,
                        width: 300,
                        height: 208
                    }
                },
                {
                    id: 3,
                    image: './images/game/puzzle/1/pieces/14.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 540, 
                        y: 0,
                        width: 239,
                        height: 278
                    }
                },
                {
                    id: 4,
                    image: './images/game/puzzle/1/pieces/3.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 718, 
                        y: 0,
                        width: 181,
                        height: 278
                    }
                },
                {
                    id: 5,
                    image: './images/game/puzzle/1/pieces/10.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 137,
                        width: 181,
                        height: 345
                    }
                },
                {
                    id: 6,
                    image: './images/game/puzzle/1/pieces/2.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 120, 
                        y: 205,
                        width: 302,
                        height: 209
                    }
                },
                {
                    id: 7,
                    image: './images/game/puzzle/1/pieces/1.png',
                    ui: {
                        x: 0, 
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    place: {
                        x: 360, 
                        y: 138,
                        width: 180,
                        height: 343
                    }
                },
                {
                    id: 8,
                    image: './images/game/puzzle/1/pieces/15.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 478, 
                        y: 207,
                        width: 243,
                        height: 206
                    }
                },
                {
                    id: 9,
                    image: './images/game/puzzle/1/pieces/4.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 660, 
                        y: 206,
                        width: 239,
                        height: 207
                    }
                },
                {
                    id: 10,
                    image: './images/game/puzzle/1/pieces/9.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 411,
                        width: 241,
                        height: 207
                    }
                },
                {
                    id: 11,
                    image: './images/game/puzzle/1/pieces/8.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 343,
                        width: 182,
                        height: 275
                    }
                },
                {
                    id: 12,
                    image: './images/game/puzzle/1/pieces/7.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 299, 
                        y: 411,
                        width: 302,
                        height: 207
                    }
                },
                {
                    id: 13,
                    image: './images/game/puzzle/1/pieces/6.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 538, 
                        y: 343,
                        width: 246,
                        height: 275
                    }
                },
                {
                    id: 14,
                    image: './images/game/puzzle/1/pieces/5.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 720, 
                        y: 342,
                        width: 179,
                        height: 276
                    }
                }            
            ],
            author: 'Картина армянского художника Севада Григоряна',
            name: '«Дуэт»'
        },
        {
            id: 1,
            image: './images/game/puzzle/2/puzzle.png',
            pieces: [
                {
                    id: 0,
                    image: './images/game/puzzle/2/pieces/11.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 0,
                        width: 242,
                        height: 207
                    }
                },
                {
                    id: 1,
                    image: './images/game/puzzle/2/pieces/12.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 0,
                        width: 183,
                        height: 276
                    }
                },
                {
                    id: 2,
                    image: './images/game/puzzle/2/pieces/13.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 301, 
                        y: 0,
                        width: 300,
                        height: 208
                    }
                },
                {
                    id: 3,
                    image: './images/game/puzzle/2/pieces/14.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 540, 
                        y: 0,
                        width: 239,
                        height: 278
                    }
                },
                {
                    id: 4,
                    image: './images/game/puzzle/2/pieces/3.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 718, 
                        y: 0,
                        width: 181,
                        height: 278
                    }
                },
                {
                    id: 5,
                    image: './images/game/puzzle/2/pieces/10.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 137,
                        width: 181,
                        height: 345
                    }
                },
                {
                    id: 6,
                    image: './images/game/puzzle/2/pieces/2.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 120, 
                        y: 205,
                        width: 302,
                        height: 209
                    }
                },
                {
                    id: 7,
                    image: './images/game/puzzle/2/pieces/1.png',
                    ui: {
                        x: 0, 
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    place: {
                        x: 360, 
                        y: 138,
                        width: 180,
                        height: 343
                    }
                },
                {
                    id: 8,
                    image: './images/game/puzzle/2/pieces/15.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 478, 
                        y: 207,
                        width: 243,
                        height: 206
                    }
                },
                {
                    id: 9,
                    image: './images/game/puzzle/2/pieces/4.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 660, 
                        y: 206,
                        width: 239,
                        height: 207
                    }
                },
                {
                    id: 10,
                    image: './images/game/puzzle/2/pieces/9.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 411,
                        width: 241,
                        height: 207
                    }
                },
                {
                    id: 11,
                    image: './images/game/puzzle/2/pieces/8.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 343,
                        width: 182,
                        height: 275
                    }
                },
                {
                    id: 12,
                    image: './images/game/puzzle/2/pieces/7.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 299, 
                        y: 411,
                        width: 302,
                        height: 207
                    }
                },
                {
                    id: 13,
                    image: './images/game/puzzle/2/pieces/6.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 538, 
                        y: 343,
                        width: 246,
                        height: 275
                    }
                },
                {
                    id: 14,
                    image: './images/game/puzzle/2/pieces/5.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 720, 
                        y: 342,
                        width: 179,
                        height: 276
                    }
                }            
            ],
            author: 'Картина чеченского художника Сулеймана Ахмадовича Амаева',
            name: '«Похищение луны»'
            
        },
        {
            id: 2,
            image: './images/game/puzzle/3/puzzle.png',
            pieces: [
                {
                    id: 0,
                    image: './images/game/puzzle/3/pieces/11.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 0,
                        width: 242,
                        height: 207
                    }
                },
                {
                    id: 1,
                    image: './images/game/puzzle/3/pieces/12.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 0,
                        width: 183,
                        height: 276
                    }
                },
                {
                    id: 2,
                    image: './images/game/puzzle/3/pieces/13.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 301, 
                        y: 0,
                        width: 300,
                        height: 208
                    }
                },
                {
                    id: 3,
                    image: './images/game/puzzle/3/pieces/14.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 540, 
                        y: 0,
                        width: 239,
                        height: 278
                    }
                },
                {
                    id: 4,
                    image: './images/game/puzzle/3/pieces/3.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 718, 
                        y: 0,
                        width: 181,
                        height: 278
                    }
                },
                {
                    id: 5,
                    image: './images/game/puzzle/3/pieces/10.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 137,
                        width: 181,
                        height: 345
                    }
                },
                {
                    id: 6,
                    image: './images/game/puzzle/3/pieces/2.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 120, 
                        y: 205,
                        width: 302,
                        height: 209
                    }
                },
                {
                    id: 7,
                    image: './images/game/puzzle/3/pieces/1.png',
                    ui: {
                        x: 0, 
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    place: {
                        x: 360, 
                        y: 138,
                        width: 180,
                        height: 343
                    }
                },
                {
                    id: 8,
                    image: './images/game/puzzle/3/pieces/15.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 478, 
                        y: 207,
                        width: 243,
                        height: 206
                    }
                },
                {
                    id: 9,
                    image: './images/game/puzzle/3/pieces/4.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 660, 
                        y: 206,
                        width: 239,
                        height: 207
                    }
                },
                {
                    id: 10,
                    image: './images/game/puzzle/3/pieces/9.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 411,
                        width: 241,
                        height: 207
                    }
                },
                {
                    id: 11,
                    image: './images/game/puzzle/3/pieces/8.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 343,
                        width: 182,
                        height: 275
                    }
                },
                {
                    id: 12,
                    image: './images/game/puzzle/3/pieces/7.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 299, 
                        y: 411,
                        width: 302,
                        height: 207
                    }
                },
                {
                    id: 13,
                    image: './images/game/puzzle/3/pieces/6.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 538, 
                        y: 343,
                        width: 246,
                        height: 275
                    }
                },
                {
                    id: 14,
                    image: './images/game/puzzle/3/pieces/5.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 720, 
                        y: 342,
                        width: 179,
                        height: 276
                    }
                }            
            ],
            author: 'Картина русского художника Ивана Ивановича Шишкина',
            name: '«Утро в сосновом бору»'
        },
        {
            id: 3,
            image: './images/game/puzzle/4/puzzle.png',
            pieces: [
                {
                    id: 0,
                    image: './images/game/puzzle/4/pieces/11.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 0,
                        width: 242,
                        height: 207
                    }
                },
                {
                    id: 1,
                    image: './images/game/puzzle/4/pieces/12.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 0,
                        width: 183,
                        height: 276
                    }
                },
                {
                    id: 2,
                    image: './images/game/puzzle/4/pieces/13.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 301, 
                        y: 0,
                        width: 300,
                        height: 208
                    }
                },
                {
                    id: 3,
                    image: './images/game/puzzle/4/pieces/14.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 540, 
                        y: 0,
                        width: 239,
                        height: 278
                    }
                },
                {
                    id: 4,
                    image: './images/game/puzzle/4/pieces/3.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 718, 
                        y: 0,
                        width: 181,
                        height: 278
                    }
                },
                {
                    id: 5,
                    image: './images/game/puzzle/4/pieces/10.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 137,
                        width: 181,
                        height: 345
                    }
                },
                {
                    id: 6,
                    image: './images/game/puzzle/4/pieces/2.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 120, 
                        y: 205,
                        width: 302,
                        height: 209
                    }
                },
                {
                    id: 7,
                    image: './images/game/puzzle/4/pieces/1.png',
                    ui: {
                        x: 0, 
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    place: {
                        x: 360, 
                        y: 138,
                        width: 180,
                        height: 343
                    }
                },
                {
                    id: 8,
                    image: './images/game/puzzle/4/pieces/15.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 478, 
                        y: 207,
                        width: 243,
                        height: 206
                    }
                },
                {
                    id: 9,
                    image: './images/game/puzzle/4/pieces/4.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 660, 
                        y: 206,
                        width: 239,
                        height: 207
                    }
                },
                {
                    id: 10,
                    image: './images/game/puzzle/4/pieces/9.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 411,
                        width: 241,
                        height: 207
                    }
                },
                {
                    id: 11,
                    image: './images/game/puzzle/4/pieces/8.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 343,
                        width: 182,
                        height: 275
                    }
                },
                {
                    id: 12,
                    image: './images/game/puzzle/4/pieces/7.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 299, 
                        y: 411,
                        width: 302,
                        height: 207
                    }
                },
                {
                    id: 13,
                    image: './images/game/puzzle/4/pieces/6.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 538, 
                        y: 343,
                        width: 246,
                        height: 275
                    }
                },
                {
                    id: 14,
                    image: './images/game/puzzle/4/pieces/5.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 720, 
                        y: 342,
                        width: 179,
                        height: 276
                    }
                }            
            ],
            author: 'Картина башкирского художника Ахмата Фаткулловича Лутфуллина',
            name: '«Три женщины»'
        },
        {
            id: 4,
            image: './images/game/puzzle/5/puzzle.png',
            pieces: [
                {
                    id: 0,
                    image: './images/game/puzzle/5/pieces/11.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 0,
                        width: 242,
                        height: 207
                    }
                },
                {
                    id: 1,
                    image: './images/game/puzzle/5/pieces/12.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 0,
                        width: 183,
                        height: 276
                    }
                },
                {
                    id: 2,
                    image: './images/game/puzzle/5/pieces/13.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 301, 
                        y: 0,
                        width: 300,
                        height: 208
                    }
                },
                {
                    id: 3,
                    image: './images/game/puzzle/5/pieces/14.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 540, 
                        y: 0,
                        width: 239,
                        height: 278
                    }
                },
                {
                    id: 4,
                    image: './images/game/puzzle/5/pieces/3.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 718, 
                        y: 0,
                        width: 181,
                        height: 278
                    }
                },
                {
                    id: 5,
                    image: './images/game/puzzle/5/pieces/10.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 137,
                        width: 181,
                        height: 345
                    }
                },
                {
                    id: 6,
                    image: './images/game/puzzle/5/pieces/2.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 120, 
                        y: 205,
                        width: 302,
                        height: 209
                    }
                },
                {
                    id: 7,
                    image: './images/game/puzzle/5/pieces/1.png',
                    ui: {
                        x: 0, 
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    place: {
                        x: 360, 
                        y: 138,
                        width: 180,
                        height: 343
                    }
                },
                {
                    id: 8,
                    image: './images/game/puzzle/5/pieces/15.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 478, 
                        y: 207,
                        width: 243,
                        height: 206
                    }
                },
                {
                    id: 9,
                    image: './images/game/puzzle/5/pieces/4.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 660, 
                        y: 206,
                        width: 239,
                        height: 207
                    }
                },
                {
                    id: 10,
                    image: './images/game/puzzle/5/pieces/9.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 0, 
                        y: 411,
                        width: 241,
                        height: 207
                    }
                },
                {
                    id: 11,
                    image: './images/game/puzzle/5/pieces/8.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 180, 
                        y: 343,
                        width: 182,
                        height: 275
                    }
                },
                {
                    id: 12,
                    image: './images/game/puzzle/5/pieces/7.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 299, 
                        y: 411,
                        width: 302,
                        height: 207
                    }
                },
                {
                    id: 13,
                    image: './images/game/puzzle/5/pieces/6.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 538, 
                        y: 343,
                        width: 246,
                        height: 275
                    }
                },
                {
                    id: 14,
                    image: './images/game/puzzle/5/pieces/5.png',
                    ui: {
                        x: 0, 
                        y: 0
                    },
                    place: {
                        x: 720, 
                        y: 342,
                        width: 179,
                        height: 276
                    }
                }            
            ],
            author: 'Картина марийского художника Зосима Федоровича Лаврентьева',
            name: '«Праздник в марийской деревне»'
        }
    ]
}