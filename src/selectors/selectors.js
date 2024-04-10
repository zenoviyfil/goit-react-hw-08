export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;

export const selectNameFilter = state => state.filters.name;