// CarList.jsx
import React from "react";

export default function CarList({ cars }) {
  return (
    <div className="car-list">
      <h2>Car List</h2>
      <ul>
        {/* {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))} */}
      </ul>
    </div>
  );
}
