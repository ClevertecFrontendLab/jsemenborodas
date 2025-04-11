import { Route, Routes as RouterRoutes } from 'react-router';

import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';

export function AppRoutes() {
    return (
        <>
            <RouterRoutes>
                <Route path='/' element={<Main />} />
                <Route path='/JuciestPage/SecondDelicious' element={<JuciestPage />} />
            </RouterRoutes>
        </>
    );
}
