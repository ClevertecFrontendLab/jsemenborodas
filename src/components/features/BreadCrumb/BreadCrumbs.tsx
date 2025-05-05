import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipes';
import { setAppError } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const displayPaths = location.pathname.split('/').filter(Boolean);

    const recipeId =
        displayPaths.length === 2 && displayPaths[0] === 'the-juiciest'
            ? displayPaths[1]
            : displayPaths.length >= 3
              ? displayPaths[2]
              : '';
    console.log(recipeId);
    const { data: categories, isError: isCategoriesError } = useGetCategoriesQuery({});
    const { data: recipe, isError: isRecipeError } = useGetRecipesQuery(
        { id: recipeId },
        { skip: !recipeId },
    );
    if (isRecipeError) {
        //Заготовка под задание с error-page
    }
    if (isCategoriesError) {
        dispatch(setAppError('Error'));
        localStorage.setItem('Error', 'Error');
        return <></>;
    }

    return (
        <Breadcrumb separator='>'>
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
