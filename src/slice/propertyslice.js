import { createSlice } from "@reduxjs/toolkit";
// import state from "sweetalert/typings/modules/state";

const initialState = {
  property: [],
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    addProperty: (state, action) => {
      state.property.push(action.payload);
    },
  },
});

// export const { addProperty, propertyError } = propertySlice.actions;

export default propertySlice.reducer;
