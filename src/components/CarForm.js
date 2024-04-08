// CarForm.jsx
import React, { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addCar } from "../store";

export default function CarForm() {
  const dispatch = useDispatch();

  const { carName, carCost } = useSelector((state) => {
    return {
      carName: state.form.name,
      carCost: state.form.cost,
    };
  });

  const handleNameChange = (e) => {
    const currentName = e.target.value;
    dispatch(changeName(currentName));
  };

  const handleValueChange = (e) => {
    const currentCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(currentCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission

    if (!carName || !carCost) return;
    console.log(carName, carCost);

    dispatch(addCar({ name: carName, cost: carCost }));

    // reset the form fields | Same long route of dispatching action to mini-reducers to do this
    dispatch(changeCost(0));
    dispatch(changeName(""));
  };

  return (
    <form
      className="car-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Car Name:</label>
        <input
          type="text"
          value={carName}
          onChange={handleNameChange}
          placeholder="Enter car name"
        />
      </div>
      <div className="form-group">
        <label>Car Value:</label>
        <input
          type="number"
          value={carCost || ""}
          onChange={handleValueChange}
          placeholder="Enter car value"
        />
      </div>
      <button
        type="submit"
        className="submit-button"
      >
        Submit
      </button>
    </form>
  );
}
