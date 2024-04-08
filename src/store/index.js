import { configureStore } from "@reduxjs/toolkit";

import { changeCost, changeName, formReducer } from "./slices/formSlice";
import {
  changeSearchTerm,
  addCar,
  deleteCar,
  carsReducer,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    data: carsReducer,
    form: formReducer,
  },
});

export { store };

// We'll also export the action creators so that we do not have to go to slices every time we require the actions
export {
  changeCost,
  changeName,
  formReducer,
  changeSearchTerm,
  addCar,
  deleteCar,
  carsReducer,
};
