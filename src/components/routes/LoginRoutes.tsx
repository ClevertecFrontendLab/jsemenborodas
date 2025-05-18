import { Navigate, Route, Routes as RouterRoutes } from 'react-router';

import { userAuthSelector } from '~/store/app-slice';
import { useAppSelector } from '~/store/hooks';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { LoginPage } from '../Pages/loginPage/loginPage';
import { RegisterPage } from '../Pages/registerPage/RegisterPage';
import { VerificationPage } from '../Pages/verificationPage/VerificationPage';

export function LoginRoutes() {
    const isAuth = useAppSelector(userAuthSelector);
    const isBurgerOpen = false;
    return (
        <>
            <RouterRoutes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/verification' element={<VerificationPage />} />
                {isAuth ? (
                    <Route path='/' element={<DefaultPage isBurgerOpen={isBurgerOpen} />} />
                ) : (
                    <Route path='/' element={<Navigate to='/login' replace />} />
                )}
            </RouterRoutes>
        </>
    );
}
