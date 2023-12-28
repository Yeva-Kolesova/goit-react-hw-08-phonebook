import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://658d559f7c48dce94738f254.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
    'fetchContacts',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('contacts');

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'createContactThunk',
    async ({ name, number }, thunkAPI) => {
        try {
            const { data } = await axios.post('contacts', {
                name: name,
                phone: number,
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
