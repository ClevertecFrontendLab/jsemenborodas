import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Icon,
    Image,
    Text,
    Textarea,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    isStepUploadImageModalOpenSelect,
    toggleIsStepUploadImageOpen,
} from '~/store/reducers/authModals';
import {
    selectorIsSaveDraftStarted,
    selectorIsValidateStarted,
    setStep4,
    setSteps,
} from '~/store/reducers/createRecipe';

import { BlackPlus, DefaultImage, DeleteButton } from '../assets/Icons';
import { SaveStepImageModal } from './saveImageModal';
type Card = {
    stepNumber: number;
    description: string;
    image: string;
};
export function Steps() {
    const dispatch = useAppDispatch();
    const isSaveDraftStarted = useAppSelector(selectorIsSaveDraftStarted);
    const isValidateStarted = useAppSelector(selectorIsValidateStarted);
    const [step, setStep] = useState<Card[]>([{ stepNumber: 1, description: '', image: '' }]);
    const [isStepValidate, setIsStepValidate] = useState<boolean[]>([true]);
    const [recipeImage, setRecipeImage] = useState<string[]>(Array(step.length).fill(''));
    const addStep = () => {
        setStep((prev) => [
            ...prev,
            { stepNumber: step.length + 1, description: '', image: 'none' },
        ]);
        setRecipeImage((prev) => [...prev, '']);
    };
    const isModalOpen = useAppSelector(isStepUploadImageModalOpenSelect);
    const toggleModalOpen = () => {
        dispatch(toggleIsStepUploadImageOpen());
    };
    const deleteStep = (index: number) => {
        setStep((prev) =>
            prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, stepNumber: i + 1 })),
        );
        setRecipeImage((prev) => prev.filter((_, i) => i !== index));
    };

    const changeDescription = (index: number, value: string) => {
        setStep((prev) => prev.map((s, i) => (i === index ? { ...s, description: value } : s)));
    };

    const recipeImageWidth = useBreakpointValue({
        base: '328px',
        md: '346px',
    });
    const recipeImageHeight = useBreakpointValue({
        base: '160px',
    });
    const uploadImage = (index: number, value: string) => {
        setRecipeImage((prev) => prev.map((r, i) => (i === index ? value : r)));
    };
    const [subStep, setSubStep] = useState(false);

    useEffect(() => {
        if (isValidateStarted) {
            setIsStepValidate(
                step.map((s) => s.description.length !== 0 && s.description.length <= 300),
            );
        }
    }, [isValidateStarted, step]);

    useEffect(() => {
        if (step.every((s) => s.description.length) && isStepValidate.every((s) => s === true)) {
            setSubStep(true);
            return;
        }
        setSubStep(false);
    }, [step, isStepValidate]);

    if (subStep) {
        const newStep = step.map((s, i) => ({
            ...s,
            image: recipeImage[i].length ? recipeImage[i] : 'defaultImage',
        }));
        dispatch(setSteps(newStep));
        dispatch(setStep4(true));
    } else {
        dispatch(setStep4(false));
    }
    if (isSaveDraftStarted) {
        const newStep = step.map((s, i) => ({
            ...s,
            image: recipeImage[i].length ? recipeImage[i] : 'defaultImage',
        }));

        dispatch(setSteps(newStep));
    }
    return (
        <>
            <Text
                fontFamily='Inter'
                fontWeight={600}
                fontSize={{ base: 14, xl: 16 }}
                lineHeight={5}
                textAlign='left'
                w={{ base: '100%', md: 604, xl: 866, '2xl': 950 }}
                mt={{ base: 6, xl: 8 }}
                mx={{ md: 'auto' }}
            >
                Добавьте шаги приготовления{' '}
            </Text>
            <Box mx={{ md: 'auto' }} w={{ xl: '866px', '2xl': 950 }}>
                {step.map((s, index) => (
                    <Card
                        key={`card-${index}`}
                        p={0}
                        mt={{ base: 1.5, xl: 3 }}
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius={8}
                        boxShadow='none'
                        w={{ base: '328px', md: '604px', xl: '658px', '2xl': 668 }}
                        h={{ base: '352px', md: '160px' }}
                        display={{ md: 'flex' }}
                        flexDirection={{ md: 'row' }}
                    >
                        {isModalOpen && <SaveStepImageModal onclick={uploadImage} index={index} />}
                        <CardHeader p={0} boxShadow='none'>
                            {recipeImage[index].length ? (
                                <Image
                                    onClick={toggleModalOpen}
                                    minW={recipeImageWidth}
                                    maxW={recipeImageWidth}
                                    minH={recipeImageHeight}
                                    maxH={recipeImageHeight}
                                    src={`https://training-api.clevertec.ru/${recipeImage[index]}`}
                                    alt='defaultImage'
                                ></Image>
                            ) : (
                                <Box
                                    onClick={toggleModalOpen}
                                    minW={recipeImageWidth}
                                    maxW={recipeImageWidth}
                                    minH={recipeImageHeight}
                                    maxH={recipeImageHeight}
                                    bgColor='rgba(0, 0, 0, 0.08)'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Icon as={DefaultImage} w={8} h={8}></Icon>
                                </Box>
                            )}
                        </CardHeader>
                        <CardBody boxShadow='none' position='relative'>
                            {step.length > 1 && (
                                <Icon
                                    as={DeleteButton}
                                    position='absolute'
                                    w='14px'
                                    h='14px'
                                    top={6}
                                    right={5}
                                    onClick={() => deleteStep(index)}
                                ></Icon>
                            )}
                            <Box
                                w='fit-content'
                                borderRadius='4px'
                                bgColor='rgba(0, 0, 0, 0.06)'
                                py='2px'
                                px={2}
                            >
                                <Text
                                    fontFamily='Inter'
                                    fontWeight={600}
                                    fontSize={12}
                                    lineHeight={4}
                                >
                                    Шаг {s.stepNumber}
                                </Text>
                            </Box>
                            <Textarea
                                value={step[index].description}
                                onChange={(e) => {
                                    changeDescription(index, e.target.value);
                                }}
                                placeholder='Шаг'
                                mt={4}
                                p={0}
                                px={2}
                                sx={{
                                    '::placeholder': {
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: 'rgba(0, 0, 0, 0.36)',
                                        pt: 2,
                                    },
                                }}
                                size='sm'
                                border={
                                    isStepValidate[index]
                                        ? '1px solid rgba(226, 232, 240, 1)'
                                        : '1px solid red'
                                }
                                borderRadius='6px'
                                h={{ base: '116px', md: '84px' }}
                                maxH={{ base: '130px', md: '100px' }}
                            ></Textarea>
                        </CardBody>
                    </Card>
                ))}
                <Box
                    w={{ base: '100%', md: '604px', xl: 658, '2xl': 668 }}
                    textAlign='right'
                    mt={{ base: 4 }}
                >
                    <Button
                        w={{ base: '123px' }}
                        h={{ base: '32px' }}
                        bg='none'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        onClick={() => addStep()}
                    >
                        <HStack as='span'>
                            <Text
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize='14px'
                                lineHeight={5}
                            >
                                Новый шаг
                            </Text>{' '}
                            <Icon as={BlackPlus} w='14px' h='14px'></Icon>
                        </HStack>
                    </Button>
                </Box>
            </Box>
        </>
    );
}
