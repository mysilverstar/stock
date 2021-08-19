import { configureStore, createSlice } from "@reduxjs/toolkit";

export const Store = createSlice({
  name: "ReduxStore",
  initialState: {
    authenticate: { user: undefined, isAuth: false, checked: false },
    guestlock: true,
  },
  reducers: {
    logon: (state, action) => ({
      ...state,
      authenticate: {
        user: action.payload,
        isAuth: !!action.payload,
        checked: true,
      },
    }),
    //updatefinance: (state, action) => ({ ...state, finance: {action} }),
    testmode: (state, action) => ({ ...state, guestlock: !action.payload }),
  },
});

const store = configureStore({ reducer: Store.reducer });

export const { logon, testmode } = Store.actions;

export default store;
