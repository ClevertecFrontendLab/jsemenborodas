import { ApiEndpoints } from '~/query/constants/api';

import { RecipeArguments } from '../recipes';

export function GetRicepeParam(data: RecipeArguments) {
    const params: RecipeArguments = {};
    let url: string = ApiEndpoints.TEST;
    if (data.page !== undefined) params.page = data.page;
    if (data.limit !== undefined) params.limit = data.limit;
    if (data.allergens !== undefined) params.allergens = data.allergens;
    if (data.searchString !== undefined) params.searchString = data.searchString;
    if (data.meat !== undefined) params.meat = data.meat;
    if (data.garnish !== undefined) params.garnish = data.garnish;
    if (data.subcategoriesIds !== undefined) params.subcategoriesIds = data.subcategoriesIds;
    if (data.sortBy !== undefined) params.sortBy = data.sortBy;
    if (data.sortOrder !== undefined) params.sortOrder = data.sortOrder;
    if (data.id !== undefined) {
        url = `${ApiEndpoints.RECIPES}${data.id}`;
    }
    return { params, url };
}
