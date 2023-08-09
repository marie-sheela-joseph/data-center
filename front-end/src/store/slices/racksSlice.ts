import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'store/store';
import { baseUrl } from 'api';

const url = baseUrl + 'racks';
export type device = {
  _id: string;
  deviceType: string;
  modelName: string;
  numberOfPorts: number;
  verticalSize: number;
};
export type rackItemType = {
  _id: string;
  availableVerticalUnits: number;
  devices: device[];
};

export interface rackItemsState {
  rackItems: rackItemType[];
  currentRackId: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: rackItemsState = {
  rackItems: [],
  currentRackId: '',
  status: 'idle',
};

export const getRackItems = createAsyncThunk('racks/getRacks', async () => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = response.json();
  return data;
});

export const rackItemsSlice = createSlice({
  name: 'rackItems',
  initialState,
  reducers: {
    setCurrentRack: (state, action) => {
      state.currentRackId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRackItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRackItems.fulfilled, (state, action) => {
        state.rackItems = action.payload.racks;
        state.status = 'idle';
      });
  },
});

export const { setCurrentRack } = rackItemsSlice.actions;
export const selectCartItems = (state: RootState) => state.racks;
export default rackItemsSlice.reducer;
