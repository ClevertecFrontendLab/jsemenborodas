import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Image,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { AlertConst } from '~/components/consts/AlertConsts';
import { ErrorStatus } from '~/components/consts/ErrorStatus';
import { BreakfastExit } from '~/icons/Icon';
import { useCreateRecipeDraftMutation } from '~/query/services/recipesnew';
import { saveDraftError } from '~/query/types/types';
import { setAppError, setAppLoader, setAppSuccess } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    CloseAndSaveTemplateModalDataSelect,
    toggleIsCloseAndSaveTemplateOpen,
} from '~/store/reducers/authModals';
import {
    selectorCategoriesIds,
    selectorDescription,
    selectorImage,
    selectorIngridients,
    selectorPortions,
    selectorSteps,
    selectorTime,
    selectorTitle,
    selectorValidSteps,
    setIsValidateStarted,
} from '~/store/reducers/createRecipe';

import breakfast from '../assets/Breakfast.png';
import { Pen } from '../assets/Icons';

export function SaveTemplateModal() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const path = useAppSelector(CloseAndSaveTemplateModalDataSelect);
    console.log(path);
    const recipeImageHeight = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });

    const recipeImageWidth = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });

    const handleIsModalOpen = (close: boolean) => {
        if (close) {
            dispatch(toggleIsCloseAndSaveTemplateOpen());
            if (path) navigate(path);
            return;
        }
        dispatch(toggleIsCloseAndSaveTemplateOpen());
    };
    const [createDraft] = useCreateRecipeDraftMutation();
    const validSteps = useAppSelector(selectorValidSteps);
    const title = useAppSelector(selectorTitle);
    const description = useAppSelector(selectorDescription);
    const time = useAppSelector(selectorTime);
    const portions = useAppSelector(selectorPortions);
    const ingridients = useAppSelector(selectorIngridients);
    const image = useAppSelector(selectorImage);
    const steps = useAppSelector(selectorSteps);
    const categoriesIds = useAppSelector(selectorCategoriesIds);
    const saveDraft = async () => {
        dispatch(setIsValidateStarted(true));
        dispatch(setAppLoader(true));

        if (validSteps.step1 && validSteps.step2 && validSteps.step3 && validSteps.step4) {
            const responce = await createDraft({
                title: title,
                description: description,
                time: time,
                portions: portions,
                ingredients: ingridients,
                image: image,
                steps: steps,
                categoriesIds: categoriesIds,
            });
            if ('data' in responce) {
                setAppSuccess('DraftSucess');
            }
            if ('error' in responce) {
                const error = responce as unknown as saveDraftError;
                const status = error.error.status;
                if (status === ErrorStatus.SERVERERROR) {
                    dispatch(setAppError(AlertConst.DRAFTSERVERERROR));
                } else {
                    dispatch(setAppError('error'));
                }
            }
        } else {
            dispatch(setAppError('DraftError'));
            dispatch(setAppLoader(false));
            dispatch(toggleIsCloseAndSaveTemplateOpen());
        }
    };
    return (
        <>
            <Box
                w='100%'
                h='100vh'
                position='fixed'
                top='0'
                bottom='0'
                left='0'
                right='0'
                display='flex'
                justifyContent='center'
                alignItems='center'
                zIndex={11}
            >
                <Box
                    w={{ base: 316, xl: 396 }}
                    h={{ base: 428, xl: 542 }}
                    bg='rgba(255, 255, 255, 1)'
                    borderRadius={16}
                    zIndex={11}
                    position='relative'
                >
                    <Box position='absolute' right={6} top={6}>
                        <Icon
                            as={BreakfastExit}
                            w={6}
                            h={6}
                            onClick={() => handleIsModalOpen(false)}
                        ></Icon>
                    </Box>

                    <Image
                        minW={recipeImageWidth}
                        maxW={recipeImageWidth}
                        minH={recipeImageHeight}
                        maxH={recipeImageHeight}
                        src={breakfast}
                        borderRadius={8}
                        alt='defaultImage'
                        mx='auto'
                        mt={8}
                    ></Image>
                    <VStack>
                        <Heading
                            fontFamily='Inter'
                            fontWeight={700}
                            fontSize={24}
                            lineHeight={8}
                            mt={8}
                        >
                            Выйти без сохранения?
                        </Heading>
                        <Text
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize={16}
                            lineHeight={6}
                            mt={2}
                            color='rgba(0, 0, 0, 0.64)'
                            w={{ base: '252px', xl: '332px' }}
                        >
                            Чтобы сохранить, нажмите кнопку сохранить черновик
                        </Text>
                        <Button
                            w={{ base: '252px', xl: '332px' }}
                            h='48px'
                            borderRadius='6px'
                            bg='rgba(0, 0, 0, 0.92)'
                            mt={6}
                            onClick={saveDraft}
                        >
                            <HStack>
                                <Icon as={Pen} w={4} h={4} />
                                <Text
                                    as='span'
                                    fontFamily='Inter'
                                    fontWeight={600}
                                    fontSize={18}
                                    lineHeight={7}
                                    color='rgba(255, 255, 255, 1)'
                                >
                                    Сохранить черновик
                                </Text>
                            </HStack>
                        </Button>
                        <Button
                            onClick={() => handleIsModalOpen(true)}
                            w={{ base: '252px', xl: '332px' }}
                            h='48px'
                            borderRadius='6px'
                            bg='rgba(255, 255, 255, 1)'
                            mt={2}
                        >
                            <Text
                                as='span'
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize={18}
                                lineHeight={7}
                                color='rgba(0, 0, 0, 0.92)'
                            >
                                Выйти без сохранения
                            </Text>
                        </Button>
                    </VStack>
                </Box>
            </Box>
            <Box
                zIndex={10}
                top={0}
                bottom={0}
                left={0}
                right={0}
                position='fixed'
                sx={{
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                }}
            ></Box>
        </>
    );
}
