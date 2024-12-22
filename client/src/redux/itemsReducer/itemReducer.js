import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllItem } from '../../clientUrl';

// Async thunk to fetch data
const fetchData = createAsyncThunk('ItemReducer/fetchData', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(getAllItem);
        return response.data; 
    } catch (err) {
        // Return a custom error message
        return rejectWithValue(err.response ? err.response.data : 'An error occurred');
    }
});

const ItemReducer = createSlice({
    name: 'ItemReducer',
    initialState: {
        data: [],
        isError: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle rejected case
            .addCase(fetchData.rejected, (state, action) => {
                state.isError = action.payload || 'Unknown error';
                state.isLoading = false;
            })
            // Handle pending case
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            // Handle fulfilled case
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.isError = null;
                state.isLoading = false;
            });
    },
});

export default ItemReducer.reducer;
export { fetchData };
