import internationalFood from '../../../public/internationalFood.png';
import pan from '../../../public/pan.png';
import AlexCook from './juciestImages/AlexCook.png';
import ElenaVisotskaya from './juciestImages/ElenaVisotskaya.jpg';
import Kneli from './juciestImages/Kneli.png';
import Lapsha from './juciestImages/Lapsha.png';
import Tomyam from './juciestImages/Tomyam.png';
import Vetchina from './juciestImages/Vetchina.png';
export const JuciestData = [
    {
        id: 1,
        title: 'Кнели со спагетти',
        likes: 152,
        follows: 85,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Kneli,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 2,
        title: 'Пряная ветчина по итальянски',
        likes: 257,
        follows: 159,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Vetchina,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        isRecomended: true,
        recomendedInfo: [{ id: 1, name: 'Елена Высоцкая', profileImage: ElenaVisotskaya }],
    },
    {
        id: 3,
        title: 'Лапша с курицей и шафраном',
        likes: 342,
        follows: 258,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Lapsha,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        isRecomended: true,
        recomendedInfo: [{ id: 1, name: 'Alex Cook', profileImage: AlexCook }],
    },
    {
        id: 4,
        title: 'Том-ям с капустой кимчи',
        likes: 324,
        follows: 124,
        tag: 'Национальные',
        tagIcon: internationalFood,
        image: Tomyam,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
];
