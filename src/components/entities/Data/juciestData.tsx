import internationalFood from '../../../../public/internationalFood.png';
import pan from '../../../../public/pan.png';
import AlexCook from '../../shared/images/avatarImages/AlexCook.png';
import ElenaVisotskaya from '../../shared/images/avatarImages/ElenaVisotskaya.jpg';
import Kneli from '../../shared/images/FoodImages/Kneli.png';
import Lapsha from '../../shared/images/FoodImages/Lapsha.png';
import Tomyam from '../../shared/images/FoodImages/Tomyam.png';
import Vetchina from '../../shared/images/FoodImages/Vetchina.png';
export const JuciestData = [
    {
        id: 12,
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
        id: 13,
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
        id: 7,
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
        id: 15,
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
