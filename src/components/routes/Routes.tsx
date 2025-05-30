import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import React from 'react';
import { Navigate, Outlet, Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { userAuthSelector } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

import { RoutesConsts } from '../consts/RoutesConsts';
import { CreateNewRecipePage } from '../Pages/createNewRecipe/CreateNewRecipePage';
import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { LoginPage } from '../Pages/loginPage/loginPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { RegisterPage } from '../Pages/registerPage/RegisterPage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';
import { VerificationPage } from '../Pages/verificationPage/VerificationPage';
import { AlertNote } from '../widgets/alert/AlertNote';
import { Footer } from '../widgets/footer/Footer';
import { Header } from '../widgets/header/Header';
import { Loader } from '../widgets/loader/Loader';

export function AppRoutes() {
    const location = useLocation();
    const { data: categoriesAll, isLoading } = useGetCategoriesQuery({
        isOnlyParent: true,
    });
    const isAuth = useAppSelector(userAuthSelector);
    const sessionAuth = sessionStorage.getItem('isAuth');
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const dispatch = useAppDispatch();
    const isAuthPage = ['login', 'register', 'verification'].includes(pathSegments[0]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname, dispatch]);

    if (isLoading) return <Loader />;

    return (
        <Grid
            minH='100vh'
            templateRows={!isAuthPage ? { base: 'auto 1fr auto' } : { base: '1fr' }}
            maxW={{ xl: 'calc(100vw)' }}
            overflow='hidden'
        >
            {!isAuthPage && (
                <GridItem>
                    <Header />
                </GridItem>
            )}

            <GridItem>
                <Loader />
                <RouterRoutes>
                    <Route path={RoutesConsts.login} element={<LoginPage />} />
                    <Route path={RoutesConsts.register} element={<RegisterPage />} />
                    <Route path={RoutesConsts.verification} element={<VerificationPage />} />

                    <Route element={<ProtectedRoute isAuth={isAuth || !!sessionAuth} />}>
                        <Route path='/' element={<Main />} />

                        {categoriesAll?.map((cat) => (
                            <Route key={cat._id} path={`/${cat.category}`}>
                                <Route
                                    index
                                    element={
                                        <Navigate
                                            to={`${cat.subCategories[0]?.category}`}
                                            replace
                                        />
                                    }
                                />
                                {cat.subCategories?.map((sub) => (
                                    <React.Fragment key={sub._id}>
                                        <Route path={`${sub.category}`} element={<DefaultPage />} />
                                        <Route
                                            path={`${sub.category}/*`}
                                            element={<RecipePage />}
                                        />
                                    </React.Fragment>
                                ))}
                            </Route>
                        ))}
                        <Route
                            path={RoutesConsts.newRecipe}
                            element={<CreateNewRecipePage />}
                        ></Route>
                        <Route path={RoutesConsts.juiciest} element={<JuciestPage />} />
                        <Route path={`${RoutesConsts.juiciest}/*`} element={<RecipePage />} />
                        <Route path={`${RoutesConsts.vegan}/*`} element={<VeganKitchenPage />} />
                        <Route path='/:/:/:/*' element={<RecipePage />} />
                        <Route path={RoutesConsts.notfound} element={<ErrorPage />} />
                        <Route path='*' element={<Navigate to={RoutesConsts.notfound} replace />} />
                    </Route>
                </RouterRoutes>
            </GridItem>

            {!isAuthPage && (
                <>
                    <GridItem>
                        <Footer />
                    </GridItem>
                    <AlertNote />
                </>
            )}

            {(isAuth || sessionAuth) && <Loader />}
        </Grid>
    );
}

const ProtectedRoute = ({ isAuth }: { isAuth: boolean }) => {
    if (!isAuth) {
        sessionStorage.removeItem('isAuth');
        return <Navigate to='/login' replace />;
    }
    return <Outlet />;
};
