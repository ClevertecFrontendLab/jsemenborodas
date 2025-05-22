import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { AlertConst } from '~/components/consts/AlertConsts';
import { ErrorStatus } from '~/components/consts/ErrorStatus';
import { useRegisterUserMutation } from '~/query/services/auth';
import { AuthError } from '~/query/types/types';
import { setAppError, setAppLoader } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { toggleIsVerifyOpen } from '~/store/reducers/authModals';
import {
    progressSelect,
    userEmailSelect,
    userFirstNameSelect,
    userLastNameSelect,
    userLoginSelect,
    userPasswordSelect,
} from '~/store/reducers/user';

import { RegisterFormPasswordInputs } from './RegisterFormPasswordInputs';
import { RegisterFormPersonalInputs } from './RegisterFormPersonalInputs';
import { RegisterStep } from './RegisterStep1';
import { RegisterStepTwo } from './RegisterStep2';

export function RegisterFormRegister() {
    const sliderWidth = useBreakpointValue({
        base: '328px',
        md: '355px',
        xl: '451px',
        '2xl': '461px',
    });
    const firstName = useAppSelector(userFirstNameSelect);
    const lastName = useAppSelector(userLastNameSelect);
    const email = useAppSelector(userEmailSelect);
    const login = useAppSelector(userLoginSelect);
    const password = useAppSelector(userPasswordSelect);
    const swiperRef = useRef<SwiperType | null>(null);
    const progressBar = useAppSelector(progressSelect);
    const [getRegister] = useRegisterUserMutation();
    const dispatch = useAppDispatch();
    const [_step, setStep] = useState(0);
    const handleOnSubmit = async () => {
        if (Object.values(progressBar).filter((i) => i === true).length === 6) {
            dispatch(setAppLoader(true));

            try {
                const response = await getRegister({
                    email: email,
                    login: login,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                });

                if ('error' in response) {
                    const AuthentificationError = response.error as AuthError;
                    const ErrorData = AuthentificationError.data;
                    const ErrorStatusCode = ErrorData.statusCode;
                    const ErrorStatusClient = AuthentificationError.status;

                    if (
                        ErrorStatusCode === ErrorStatus.ERROR ||
                        ErrorStatusClient === ErrorStatus.ERROR
                    ) {
                        dispatch(setAppError(ErrorData.message));
                    } else if (
                        ErrorStatusCode >= ErrorStatus.SERVERERROR ||
                        ErrorStatusClient >= ErrorStatus.SERVERERROR
                    ) {
                        dispatch(setAppError(AlertConst.USSUALERROR));
                    }
                } else {
                    if ('data' in response) {
                        dispatch(toggleIsVerifyOpen());
                    }
                }
            } catch (_error) {
                dispatch(setAppError(AlertConst.USSUALERROR));
            } finally {
                dispatch(setAppLoader(false));
            }
        }
    };
    return (
        <>
            <Box
                as='form'
                w={{ base: '100%' }}
                ml={{ '2xl': '24px' }}
                maxW={sliderWidth}
                overflow='hidden'
                data-test-id='sign-up-form'
            >
                <VStack w='100%' spacing='112px'>
                    <Swiper
                        speed={0}
                        cssMode={true}
                        slidesPerView={1}
                        style={{
                            maxWidth: sliderWidth,
                            minWidth: sliderWidth,
                            overflow: 'hidden',
                            padding: 0,
                            margin: 0,
                        }}
                        spaceBetween={500}
                        allowTouchMove={false}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            setStep(swiper.activeIndex);
                        }}
                    >
                        <SwiperSlide style={{ minWidth: sliderWidth, maxWidth: sliderWidth }}>
                            <VStack w={sliderWidth} p={0}>
                                <RegisterStep />
                                <RegisterFormPersonalInputs
                                    onClick={() => {
                                        swiperRef?.current?.slideNext();
                                    }}
                                />
                            </VStack>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: sliderWidth, maxWidth: sliderWidth }}>
                            <VStack w={sliderWidth}>
                                <RegisterStepTwo />
                                <RegisterFormPasswordInputs onClick={() => handleOnSubmit()} />
                            </VStack>
                        </SwiperSlide>
                    </Swiper>
                </VStack>
            </Box>
        </>
    );
}
