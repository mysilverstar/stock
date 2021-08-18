import { configureStore, createSlice } from "@reduxjs/toolkit";

export const Store = createSlice({
  name: "ReduxStore",
  initialState: {
    authenticate: { user: undefined, isAuth: false },
    guestlock: true,
  },
  reducers: {
    login: (state, action) => ({ ...state, authenticate: action.payload }),
    logout: (state, action) => ({
      ...state,
      authenticate: { user: undefined, isAuth: false },
    }),
    testmode: (state, action) => ({ ...state, guestlock: !action.payload }),
  },
});

const store = configureStore({ reducer: Store.reducer });

export const { login, logout, testmode } = Store.actions;

export default store;
