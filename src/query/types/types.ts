export interface SubCategory {
    title: string;
    category: string;
    rootCategoryId: string;
}

export interface Category {
    _id: string;
    title: string;
    category: string;
    icon: string;
    description: string;
    subCategories: SubCategory[];
}
