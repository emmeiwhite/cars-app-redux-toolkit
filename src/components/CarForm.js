// CarForm.jsx
import React, { useState } from "react";

export default function CarForm() {
  const [carName, setCarName] = useState("");
  const [carValue, setCarValue] = useState("");

  const handleNameChange = (e) => {
    setCarName(e.target.value);
  };

  const handleValueChange = (e) => {
    setCarValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
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
          value={carValue}
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
