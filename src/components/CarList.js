// CarList.jsx
import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    const {
      data: { cars, searchTerm },
    } = state;
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // return state.data.cars;
  });

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };
  console.log(cars);
  return (
    <div className="car-list">
      <h2>Car List</h2>
      <ul>
        {cars.map((car, index) => (
          <li
            key={car.id}
            className="car"
          >
            <div className="car-info">
              <span className="car-name">{car.name}</span>
              <span className="car-cost">$ {car.cost}</span>
            </div>

            <button
              className="delete-button"
              onClick={() => handleDelete(car.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
