import { createSlice } from '@reduxjs/toolkit';

export const thunkSlice = createSlice({
  name: 'thunk',
  initialState: {
    value: [],
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.value = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.value = [];
    }
  },
});

const { actions, reducer } = thunkSlice;

export const { fetchDataSuccess, fetchDataFailure } = actions;

export default reducer;
