export const scrollController = {
    disabledScroll() {
        document.body.style.overflow = 'hidden';
    },
    enabledScroll() {
        document.body.style.overflow = 'auto';
    },
};
