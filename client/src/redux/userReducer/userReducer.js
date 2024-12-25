import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { login, signup } from "../../clientUrl";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(signup, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response ? err.response.data : "An error occurred"
      );
    }
  }
);

export const loginUser = createAsyncThunk('loginUser',
    async(data,{rejectWithValue})=>{
        try{
            const response = await axios.post(login,data);
            return response.data;
        }catch(err){
            return rejectWithValue(err.response ? err.response.data : "An error occurred")
        }
    }
)

const userReducer = createSlice({
  name: "userReducer",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
  
    //add user
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });


    //login user
    builder.addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });

  },
});

export default userReducer.reducer;
