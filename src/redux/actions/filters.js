export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_CATEGORY = 'SET_CATEGORY';

export const setSortBy = sortBy => ({ type: SET_SORT_BY, sortBy });
export const setCategory = categoryIndex => ({ type: SET_CATEGORY, categoryIndex });
