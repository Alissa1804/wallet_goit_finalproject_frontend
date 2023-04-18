export const selectCategories = state => state.categories.allCategories || [];
export const selectIsLoading = state => state.categories.isLoading;
export const selectError = state => state.categories.error;
