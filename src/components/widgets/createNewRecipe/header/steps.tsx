import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Icon,
    Image,
    Input,
    Text,
    Textarea,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { useUploadImageMutation } from '~/query/services/upload';
import { FipleUploadResponce } from '~/query/types/types';

import { BlackPlus, DefaultImage, DeleteButton } from '../assets/Icons';
type Card = {
    step: number;
    stepDescription: string;
};
export function Steps() {
    const [step, setStep] = useState<Card[]>([{ step: 1, stepDescription: '' }]);
    const [recipeImage, setRecipeImage] = useState<string[]>(Array(step.length).fill(''));
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const addStep = () => {
        setStep((prev) => [...prev, { step: step.length + 1, stepDescription: '' }]);
        setRecipeImage((prev) => [...prev, '']);
    };

    const deleteStep = (index: number) => {
        setStep((prev) =>
            prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, step: i + 1 })),
        );
        setRecipeImage((prev) => prev.filter((_, i) => i !== index));
    };

    const changeDescription = (index: number, value: string) => {
        setStep((prev) => prev.map((s, i) => (i === index ? { ...s, stepDescription: value } : s)));
    };

    const recipeImageWidth = useBreakpointValue({
        base: '328px',
        md: '346px',
    });
    const recipeImageHeight = useBreakpointValue({
        base: '160px',
    });

    const filePicker = useRef<HTMLInputElement>(null);
    const [fileUpload] = useUploadImageMutation();

    const handleImageClick = (index: number) => {
        setSelectedIndex(index);
        filePicker.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        uploadFile(selectedIndex, file);
    };

    const uploadFile = async (index: number, file: File | null) => {
        if (file) {
            console.log('changed');
            const formData = new FormData();
            formData.append('file', file);
            const responce = (await fileUpload(formData)) as FipleUploadResponce;
            if ('data' in responce) {
                setRecipeImage((prev) =>
                    prev.map((r, i) => (i === index ? (r = responce.data.url) : r)),
                );
                return;
            }
            setRecipeImage((prev) => prev.map((r, i) => (i === index ? (r = '') : r)));
        }
    };

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
                        <CardHeader p={0} boxShadow='none'>
                            {recipeImage[index].length ? (
                                <Image
                                    onClick={() => handleImageClick(index)}
                                    minW={recipeImageWidth}
                                    maxW={recipeImageWidth}
                                    minH={recipeImageHeight}
                                    maxH={recipeImageHeight}
                                    src={`https://training-api.clevertec.ru/${recipeImage[index]}`}
                                    alt='defaultImage'
                                ></Image>
                            ) : (
                                <Box
                                    onClick={() => handleImageClick(index)}
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
                            <Icon
                                as={DeleteButton}
                                position='absolute'
                                w='14px'
                                h='14px'
                                top={6}
                                right={5}
                                onClick={() => deleteStep(index)}
                            ></Icon>
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
                                    Шаг {s.step}
                                </Text>
                            </Box>
                            <Textarea
                                value={step[index].stepDescription}
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
                                border='1px solid rgba(226, 232, 240, 1)'
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
                <Input
                    type='file'
                    accept='image/*, .png, .jpg, .web'
                    opacity='0'
                    height={0}
                    w={0}
                    lineHeight={0}
                    p={0}
                    m={0}
                    overflow='hidden'
                    onChange={(e) => handleChange(e)}
                    ref={filePicker}
                ></Input>
            </Box>
        </>
    );
}
