import { useEffect } from 'react';
import React from 'react';
import { Navigate, Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { LoginPage } from '../Pages/loginPage/loginPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { RegisterPage } from '../Pages/registerPage/RegisterPage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';
import { VerificationPage } from '../Pages/verificationPage/VerificationPage';

interface RoutesMenuProps {
    isBurgerOpen: boolean;
}

export function AppRoutes({ isBurgerOpen }: RoutesMenuProps) {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const { data: categoriesAll } = useGetCategoriesQuery({ isOnlyParent: true });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathSegments]);

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
                                    <Route
                                        path={`${sub.category}`}
                                        element={<DefaultPage isBurgerOpen={isBurgerOpen} />}
                                    />
                                    <Route
                                        path={`${sub.category}/*`}
                                        element={<RecipePage isBurgerOpen={isBurgerOpen} />}
                                    />
                                </React.Fragment>
                            ))}
                        </Route>
                    );
                })}
                <Route path='/' element={<Main isBurgerOpen={isBurgerOpen} />} />
                <Route path='/the-juiciest' element={<JuciestPage isBurgerOpen={isBurgerOpen} />} />
                <Route
                    path='/the-juiciest/*'
                    element={<RecipePage isBurgerOpen={isBurgerOpen} />}
                />
                <Route path='/Vegan/*' element={<VeganKitchenPage isBurgerOpen={isBurgerOpen} />} />
                <Route path='/:/:/:/*' element={<RecipePage isBurgerOpen={isBurgerOpen} />} />
                <Route path='/not-found/*' element={<ErrorPage isBurgerOpen={isBurgerOpen} />} />
                <Route path='*' element={<Navigate to='/not-found/' replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/verification' element={<VerificationPage />} />
            </RouterRoutes>
        </>
    );
}
