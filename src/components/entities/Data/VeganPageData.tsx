import childTasty from '../../../../public/childTasty.png';
import dishWasher from '../../../../public/dishWasher.png';
import internationalFood from '../../../../public/internationalFood.png';
import pan from '../../../../public/pan.png';
import First from './JuciestPageData/veganImages/1.jpg';
import Second from './JuciestPageData/veganImages/2.jpg';
import Third from './JuciestPageData/veganImages/3.jpg';
import Fouth from './JuciestPageData/veganImages/4.jpg';
import Fifth from './JuciestPageData/veganImages/5.png';
import Sixth from './JuciestPageData/veganImages/6.jpg';
import Seven from './JuciestPageData/veganImages/7.jpg';
export const VeganPageData = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        likes: 152,
        follows: 85,
        tag: 'Национальные',
        tagIcon: internationalFood,
        image: First,
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'Alex Cook', profileImage: 'none' }],
    },
    {
        id: 2,
        title: 'Картофельные рулетики с грибами',
        likes: 152,
        follows: 85,
        tag: 'Детские блюда',
        tagIcon: childTasty,
        image: Second,
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 3,
        title: 'Том-ям с капустой кимчи',
        likes: 324,
        follows: 124,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Third,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'Елена Высоцкая', profileImage: 'none' }],
    },
    {
        id: 4,
        title: 'Чесночная картошка',
        likes: 152,
        follows: 85,
        tag: 'Национальные',
        tagIcon: internationalFood,
        image: Fouth,
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 5,
        title: 'Овощная лазанья из лаваша',
        likes: 152,
        follows: 85,
        tag: 'Блюда на гриле',
        tagIcon: dishWasher,
        image: Fifth,
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 6,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        likes: 324,
        follows: 124,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Sixth,
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 7,
        title: 'Овощная лазанья из лаваша',
        likes: 324,
        follows: 124,
        tag: 'Блюда на гриле',
        tagIcon: dishWasher,
        image: Seven,
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
    {
        id: 8,
        title: 'Пури',
        likes: 324,
        follows: 85,
        tag: 'Вторые блюда',
        tagIcon: pan,
        image: Second,
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        isRecomended: false,
        recomendedInfo: [{ id: 1, name: 'None', profileImage: 'none' }],
    },
];
