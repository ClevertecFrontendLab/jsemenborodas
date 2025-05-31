import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { AlertConst } from '~/components/consts/AlertConsts';
import { ErrorStatus } from '~/components/consts/ErrorStatus';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useCreateRecipeDraftMutation, useCreateRecipeMutation } from '~/query/services/recipesnew';
import { CreateRecipeError, CreateRecipeSuccess, saveDraftError } from '~/query/types/types';
import { setAppError, setAppLoader, setAppSuccess } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
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

import { SaveButton } from '../assets/Icons';

export function Buttons() {
    const dispatch = useAppDispatch();
    const validSteps = useAppSelector(selectorValidSteps);
    const navigate = useNavigate();
    const [createRecipe] = useCreateRecipeMutation();
    const [createDraft] = useCreateRecipeDraftMutation();
    const { data: categoriesResponse } = useGetCategoriesQuery({});
    const catData = categoriesResponse?.length ? categoriesResponse : [];
    const title = useAppSelector(selectorTitle);
    const description = useAppSelector(selectorDescription);
    const time = useAppSelector(selectorTime);
    const portions = useAppSelector(selectorPortions);
    const ingridients = useAppSelector(selectorIngridients);
    const image = useAppSelector(selectorImage);
    const steps = useAppSelector(selectorSteps);
    const categoriesIds = useAppSelector(selectorCategoriesIds);
    const startValidate = async () => {
        dispatch(setIsValidateStarted(false));
        dispatch(setIsValidateStarted(true));
        dispatch(setAppLoader(true));
        if (validSteps.step1 && validSteps.step2 && validSteps.step3 && validSteps.step4) {
            const responce = await createRecipe({
                title: title,
                description: description,
                time: time,
                portions: portions,
                ingredients: ingridients,
                image: image,
                steps: steps,
                categoriesIds: categoriesIds,
            });

            if ('error' in responce) {
                const error = responce as unknown as CreateRecipeError;
                const status = error.error.status;
                if (status === ErrorStatus.RECIPEXIST) {
                    dispatch(setAppError(AlertConst.RECIPEEXIST));
                } else if (status === ErrorStatus.SERVERERROR) {
                    dispatch(setAppError(AlertConst.RECIPESERVERERROR));
                }
            }
            if ('data' in responce) {
                const success = responce as unknown as CreateRecipeSuccess;
                const category = catData
                    .filter((c) => c.subCategories !== undefined)
                    .filter((c) =>
                        c.subCategories.find((s) => s._id === success.data.categoriesIds[0]),
                    )?.[0];
                const categoryName = category.category;
                const subcategoryName = category.subCategories.filter(
                    (s) => s._id === success.data.categoriesIds[0],
                )[0].category;
                const recipeId = success.data._id;
                const path = `/${categoryName}/${subcategoryName}/${recipeId}`;
                navigate(path);
                dispatch(setAppSuccess('RecipePublished'));
            }
        }
        dispatch(setAppLoader(false));
    };

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
                }
            }
        }
        dispatch(setAppLoader(false));
    };
    return (
        <>
            <Stack
                mt={{ base: 6, xl: 8 }}
                spacing={{ base: 5 }}
                flexDirection={{ base: 'column', md: 'row' }}
                mx='auto'
                w={{ xl: 720, '2xl': 788 }}
            >
                <Button
                    w={{ base: 328, md: 246 }}
                    h={12}
                    bgColor='rgba(255, 255, 255, 0.06)'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    onClick={() => saveDraft()}
                >
                    <HStack as='span'>
                        <Icon as={SaveButton} w={4} h={4}></Icon>
                        <Text
                            fontFamily='Inter'
                            fontWeight={600}
                            fontSize={18}
                            lineHeight={7}
                            color='rgba(0, 0, 0, 0.8)'
                        >
                            Сохранить черновик
                        </Text>
                    </HStack>
                </Button>
                <Button
                    onClick={startValidate}
                    w={{ base: 328, md: 246 }}
                    h={12}
                    bgColor='rgba(0, 0, 0, 0.92)'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                >
                    <HStack as='span'>
                        <Text
                            fontFamily='Inter'
                            fontWeight={600}
                            fontSize={18}
                            lineHeight={7}
                            color='rgba(255, 255, 255, 1)'
                        >
                            Опубликовать рецепт
                        </Text>
                    </HStack>
                </Button>
            </Stack>
        </>
    );
}
