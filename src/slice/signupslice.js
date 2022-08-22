import { createSlice } from '@reduxjs/toolkit'

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    userError: '',
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.signup = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    updateCurrentUser: (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;  
    },

    userLoggedIn: (state, action) => {
      state.signup = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },

    userLogout: (state) => {
        state.signup = false;
        state.id = "";
        state.firstName = "";
        state.lastName = "";
        state.email = "";  
    },

    signupError: (state, action) => {
        state.userError = action.payload.userError;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
    setCurrentUser, 
    userLogout, 
    userLoggedIn,
    signupError,
    updateCurrentUser,
} = signupSlice.actions;

export default signupSlice.reducer;