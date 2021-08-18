import { configureStore, createSlice } from "@reduxjs/toolkit";

export const Store = createSlice({
  name: "ReduxStore",
  initialState: {
    authenticate: { user: undefined, isAuth: false },
    guestLock: false,
  },
  reducers: {
    login: (state, action) => {
      return { ...state, authenticate: action.payload };
    },
    logout: (state, action) => {
      return { ...state, authenticate: { user: undefined, isAuth: false } };
    },
  },
});

const store = configureStore({ reducer: Store.reducer });

export const { login, logout } = Store.actions;

export default store;
