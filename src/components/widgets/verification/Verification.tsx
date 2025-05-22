import { AbsoluteCenter, Box, Heading, Icon, VStack } from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { BreakfastExit } from '~/icons/Icon';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { toggleIsVerifyOpen } from '~/store/reducers/authModals';
import { userEmailSelect } from '~/store/reducers/user';

import Breakfast from './assets/Breakfast.png';
export function Verification() {
    const email = useAppSelector(userEmailSelect);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <>
            <AbsoluteCenter
                position='fixed'
                w={{ base: '316px', xl: '396px' }}
                h={{ base: '516px', xl: '550px' }}
                bg='rgba(255, 255, 255, 1)'
                zIndex={11}
                borderRadius='16px'
                data-test-id='sign-up-success-modal'
            >
                <Box
                    w={{ base: '24px' }}
                    h={{ base: '24px' }}
                    position='absolute'
                    top='24px'
                    right='24px'
                    onClick={() => {
                        dispatch(toggleIsVerifyOpen());
                        navigate('/login');
                    }}
                    data-test-id='close-button'
                >
                    <Icon as={BreakfastExit} w={{ base: '24px' }} h={{ base: '24px' }}></Icon>
                </Box>
                <Box
                    w={{ base: '108px', xl: '206px' }}
                    h={{ base: '108px', xl: '206px' }}
                    mx={{ base: 'auto' }}
                    my={{ base: '32px' }}
                >
                    <Image src={Breakfast} alt='breakfast' w='100%' h='100%'></Image>
                </Box>
                <VStack w={{ base: '252px', xl: '332px' }} mx='auto' spacing={4}>
                    <Heading
                        as='h2'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize={24}
                        lineHeight={8}
                        color='rgba(0, 0, 0, 1)'
                        letterSpacing={{ base: '0.1px' }}
                    >
                        Остался последний шаг. Нужно верифицировать ваш e-mail.
                    </Heading>
                    <Text fontFamily='Inter' fontWeight={400} fontSize={16} lineHeight={6}>
                        Мы отправили вам на почту
                        <br />
                        <Box as='span' fontWeight={700}>
                            {email}
                        </Box>{' '}
                        <br />
                        ссылку для верификации.
                    </Text>
                    <Text
                        w={{ base: '100%' }}
                        mt='16px'
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={12}
                        lineHeight={4}
                        color='rgba(0, 0, 0, 0.64)'
                        letterSpacing={{ base: '0px' }}
                    >
                        <Box as='span' display={{ base: 'block', xl: 'inline-block' }}>
                            Не пришло письмо?{' '}
                        </Box>
                        <Box as='span' display={{ base: 'block', xl: 'inline-block' }}>
                            Проверьте папку Спам.
                        </Box>{' '}
                        <Box as='span' display={{ base: 'block', xl: 'inline-block' }}>
                            По другим вопросам свяжитесь{' '}
                        </Box>
                        <Box as='span' textDecoration='underline'>
                            с поддержкой.
                        </Box>
                    </Text>
                </VStack>
            </AbsoluteCenter>
        </>
    );
}
