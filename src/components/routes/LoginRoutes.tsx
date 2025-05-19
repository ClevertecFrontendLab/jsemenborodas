import React, { useEffect } from 'react';
import { Navigate, Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { userAuthSelector } from '~/store/app-slice';
import { useAppSelector } from '~/store/hooks';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { LoginPage } from '../Pages/loginPage/loginPage';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { RegisterPage } from '../Pages/registerPage/RegisterPage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';
import { VerificationPage } from '../Pages/verificationPage/VerificationPage';

export function LoginRoutes() {
    const { data: categoriesAll } = useGetCategoriesQuery({ isOnlyParent: true });
    const isAuth = useAppSelector(userAuthSelector);
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathSegments]);
    return (
        <>
            <RouterRoutes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/verification' element={<VerificationPage />} />
                {isAuth ? (
                    <Route path='/' element={<DefaultPage />} />
                ) : (
                    <Route path='/' element={<Navigate to='/login' replace />} />
                )}
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
            </RouterRoutes>
        </>
    );
}
