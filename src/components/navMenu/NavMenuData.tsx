import bread from '../../../public/bread.png';
import childTasty from '../../../public/childTasty.png';
import dishWasher from '../../../public/dishWasher.png';
import Eggplant from '../../../public/Eggplant.png';
import healthyEating from '../../../public/healthyEating.png';
import internationalFood from '../../../public/internationalFood.png';
import kitchen from '../../../public/kitchen.png';
import leaf from '../../../public/leaf.png';
import mortar from '../../../public/mortar.png';
import pan from '../../../public/pan.png';
import pasta from '../../../public/pasta.png';
import pot from '../../../public/pot.png';
import teaCup from '../../../public/teaCup.png';

export const NavMenuData = [
    {
        id: 1,
        title: 'Салаты',
        icon: Eggplant,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 2,
        title: 'Закуски',
        icon: healthyEating,
        childrens: [
            { id: 11, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 3,
        title: 'Первые блюда',
        icon: pot,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 4,
        title: 'Вторые блюда',
        icon: pan,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 5,
        title: 'Десерты, выпечка',
        icon: bread,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 6,
        title: 'Блюда на гриле',
        icon: dishWasher,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 7,
        title: 'Веганская кухня',
        icon: leaf,
        childrens: [
            { id: 1, title: 'Закуски' },
            { id: 2, title: 'Первые блюда' },
            { id: 3, title: 'Вторые блюда' },
            { id: 4, title: 'Гарниры' },
            { id: 5, title: 'Десерты' },
            { id: 6, title: 'Выпечка' },
            { id: 7, title: 'Сыроедческие блюда' },
            { id: 8, title: 'Напитки' },
        ],
    },
    {
        id: 8,
        title: 'Детские блюда',
        icon: childTasty,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 9,
        title: 'Лечебное питание',
        icon: kitchen,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 10,
        title: 'Национальные',
        icon: internationalFood,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 11,
        title: 'Соусы',
        icon: mortar,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 12,
        title: 'Напитки',
        icon: teaCup,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
    {
        id: 13,
        title: 'Заготовки',
        icon: pasta,
        childrens: [
            { id: 1, title: 'Пункт меню 1' },
            { id: 2, title: 'Пункт меню 2' },
        ],
    },
];
