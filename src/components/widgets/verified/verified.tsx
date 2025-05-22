import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { AlertConst } from '~/components/consts/AlertConsts';
import { setAppError, setAppSuccess } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';
import { setIsAlertOpen } from '~/store/reducers/authModals';

export function Verified() {
    const dispatch = useAppDispatch();
    dispatch(setAppError(''));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailVerified = queryParams.get('emailVerified');
        if (emailVerified === 'true') {
            navigate('/login');
            dispatch(setAppSuccess(AlertConst.VERIFICATIONSUCCESS.toString()));
            return;
        }
        navigate('/register');
        dispatch(setAppError(AlertConst.EMAILREGERROR.toString()));
        dispatch(setIsAlertOpen(true));
    });
    return <></>;
}
