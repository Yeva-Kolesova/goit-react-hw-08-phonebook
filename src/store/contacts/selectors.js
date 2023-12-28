export const selectContacts = state => state.contactsData.contacts.items;
export const selectFilter = state => state.contactsData.filter;
export const selectIsLoading = state => state.contactsData.contacts.isLoading;
export const selectError = state => state.contactsData.contacts.error;
