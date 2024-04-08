// CarList.jsx
import { useSelector, useDispatch } from "react-redux";

export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.data.cars;
  });

  console.log(cars);
  return (
    <div className="car-list">
      <h2>Car List</h2>
      <ul>
        {cars.map((car, index) => (
          <li
            key={index}
            className="car"
          >
            <div className="car-info">
              <span className="car-name">{car.name}</span>
              <span className="car-cost">$ {car.cost}</span>
            </div>

            <button className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
