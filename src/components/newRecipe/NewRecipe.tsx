import { Box } from '@chakra-ui/react';

import { NewRecipeData } from './NewRecipeData';

export function NewRecipe() {
    return (
        <>
            {NewRecipeData.map((recipe) => (
                <Box as='article'>{recipe.title}</Box>
            ))}
        </>
    );
}
