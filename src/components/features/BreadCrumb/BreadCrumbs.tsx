import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';

import { GetBreadcrumb } from '~/components/shared/utils/getBreadcrumbsUtil';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipes';

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const displayPaths = location.pathname.split('/').filter(Boolean);
    const recipeId =
        displayPaths.length === 2 && displayPaths[0] === 'the-juiciest'
            ? displayPaths[1]
            : displayPaths.length >= 3
              ? displayPaths[2]
              : '';
    const { data: categoriesResponse, isError: isCategoriesError } = useGetCategoriesQuery({});
    const categoryData = categoriesResponse?.length ? categoriesResponse : [];
    const categories = Array.isArray(categoryData) ? categoryData : [];
    const { data: recipe, isError: isRecipeError } = useGetRecipesQuery(
        { id: recipeId },
        { skip: !recipeId },
    );
    const redirectedCategory = categories?.filter(
        (cat) => (cat.category === displayPaths[0] && cat.subCategories !== undefined) || undefined,
    );
    const juiciest = 'the-juiciest';

    if (isCategoriesError) {
        return null;
    }
    if (isRecipeError) {
        navigate(-1);
    }
    return (
        <Breadcrumb
            separator='>'
            display={displayPaths[0] === 'not-found' ? 'none' : ''}
            listProps={{ flexWrap: 'wrap' }}
            data-test-id='breadcrumbs'
        >
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Главная</BreadcrumbLink>
            </BreadcrumbItem>

            {displayPaths[0] === juiciest && (
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${juiciest}`}>Самое сочное</BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {displayPaths[0] !== juiciest &&
                GetBreadcrumb(displayPaths, categories, redirectedCategory).map(
                    ({ key, name, secondRoute }) => (
                        <BreadcrumbItem key={key}>
                            <BreadcrumbLink
                                href={name === redirectedCategory?.[0]?.title ? secondRoute : key}
                            >
                                {name}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    ),
                )}

            {recipe && 'title' in recipe && recipe?.title && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{recipe.title}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
