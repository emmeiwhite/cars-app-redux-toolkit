import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  // Also watch for cars/addCar action type | Using extraReducers
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
