import { createSlice } from '@reduxjs/toolkit';

export const fakeSlice = createSlice({
  name: 'fake',
  initialState: {
    value: [],
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.value = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.value = action.payload;
    }
  },
});

const { actions, reducer } = fakeSlice;

export const { fetchDataSuccess, fetchDataFailure } = actions;

export default reducer;
