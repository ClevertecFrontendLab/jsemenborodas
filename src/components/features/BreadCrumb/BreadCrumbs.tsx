import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipes';
import { setAppError } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const displayPaths = location.pathname.split('/').filter(Boolean);
    const recipeId =
        displayPaths.length === 2 && displayPaths[0] === 'the-juiciest'
            ? displayPaths[1]
            : displayPaths.length >= 3
              ? displayPaths[2]
              : '';
    const { data: categories, isError: isCategoriesError } = useGetCategoriesQuery({});
    const { data: recipe, isError: isRecipeError } = useGetRecipesQuery(
        { id: recipeId },
        { skip: !recipeId },
    );
    // const redirectedCategory = categories?.filter(
    //     (cat) => (cat.category === displayPaths[0] && cat.subCategories !== undefined) || undefined,
    // );

    if (isCategoriesError) {
        dispatch(setAppError('Error'));
        localStorage.setItem('Error', 'Error');
        return <></>;
    }
    /*Redirect to not-found */
    if (isRecipeError) {
        navigate(-1);
        dispatch(setAppError('Error'));
        localStorage.setItem('Error', 'Error');
    }
    // if (
    //     redirectedCategory &&
    //     displayPaths[0] !== undefined &&
    //     displayPaths[0] !== 'not-found' &&
    //     displayPaths[0] !== 'the-juiciest' &&
    //     !displayPaths[0].includes(redirectedCategory[0]?.category)
    // ) {
    //     dispatch(setAppError('Error'));
    //     localStorage.setItem('Error', 'Error');
    //     navigate('/not-found');
    // }
    // if (
    //     redirectedCategory &&
    //     displayPaths[0]?.includes(redirectedCategory[0]?.category) &&
    //     !redirectedCategory[0]?.subCategories.some((sub) => sub.category === displayPaths[1])
    // ) {
    //     dispatch(setAppError('Error'));
    //     localStorage.setItem('Error', 'Error');
    //     navigate('/not-found');
    // }
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

            {displayPaths[0] === 'the-juiciest' && (
                <BreadcrumbItem>
                    <BreadcrumbLink href='/the-juiciest'>Самое сочное</BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {displayPaths[0] !== 'the-juiciest' &&
                displayPaths.slice(0, 2).map((path, index) => {
                    const route = `/${displayPaths.slice(0, index + 1).join('/')}`;
                    const name = categories?.find((c) => c.category === path)?.title || path;
                    return (
                        <BreadcrumbItem key={route}>
                            <BreadcrumbLink href={route}>{name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}

            {recipe && 'title' in recipe && recipe?.title && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{recipe.title}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
