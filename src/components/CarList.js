// CarList.jsx
import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector((state) => {
    const {
      form,
      data: { cars, searchTerm },
    } = state;

    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
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
        {cars.map((car) => {
          // Decide if the car should be bold
          /**Logic to make the matched string bold  */
          const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());

          return (
            <li
              key={car.id}
              className={`${bold && "matched"} car`}
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
          );
        })}
      </ul>
    </div>
  );
}
