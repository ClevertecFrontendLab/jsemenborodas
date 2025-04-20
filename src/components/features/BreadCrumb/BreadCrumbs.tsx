import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';

import { RecipeData } from '~/components/entities/Data/RecipeData';

interface BreadcrumbsProps {
    pathNames: string[];
    recipeId?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathNames }) => {
    const breadCrumbNames: Record<string, string> = {
        '/Juciest': 'Самое сочное',
        '/SecondDelicious': 'Вторые блюда',
        '/veganKitchen': 'Веганская кухня',
        '/salad': 'Салаты',
        '/meatSalad': 'Мясные салаты',
        '/fishSalad': 'Рыбные салаты',
        '/snacks': 'Закуски',
        '/meatSnacks': 'Мясные закуски',
        '/fishSnacks': 'Рыбные закуски',
        '/vegetableSnacks': 'Овощные закуски',
        '/hotSnacks': 'Теплые закуски',
        '/sandwiches': 'Бутерброды',
        '/fastFood': 'Фастфуд',
        '/firstDelicious': 'Первые блюда',
        '/meatSoups': 'Мясные супы',
        '/vegetableSoups': 'Овощные супы',
        '/broths': 'Бульоны',
        '/coldSoups': 'Холодные супы',
        '/dietSoups': 'Диетические супы',
        '/secondDelicious': 'Вторые блюда',
        '/meatDishes': 'Мясные',
        '/fishDishes': 'Рыбные',
        '/vegetableDishes': 'Овощные',
        '/chickenDishes': 'Из птицы',
        '/mushroomDishes': 'Из грибов',
        '/offalDishes': 'Из субпродуктов',
        '/steamedDishes': 'На пару',
        '/dumplings': 'Пельмени, вареники',
        '/flourGarnishes': 'Мучные гарниры',
        '/vegetableGarnishes': 'Овощные гарниры',
        '/pizza': 'Пицца',
        '/sushi': 'Суши',
        '/cakes': 'Десерты, выпечка',
        '/pancakes': 'Блины и оладьи',
        '/piesAndDonuts': 'Пироги и пончики',
        '/rolls': 'Рулеты',
        '/cupcakes': 'Кексы и маффины',
        '/syrniki': 'Сырники и ватрушки',
        '/puffPastry': 'Из слоеного теста',
        '/chouxPastry': 'Из заварного теста',
        '/yeastPastry': 'Из дрожжевого теста',
        '/buns': 'Булочки и сдоба',
        '/bread': 'Хлеб',
        '/pizzaDough': 'Тесто на пиццу',
        '/creams': 'Кремы',
        '/beefs': 'Блюда на гриле',
        '/beef': 'Говядина',
        '/pork': 'Свинина',
        '/poultry': 'Птица',
        '/fish': 'Рыба',
        '/mushrooms': 'Грибы',
        '/vegetables': 'Овощи',
        '/garnishes': 'Гарниры',
        '/desserts': 'Десерты',
        '/bakery': 'Выпечка',
        '/rawDishes': 'Сыроедческие блюда',
        '/drinks': 'Напитки',
        '/childishDelicious': 'Детские блюда',
        '/glutenFree': 'Без глютена',
        '/sugarFree': 'Без сахара',
        '/allergenFree': 'Без аллергенов',
        '/complementaryFoods': 'Блюда для прикорма',
        '/healthyDelicious': 'Лечебное питание',
        '/childDiet': 'Детская диета',
        '/diet1': 'Диета №1',
        '/diet2': 'Диета №2',
        '/diet3': 'Диета №3',
        '/diet5': 'Диета №5',
        '/diet6': 'Диета №6',
        '/diet7': 'Диета №7',
        '/diet8': 'Диета №8',
        '/diet9': 'Диета №9',
        '/diet10': 'Диета №10',
        '/diet11': 'Диета №11',
        '/diet12': 'Диета №12',
        '/diet13': 'Диета №13',
        '/diet14': 'Диета №14',
        '/diet15': 'Диета №15',
        '/internationalFood': 'Национальные',
        '/americanCuisine': 'Американская кухня',
        '/armenianCuisine': 'Армянская кухня',
        '/greekCuisine': 'Греческая кухня',
        '/georgianCuisine': 'Грузинская кухня',
        '/italianCuisine': 'Итальянская кухня',
        '/spanishCuisine': 'Испанская кухня',
        '/chineseCuisine': 'Китайская кухня',
        '/mexicanCuisine': 'Мексиканская кухня',
        '/panAsianCuisine': 'Паназиатская кухня',
        '/russianCuisine': 'Русская кухня',
        '/turkishCuisine': 'Турецкая кухня',
        '/frenchCuisine': 'Французская кухня',
        '/swedishCuisine': 'Шведская кухня',
        '/japaneseCuisine': 'Японская кухня',
        '/otherCuisine': 'Другая кухня',
        '/sauces': 'Соусы',
        '/meatSauces': 'Соусы мясные',
        '/cheeseSauces': 'Соусы сырные',
        '/marinades': 'Маринады',
        '/juices': 'Напитки',
        '/meatPreserves': 'Мясные заготовки',
        '/fishPreserves': 'Рыбные заготовки',
        '/cucumberPreserves': 'Из огурцов',
        '/tomatoPreserves': 'Из томатов',
        '/mushroomPreserves': 'Из грибов',
        '/vegetablePreserves': 'Овощные заготовки',
        '/saladsCaviar': 'Салаты, икра',
        '/fruitPreserves': 'Из фруктов и ягод',
        '/blanks': 'Заготовки',
        '/smoothies': 'Смузи',
        '/compotes': 'Компоты',
        '/kissels': 'Кисели',
        '/coffee': 'Кофе',
        '/herbalTea': 'Лечебный чай',
        '/kvass': 'Квас',
        '/cocktails': 'Коктейли',
        '/alcoholicDrinks': 'Алкогольные',
        '/vegetablesSalad': 'Овощные салаты',
        '/hotSalad': 'Теплые салаты',
        '/juicesFresh': 'Соки и фреши',
        '/vegan': 'Веганские блюда',
        '/hot-snacks': 'Теплые закуски',
        '/hot-soups': 'Первые блюда',
        '/cold-salads': 'Холодные салаты',
        '/second-dish': 'Вторые блюда',
        '/poultry-dish': 'Из курицы',
        '/side-dishes': 'Гарниры',
        '/salads': 'Салаты',
        '/warm-salads': 'Теплые салаты',
    };
    const recipeId = pathNames[pathNames.length - 1];
    const hasRecipeId = !isNaN(Number(recipeId));

    const displayPaths = hasRecipeId ? pathNames.slice(0, -1) : pathNames;

    return (
        <Breadcrumb separator={<Text w='8px'> &gt; </Text>} listProps={{ flexWrap: 'wrap' }}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Главная</BreadcrumbLink>
            </BreadcrumbItem>
            {displayPaths.map((_, index) => {
                const route = `/${pathNames[index]}`;
                const displayName = breadCrumbNames[route];
                return (
                    <BreadcrumbItem key={route}>
                        <BreadcrumbLink href={route}>{displayName}</BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
            {hasRecipeId && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>
                        {RecipeData.find((recipe) => recipe.id === recipeId)?.title || ''}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
