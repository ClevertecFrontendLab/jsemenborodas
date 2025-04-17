import childTasty from '../../../../public/childTasty.png';
import dishWasher from '../../../../public/dishWasher.png';
import internationalFood from '../../../../public/internationalFood.png';
import pan from '../../../../public/pan.png';
import ElenaVisotskaya from './JuciestPageData//juciestImages/ElenaVisotskaya.jpg';
import Kneli from './JuciestPageData//juciestImages/Kneli.png';
import Lazanya from './JuciestPageData//juciestImages/Lazanya.png';
import Lapsha from './JuciestPageData//juciestImages/Leonardo.jpg';
import Potato from './JuciestPageData//juciestImages/Potato.png';
import Rooletiki from './JuciestPageData//juciestImages/Rooletiki.png';
import Tefteli from './JuciestPageData//juciestImages/Tefteli.png';
import Tomyam from './JuciestPageData//juciestImages/Tomyam.png';
import Vetchina from './JuciestPageData//juciestImages/Vetchina.png';
import AlexCook from './JuciestPageData/juciestImages/AlexCook.png';
export const JuciestData = [
    {
        id: 1,
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
        id: 2,
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
    {
        id: 3,
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
        id: 4,
        title: 'Кнели со спагетти',
        likes: 231,
        follows: 124,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Kneli,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 5,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        likes: 180,
        follows: 120,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Potato,
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 6,
        title: 'Картофельные рулетики с грибами',
        likes: 180,
        follows: 85,
        tag: 'Детские блюда',
        tagIcon: childTasty,
        image: Rooletiki,
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 7,
        title: 'Овощная лазанья из лаваша',
        likes: 152,
        follows: 85,
        tag: 'Блюда на гриле',
        tagIcon: dishWasher,
        image: Lazanya,
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 8,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        likes: 150,
        follows: 85,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Tefteli,
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
];
