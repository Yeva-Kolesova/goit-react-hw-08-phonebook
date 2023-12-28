import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';

const reducer = combineReducers({
  contactsData: contactsReduser,
});

export const store = configureStore({
  reducer,
});