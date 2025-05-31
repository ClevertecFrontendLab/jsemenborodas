import { Box, Flex, FlexProps, Icon, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    isCloseAndSaveTemplateModalOpenSelect,
    isUploadImageModalOpenSelect,
    toggleIsUploadImageOpen,
} from '~/store/reducers/authModals';
import {
    selectorIsSaveDraftStarted,
    selectorIsValidateStarted,
    setImage,
    setStep1,
} from '~/store/reducers/createRecipe';

import { DefaultImage } from './assets/Icons';
import { AddIngridients } from './header/AddIngridients';
import { Buttons } from './header/Buttons';
import { Header } from './header/Header';
import { SaveImageModal } from './header/saveImageModal';
import { SaveTemplateModal } from './header/saveTemplateModal';
import { Steps } from './header/steps';
export function CreateNewRecipe() {
    const dispatch = useAppDispatch();
    const isSaveDraftStarted = useAppSelector(selectorIsSaveDraftStarted);
    const isValidateStarted = useAppSelector(selectorIsValidateStarted);
    const [recipeImage, setRecipeImage] = useState('');
    const [isImageValid, setIsImageValid] = useState(true);
    const isModalOpen = useAppSelector(isUploadImageModalOpenSelect);
    const isTemplateModalOpen = useAppSelector(isCloseAndSaveTemplateModalOpenSelect);
    const handleIsModalOpen = () => {
        dispatch(toggleIsUploadImageOpen());
    };

    const recipeImageHeight = useBreakpointValue({
        base: '224px',
        xl: '410px',
    });

    const recipeImageWidth = useBreakpointValue({
        base: '328px',
        md: '232px',
        xl: '353px',
        '2xl': '553px',
    });

    const flexDirection = useBreakpointValue<FlexProps['direction']>({
        base: 'column',
        md: 'row',
    });

    useEffect(() => {
        console.log('0');
        if (isValidateStarted) {
            console.log('1');
            if (recipeImage.length) {
                setIsImageValid(true);
                dispatch(setStep1(true));
                dispatch(setImage(recipeImage));
                console.log('2');
                return;
            }
            setIsImageValid(false);
            dispatch(setStep1(false));
        }
    }, [isValidateStarted, recipeImage, dispatch]);
    if (isSaveDraftStarted) {
        dispatch(setImage(recipeImage));
    }
    return (
        <>
            <Box
                as='section'
                pt={{ base: 16, xl: 10 }}
                pl={{ xl: 1 }}
                px={{ base: 4, md: 0 }}
                w={{ base: '360px', md: '100%' }}
                h='100%'
                mb={{ base: '100px' }}
                mx={{ base: 'auto' }}
                maxW={{ md: '728px', xl: '100%' }}
                position='relative'
            >
                {isModalOpen && <SaveImageModal onclick={setRecipeImage} />}
                {isTemplateModalOpen && <SaveTemplateModal />}
                <Flex direction={flexDirection} mt={{ base: 4 }}>
                    {recipeImage.length ? (
                        <Image
                            minW={recipeImageWidth}
                            maxW={recipeImageWidth}
                            minH={recipeImageHeight}
                            maxH={recipeImageHeight}
                            src={`https://training-api.clevertec.ru/${recipeImage}`}
                            borderRadius={8}
                            alt='defaultImage'
                            onClick={handleIsModalOpen}
                        ></Image>
                    ) : (
                        <Box
                            minW={recipeImageWidth}
                            maxW={recipeImageWidth}
                            minH={recipeImageHeight}
                            maxH={recipeImageHeight}
                            bgColor='rgba(0, 0, 0, 0.08)'
                            border={isImageValid ? 'none' : '1px solid red'}
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            borderRadius={8}
                            onClick={handleIsModalOpen}
                        >
                            <Icon as={DefaultImage} w={8} h={8} />
                        </Box>
                    )}
                    <Header />
                </Flex>{' '}
                <VStack alignItems={{ xl: 'flex-start' }}>
                    <AddIngridients />
                    <Steps />
                    <Buttons />
                </VStack>
            </Box>
        </>
    );
}
