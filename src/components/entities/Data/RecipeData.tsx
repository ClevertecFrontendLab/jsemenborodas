import Kneli from '../../shared/images/FoodImages/Kneli.png';
import Lapsha from '../../shared/images/FoodImages/Lapsha.png';
import TomYam from '../../shared/images/FoodImages/Tomyam.png';
import Vetchina from '../../shared/images/FoodImages/Vetchina.png';

export const RecipeData = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: Lapsha,
        bookmarks: 85,
        likes: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'Томат (помидор)', count: '1', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: 'url',
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: 'url',
            },
        ],
        meat: '',
        side: 'potatoes',
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: Kneli,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'гриб', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: 'url',
            },
        ],
        side: 'potatoes',
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: TomYam,
        bookmarks: 85,
        likes: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: 'url',
            },
        ],
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: Vetchina,
        bookmarks: 85,
        likes: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: 'url',
            },
        ],
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: Lapsha,
        bookmarks: 124,
        likes: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: 'url',
            },
        ],
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: Kneli,
        bookmarks: 2,
        likes: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: 'url',
            },
        ],
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: TomYam,
        bookmarks: 8,
        likes: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: 'url',
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: 'url',
            },
        ],
    },

    {
        id: '7',
        title: 'Лапша c курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish', 'national', 'child-food'],
        subcategory: ['poultry-dish'],
        image: Lapsha,
        bookmarks: 258,
        likes: 342,
        date: '2024-03-08T00:00:00Z',
        time: '20 минут',
        portions: 4,
        nutritionValue: { calories: 358, proteins: 23, fats: 31, carbohydrates: 54 },
        ingredients: [
            { title: 'зелёного лука', count: '1', measureUnit: 'пучок' },
            { title: 'репчатого лука', count: '1', measureUnit: 'шт' },
            { title: 'чеснока', count: '1', measureUnit: 'зубчик' },
            { title: 'куриного филе', count: '500', measureUnit: 'г' },
            { title: 'масло или жира', count: '40', measureUnit: 'г' },
            { title: 'спагетти', count: '250', measureUnit: 'г' },
            { title: 'молотого шафрана', count: '1', measureUnit: 'щепотка' },
            { title: 'молотой корицы', count: '1', measureUnit: 'щепотка' },
            { title: 'мука', count: '1', measureUnit: 'ст л' },
            { title: 'сливок', count: '250', measureUnit: 'мл' },
            { title: 'куриного бульона из кубика', count: '200', measureUnit: 'мл' },
            { title: 'нарезанной петрушки', count: '2', measureUnit: 'ст л' },
        ],
        steps: [
            {
                stepNumber: 1,
                description:
                    'Зелёный лук нарезать на 1 см. кружочки. Лук и чеснок на мелкие кубики.  ',
                image: '/src/components/shared/LapshaImages/image-1.png',
            },
            {
                stepNumber: 2,
                description:
                    'Мясо помыть, высушить, нарезать на полосочки и обжарить на масле.  Посолить, поперчить и вынуть со сковороды.',
                image: '/src/components/shared/LapshaImages/image-2.png',
            },
            {
                stepNumber: 3,
                description: 'Спагетти отварить в течение  10 минут в подсоленной воде.',
                image: '/src/components/shared/LapshaImages/image-3.png',
            },
            {
                stepNumber: 4,
                description:
                    'В сковороде, на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и прожарить ещё около 1 минуты.',
                image: '/src/components/shared/LapshaImages/image-4.png',
            },
            {
                stepNumber: 5,
                description: 'Всыпать шафран, корицу и муки, перемешать и коротко прожарить.',
                image: '',
            },
            {
                stepNumber: 6,
                description:
                    'В сковороде, на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и прожарить ещё около 1 минуты.',
                image: '/src/components/shared/LapshaImages/image-5.png',
            },
            {
                stepNumber: 7,
                description:
                    'Сливки смешать с бульоном, влить к луку и протушить на среднем огне около 10 минут.',
                image: '',
            },
            {
                stepNumber: 8,
                description:
                    'Соус посолить, поперчить, вложить мясо, зелёный лук. Прогреть и осторожно смешать со спагетти. При подаче посыпать нарезанной петрушкой.',
                image: '/src/components/shared/LapshaImages/image-6.png',
            },
        ],
    },
    {
        id: '8',
        title: 'Гриль-салат c овощами',
        description: 'Салат c обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: Lapsha,
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: 'url',
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: 'url',
            },
        ],
    },

    {
        id: '12',
        title: 'Лапша c курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['second-dish', 'national', 'child-food'],
        subcategory: ['poultry-dish'],
        image: Lapsha,
        bookmarks: 258,
        likes: 342,
        date: '2024-03-08T00:00:00Z',
        time: '20 минут',
        portions: 4,
        nutritionValue: { calories: 358, proteins: 23, fats: 31, carbohydrates: 54 },
        ingredients: [
            { title: 'зелёного лука', count: '50', measureUnit: 'пучок' },
            { title: 'репчатого лука', count: '75', measureUnit: 'шт' },
            { title: 'чеснока', count: '1', measureUnit: 'зубчик' },
            { title: 'куриного филе', count: '500', measureUnit: 'г' },
            { title: 'масло или жира', count: '40', measureUnit: 'г' },
            { title: 'спагетти', count: '250', measureUnit: 'г' },
            { title: 'молотого шафрана', count: '1', measureUnit: 'щепотка' },
            { title: 'молотой корицы', count: '1', measureUnit: 'щепотка' },
            { title: 'мука', count: '1', measureUnit: 'ст л' },
            { title: 'сливок', count: '250', measureUnit: 'мл' },
            { title: 'куриного бульона из кубика', count: '200', measureUnit: 'мл' },
            { title: 'нарезанной петрушки', count: '2', measureUnit: 'ст л' },
        ],
        steps: [
            {
                stepNumber: 1,
                description:
                    'Зелёный лук нарезать на 1 см. кружочки. Лук и чеснок на мелкие кубики.  ',
                image: '/src/components/shared/LapshaImages/image-1.png',
            },
            {
                stepNumber: 2,
                description:
                    'Мясо помыть, высушить, нарезать на полосочки и обжарить на масле.  Посолить, поперчить и вынуть со сковороды.',
                image: '/src/components/shared/LapshaImages/image-2.png',
            },
            {
                stepNumber: 3,
                description: 'Спагетти отварить в течение  10 минут в подсоленной воде.',
                image: '/src/components/shared/LapshaImages/image-3.png',
            },
            {
                stepNumber: 4,
                description:
                    'В сковороде, на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и прожарить ещё около 1 минуты.',
                image: '/src/components/shared/LapshaImages/image-4.png',
            },
            {
                stepNumber: 5,
                description: 'Всыпать шафран, корицу и муки, перемешать и коротко прожарить.',
                image: '',
            },
            {
                stepNumber: 6,
                description:
                    'В сковороде, на оставшемся жире поджарить лук до золотистого цвета, добавить чеснок и прожарить ещё около 1 минуты.',
                image: '/src/components/shared/LapshaImages/image-5.png',
            },
            {
                stepNumber: 7,
                description:
                    'Сливки смешать с бульоном, влить к луку и протушить на среднем огне около 10 минут.',
                image: '',
            },
            {
                stepNumber: 8,
                description:
                    'Соус посолить, поперчить, вложить мясо, зелёный лук. Прогреть и осторожно смешать со спагетти. При подаче посыпать нарезанной петрушкой.',
                image: '/src/components/shared/LapshaImages/image-6.png',
            },
        ],
    },
];
