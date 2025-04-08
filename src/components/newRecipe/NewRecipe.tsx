import { Box } from '@chakra-ui/react';

import { NewRecipeData } from './newRecipeData';

export function NewRecipe() {
    return (
        <>
            {NewRecipeData.map((recipe) => (
                <Box as='article'>{recipe.title}</Box>
            ))}
        </>
    );
}
