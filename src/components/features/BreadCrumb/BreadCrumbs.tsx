import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipesQuery } from '~/query/services/recipes';
import { setAppError } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();
    const [recipeId, setRecipeId] = useState<string>('');
    // const [recipeTitle, setRecipeTitle] = useState<string>('');
    const dispatch = useAppDispatch();
    const displayPaths = location.pathname.split('/').filter((x) => x);
    const { data, isError } = useGetCategoriesQuery({});
    const breadcrumbName = (route: string) => data?.find((item) => item.category === route)?.title;
    useEffect(() => {
        if (displayPaths[0] === 'the-juiciest' && displayPaths[1]) {
            setRecipeId(displayPaths[1]);
        } else if (displayPaths[0] && displayPaths[1] && displayPaths[2]) {
            setRecipeId(displayPaths[2]);
        } else {
            setRecipeId('');
        }
    }, [location.pathname, displayPaths]);
    const { data: recipeData, isLoading } = useGetRecipesQuery({ id: recipeId });
    if (isError) {
        dispatch(setAppError('Error'));
        localStorage.setItem('Error', 'Error');
    } else {
        if (isLoading) {
            return <></>;
        } else {
            return (
                <Breadcrumb
                    separator={<Text w='8px'> &gt; </Text>}
                    listProps={{ flexWrap: 'wrap' }}
                    data-test-id='breadcrumbs'
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Главная</BreadcrumbLink>
                    </BreadcrumbItem>
                    {displayPaths.map((_, index) => {
                        const route = `${displayPaths[index]}`;
                        const displayName = breadcrumbName(route);
                        return (
                            <BreadcrumbItem key={route}>
                                <BreadcrumbLink href={route}>{displayName}</BreadcrumbLink>
                            </BreadcrumbItem>
                        );
                    })}
                    {recipeId?.length && recipeData?.data && recipeData.data.length > 0 && (
                        <>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>{recipeData?.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                            ,
                        </>
                    )}
                </Breadcrumb>
            );
        }
    }
};
