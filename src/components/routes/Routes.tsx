import { useEffect, useState } from 'react';
import { Navigate, Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useGetOnlyParentCategoriesQuery } from '~/query/services/categories';
import { setAppError } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';
import { AlertNote } from '../widgets/alert/AlertNote';
import { Loader } from '../widgets/loader/Loader';

interface RoutesMenuProps {
    isBurgerOpen: boolean;
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
}

export function AppRoutes({ isBurgerOpen, isFilterHidden, setIsFilterHidden }: RoutesMenuProps) {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<
        { id: number; title: string; name: string }[]
    >([]);
    const { data: categoriesAll, isLoading, isError } = useGetOnlyParentCategoriesQuery({});
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathSegments]);
    if (isLoading) {
        return (
            <>
                <Loader></Loader>
            </>
        );
    } else {
        if (isError) {
            dispatch(setAppError('Error'));
            localStorage.setItem('Error', 'Error');
            return null;
        } else {
            return (
                <>
                    <AlertNote></AlertNote>
                    <RouterRoutes>
                        {categoriesAll?.map((cat) => {
                            const subCategories = cat.subCategories || [];
                            const firstSub = subCategories[0]?.category;

                            return (
                                <Route key={cat._id} path={`/${cat.category}`}>
                                    <Route
                                        index
                                        element={<Navigate to={`${firstSub}`} replace />}
                                    />

                                    {subCategories.map((sub) => (
                                        <Route
                                            key={sub._id}
                                            path={`${sub.category}`}
                                            element={<DefaultPage isBurgerOpen={isBurgerOpen} />}
                                        />
                                    ))}
                                </Route>
                            );
                        })}
                        <Route
                            path='/'
                            element={
                                <Main
                                    isBurgerOpen={isBurgerOpen}
                                    isFilterHidden={isFilterHidden}
                                    setIsFilterHidden={setIsFilterHidden}
                                    selectedFilterCategory={selectedFilterCategory}
                                    setSelectedFilterCategory={setSelectedFilterCategory}
                                />
                            }
                        />
                        <Route
                            path='/the-juiciest'
                            element={
                                <JuciestPage
                                    isBurgerOpen={isBurgerOpen}
                                    isFilterHidden={isFilterHidden}
                                    setIsFilterHidden={setIsFilterHidden}
                                />
                            }
                        />
                        <Route
                            path='/the-juiciest/:t'
                            element={
                                <RecipePage
                                    isBurgerOpen={isBurgerOpen}
                                    isFilterHidden={isFilterHidden}
                                    setIsFilterHidden={setIsFilterHidden}
                                />
                            }
                        />
                        <Route
                            path='/Vegan/:t'
                            element={
                                <VeganKitchenPage
                                    isBurgerOpen={isBurgerOpen}
                                    isFilterHidden={isFilterHidden}
                                    setIsFilterHidden={setIsFilterHidden}
                                    selectedFilterCategory={selectedFilterCategory}
                                    setSelectedFilterCategory={setSelectedFilterCategory}
                                />
                            }
                        />
                        <Route
                            path='/:t/:t/:t/*'
                            element={<RecipePage isBurgerOpen={isBurgerOpen} />}
                        />
                        <Route
                            path='/not-found/*'
                            element={<ErrorPage isBurgerOpen={isBurgerOpen} />}
                        />
                        <Route path='*' element={<Navigate to='/not-found/' replace />} />
                    </RouterRoutes>
                </>
            );
        }
    }
}
