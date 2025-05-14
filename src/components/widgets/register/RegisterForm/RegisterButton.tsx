import { Box, Button } from '@chakra-ui/react';

import { useAppSelector } from '~/store/hooks';
import { progressSelect } from '~/store/reducers/user';

type RegisterButtonProps = {
    onClick?: () => void;
    step?: number;
};

export function RegisterButton({ onClick, step }: RegisterButtonProps) {
    const progressBar = useAppSelector(progressSelect);
    return (
        <>
            <Button
                mt='40px'
                w='100%'
                px={6}
                borderRadius='6px'
                border='1px solid rgba(0, 0, 0, 0.08)'
                bg='rgba(0, 0, 0, 0.92)'
                h='48px'
                onClick={onClick}
                isDisabled={
                    step === 1
                        ? Object.values(progressBar).filter((item) => item === true).length === 6
                            ? false
                            : true
                        : Object.values(progressBar).filter((item) => item === true).length >= 3
                          ? false
                          : true
                }
            >
                <Box
                    as='span'
                    fontFamily='Inter'
                    fontWeight={600}
                    fontSize={18}
                    lineHeight={7}
                    color='rgba(255, 255, 255, 1)'
                >
                    {step === 1 ? 'Зарегистрироваться' : 'Дальше'}
                </Box>
            </Button>
        </>
    );
}
