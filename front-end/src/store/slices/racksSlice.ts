import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'store/store';
import { baseUrl } from 'api';

const url = baseUrl + 'racks';
export type rackItemType = {
  _id: string;
  availableVerticalUnits: Number;
  devices: {
    deviceType: String;
    modelName: String;
    numberOfPorts: Number;
    verticalSize: Number;
  }[];
};

// type newCartItemType = {
//   user_id: string;
//   menu: { id: string; quantity: number }[];
// };

// type updateCartItemType = {
//   _id: string;
//   user_id: string;
//   menu: { id: string; quantity: number }[];
// };

export interface rackItemsState {
  rackItems: rackItemType[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: rackItemsState = {
  rackItems: [],
  status: 'idle',
};

export const getRackItems = createAsyncThunk('racks/getRacks', async () => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const data = response.json();
  return data;
});

// export const postCartItem = createAsyncThunk(
//   'cartItems/postCartItem',
//   async (cartItem: newCartItemType) => {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         cartItem,
//       }),
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// export const deleteCartItem = createAsyncThunk(
//   'cartItems/deleteCartItem',
//   async (id: string) => {
//     const response = await fetch(`${url}/${id}`, {
//       method: 'delete',
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// export const patchCartItem = createAsyncThunk(
//   'cartItems/patchCartItem',
//   async (cartItem: updateCartItemType) => {
//     const { _id } = cartItem;
//     const response = await fetch(`${url}/${_id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         cartItem,
//       }),
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// export const getCartItem = createAsyncThunk(
//   'cartItems/getCartItem',
//   async (id: string) => {
//     const response = await fetch(`${url}/${id}`, {
//       method: 'GET',
//     });
//     const data = response.json();
//     return data;
//   }
// );

export const rackItemsSlice = createSlice({
  name: 'rackItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRackItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRackItems.fulfilled, (state, action) => {
        state.rackItems = action.payload;
        state.status = 'idle';
        console.log(state.rackItems);
      });
    // .addCase(getCartItems.rejected, (state) => {
    //   state.status = 'failed';
    // })
    // .addCase(postCartItem.fulfilled, (state, action) => {
    //   state.cartItems.push(action.payload);
    // })
    // .addCase(deleteCartItem.fulfilled, (state, action) => {
    //   const { _id } = action.payload;
    //   if (_id) {
    //     state.cartItems = state.cartItems.filter(
    //       (cartItem) => cartItem._id !== _id
    //     );
    //   }
    // })
    // .addCase(patchCartItem.fulfilled, (state, action) => {
    //   state.cartItems = state.cartItems.map((cartItem) =>
    //     cartItem._id === action.payload._id ? action.payload : cartItem
    //   );
    // });
  },
});

export const {} = rackItemsSlice.actions;
export const selectCartItems = (state: RootState) => state.racks;
export default rackItemsSlice.reducer;
