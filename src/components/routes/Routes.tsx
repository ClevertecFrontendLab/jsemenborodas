import { useEffect } from 'react';
import React from 'react';
import { Navigate, Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';

export function AppRoutes() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const { data: categoriesAll, isLoading } = useGetCategoriesQuery({ isOnlyParent: true });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathSegments]);
    if (isLoading) return;
    return (
        <>
            <RouterRoutes>
                {categoriesAll?.map((cat) => {
                    const subCategories = cat.subCategories || [];
                    const firstSub = subCategories[0]?.category;

                    return (
                        <Route key={cat._id} path={`/${cat.category}`}>
                            <Route
                                index
                                key={`${cat._id}${cat.subCategories[0]._id}`}
                                element={<Navigate to={`${firstSub}`} replace />}
                            />

                            {subCategories.map((sub) => (
                                <React.Fragment key={sub._id}>
                                    <Route path={`${sub.category}`} element={<DefaultPage />} />
                                    <Route path={`${sub.category}/*`} element={<RecipePage />} />
                                </React.Fragment>
                            ))}
                        </Route>
                    );
                })}

                <Route path='/the-juiciest' element={<JuciestPage />} />
                <Route path='/the-juiciest/*' element={<RecipePage />} />
                <Route path='/Vegan/*' element={<VeganKitchenPage />} />
                <Route path='/:/:/:/*' element={<RecipePage />} />
                <Route path='/not-found/*' element={<ErrorPage />} />
                <Route path='/' element={<Main />} />
                <Route path='*' element={<Navigate to='/not-found/' replace />} />
                <Route path='/login' element={<Navigate to='/' replace />} />
                <Route path='/register' element={<Navigate to='/' replace />} />
            </RouterRoutes>
        </>
    );
}
