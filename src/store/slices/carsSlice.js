import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm(state, action) {
      console.log(action.type);
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      console.log(state.cars);
      state.cars.push({
        ...action.payload,
        id: nanoid(),
      });

      /**
       * action.payload = {
       *   name:"dummy car",
       *   cost:234324
       * }
       */
    },
    deleteCar(state, action) {
      // action.payload is going to be an id we pass from the component
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
