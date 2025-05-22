import { useEffect } from 'react';
import React from 'react';
import { Navigate, Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { userAuthSelector } from '~/store/app-slice';
import { useAppSelector } from '~/store/hooks';

import { RoutesConsts } from '../consts/RoutesConsts';
import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { LoginPage } from '../Pages/loginPage/loginPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { RegisterPage } from '../Pages/registerPage/RegisterPage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';
import { VerificationPage } from '../Pages/verificationPage/VerificationPage';

export function AppRoutes() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const isAuth = useAppSelector(userAuthSelector);
    const { data: categoriesAll, isLoading } = useGetCategoriesQuery({ isOnlyParent: true });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathSegments]);
    if (isLoading) return;
    return (
        <>
            {isAuth ? (
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
                                        <Route
                                            path={`${sub.category}/*`}
                                            element={<RecipePage />}
                                        />
                                    </React.Fragment>
                                ))}
                            </Route>
                        );
                    })}

                    <Route path={RoutesConsts.juiciest} element={<JuciestPage />} />
                    <Route path={`${RoutesConsts.juiciest}/*`} element={<RecipePage />} />
                    <Route path={`${RoutesConsts.vegan}/*`} element={<VeganKitchenPage />} />
                    <Route path='/:/:/:/*' element={<RecipePage />} />
                    <Route path={`${RoutesConsts.notfound}/*`} element={<ErrorPage />} />
                    <Route path='/' element={<Main />} />
                    <Route path='*' element={<Navigate to={RoutesConsts.notfound} replace />} />
                    <Route path={RoutesConsts.login} element={<Navigate to='/' replace />} />
                    <Route path={RoutesConsts.register} element={<Navigate to='/' replace />} />
                </RouterRoutes>
            ) : (
                <RouterRoutes>
                    <Route path={RoutesConsts.login} element={<LoginPage />} />
                    <Route path={RoutesConsts.register} element={<RegisterPage />} />
                    <Route path={RoutesConsts.verification} element={<VerificationPage />} />
                    <Route path='*' element={<Navigate to={RoutesConsts.login} replace />} />
                </RouterRoutes>
            )}
        </>
    );
}
